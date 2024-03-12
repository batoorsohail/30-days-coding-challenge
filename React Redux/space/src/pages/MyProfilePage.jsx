import { useDispatch, useSelector } from "react-redux";
import { getRockets, selectAllRockets } from "../redux/rockets/rocketsSlice";
import { useEffect } from "react";

const MyProfilePage = () => {
  const rockets = useSelector(selectAllRockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets())
  }, [dispatch]);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      {reservedRockets.length > 0 ? (
        reservedRockets.map((rocket) => (
          <div key={rocket.id}>
            <p>{rocket.rocketName}</p>
          </div>
        ))
      ) : (
        <div>
          <p>No rocket reserved</p>
        </div>
      )}
    </>
  );
};

export default MyProfilePage;