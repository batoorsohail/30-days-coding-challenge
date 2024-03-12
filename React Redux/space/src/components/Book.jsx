import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectAllRockets, getRockets, reserveRocket, cancelReserveRocket,
} from '../redux/rockets/rocketsSlice';

const Book = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const handleReserve = (rocket) => {
    dispatch(reserveRocket(rocket.id));
  };

  const handleCancelReserve = (rocket) => {
    dispatch(cancelReserveRocket(rocket.id));
  };

  const rockets = useSelector(selectAllRockets);

  return (
    <>
        {rockets.map((rocket) => (
          <article key={rocket.id} className="flex items-center gap-5">
            <img src={rocket.flickerImage} alt="rocket" className="w-72 rounded" />
            <div className="flex flex-col gap-5">
              <p className="text-xl font-bold">{rocket.rocketName}</p>
              <div>
                {rocket.reserved && (<p className="bg-teal-500 text-white px-2 w-20 rounded">Reserved</p>)}
                <p>{rocket.description}</p>
              </div>
              {rocket.reserved ? (
                <button type="button" onClick={() => handleCancelReserve(rocket)} className="bg-white text-gray-400 border border-gray-400 px-3 py-2 w-[18%] rounded-md">
                  Cancel Reservation
                </button>
              ) : (
                <button type="button" onClick={() => handleReserve(rocket)} className="bg-blue-500 text-white  px-3 py-2 w-[18%] rounded-md">
                  Reserve Rocket
                </button>
              )}
            </div>
          </article>
        ))}
    </>
  )
}

export default Book