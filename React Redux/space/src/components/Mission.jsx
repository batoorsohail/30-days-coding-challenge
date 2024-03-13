import { useDispatch, useSelector } from "react-redux"
import { getMissions, joinMission, leaveMission, selectAllMissions } from "../redux/missions/missionsSlice"
import { useEffect } from "react";

const Mission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const missions = useSelector((selectAllMissions));

  const handleJoinMission = (mission) => {
    dispatch(joinMission(mission.id));
  }

  const handleLeaveMission = (mission) => {
    dispatch(leaveMission(mission.id));
  }

  return (
    <>
    <table>
      <thead>
        <tr>
          <th className="border">
            Mission
          </th>
          <th className="border">
            Description
          </th>
          <th className="border">
            Status
          </th>
          <th className="border">
          </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td className="border font-bold">{mission.missionName}</td>
            <td className="border">{mission.description}</td>
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
            <td className="border">
              {mission.joinMission ? (
                <button onClick={() => handleLeaveMission(mission)}>Leave Mission</button>) :
                (<button onClick={() => handleJoinMission(mission)}>Join Mission</button>)
              }
            </td>
          </tr>
          ))}
      </tbody>
    </table>
    </>
  )
}

export default Mission