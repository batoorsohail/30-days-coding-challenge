import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAllRockets, getRockets, reserveRocket, cancelReserveRocket } from '../redux/rockets/rocketsSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const handelReserve = (rocket) => {
    dispatch(reserveRocket(rocket.id));
  };

  const handelCancelReserve = (rocket) => {
    dispatch(cancelReserveRocket(rocket.id));
  };

  const rockets = useSelector(selectAllRockets);
  return (
    <section className="flex flex-col gap-10 px-20">
      {rockets.map((rocket) => (
        <article key={rocket.id} className="flex items-center gap-5">
          <img src={rocket.flickerImage} alt="rocket" className="w-72 rounded" />
          <div className="flex flex-col gap-5">
            <p className="text-xl font-bold">{rocket.rocketName}</p>
            <p>{rocket.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default RocketsPage;
