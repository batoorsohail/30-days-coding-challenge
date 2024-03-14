import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getMissions, joinMission, leaveMission, selectAllMissions,
} from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch]);

  const missions = useSelector((selectAllMissions));

  const handleJoinMission = (mission) => {
    dispatch(joinMission(mission.id));
  };

  const handleLeaveMission = (mission) => {
    dispatch(leaveMission(mission.id));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="border py-2">
              Mission
            </th>
            <th className="border py-2">
              Description
            </th>
            <th className="border py-2">
              Status
            </th>
            <th className="border py-2">
              Leave/Join
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td className="border font-bold">{mission.missionName}</td>
              <td className="border px-2">{mission.description}</td>
              <td className="border px-2">
                {mission.joinMission ? (
                  <div className="flex text-center bg-teal-500 rounded px-2 w-32">
                    <p className="text-white">Active Member</p>
                  </div>
                ) : (
                  <div className="flex text-center bg-slate-400 rounded px-2 w-32">
                    <p className="text-white">Not a Member</p>
                  </div>
                ) }
              </td>
              <td className="border px-2">
                {mission.joinMission ? (
                  <button type="button" onClick={() => handleLeaveMission(mission)} className="text-red-500 border border-red-500 rounded w-[110px] py-2">Leave Mission</button>)
                  : (<button type="button" onClick={() => handleJoinMission(mission)} className="text-slate-400 border border-slate-400 rounded w-[110px] py-2">Join Mission</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Mission;
