import { useSelector } from 'react-redux';
import { selectAllRockets } from '../redux/rockets/rocketsSlice';
import { selectAllMissions } from '../redux/missions/missionsSlice';

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
      {joinedMissions.length > 0 ? (
        joinedMissions.map((mission) => (
          <div key={mission.id}>
            <p>{mission.missionName}</p>
          </div>
        ))
      ) : (
        <div>
          <p>No mission joined</p>
        </div>
      )}
    </>
  );
};

export default MyProfilePage;
