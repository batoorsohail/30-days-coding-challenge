import { useSelector } from 'react-redux';
import { selectAllRockets } from '../redux/rockets/rocketsSlice';
import { selectAllMissions } from '../redux/missions/missionsSlice';

const MyProfilePage = () => {
  const rockets = useSelector(selectAllRockets);
  const missions = useSelector(selectAllMissions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const joinedMissions = missions.filter((mission) => mission.joinMission)

  return (
    <section className='flex gap-10 px-10 justify-center'>
      <article className='w-1/3'>
        <h2 className='text-2xl font-bold'>My Rockets</h2>
        {reservedRockets.length > 0 ? (
          reservedRockets.map((rocket) => (
            <div key={rocket.id} className='p-5 border'>
              <p>{rocket.rocketName}</p>
            </div>
          ))
        ) : (
          <div className='p-5 border'>
            <p>No rocket reserved</p>
          </div>
        )}
      </article>
      <article className='w-1/3'>
        <h2 className='text-2xl font-bold'>My Missions</h2>
        {joinedMissions.length > 0 ? (
          joinedMissions.map((mission) => (
            <div key={mission.id} className='p-5 border'>
              <p>{mission.missionName}</p>
            </div>
          ))
        ) : (
          <div className='p-5 border'>
            <p>No mission joined</p>
          </div>
        )}
      </article>
    </section>
  );
};

export default MyProfilePage;
