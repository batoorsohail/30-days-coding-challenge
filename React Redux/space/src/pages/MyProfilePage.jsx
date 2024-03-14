import { useSelector } from 'react-redux';
import { selectAllRockets, selectAllMissions } from '../redux/rockets/rocketsSlice';

const MyProfilePage = () => {
  const rockets = useSelector(selectAllRockets);
  const missions = useSelector(selectAllMissions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const joinedMissions = missions.filter((mission) => mission.joinMission)

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
