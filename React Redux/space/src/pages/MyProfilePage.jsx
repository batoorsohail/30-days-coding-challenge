import { useSelector } from 'react-redux';
import { selectAllRockets } from '../redux/rockets/rocketsSlice';

const MyProfilePage = () => {
  const rockets = useSelector(selectAllRockets);

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
