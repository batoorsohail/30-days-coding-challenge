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
            <td className="border">
              {mission.joinMission ? <p className="bg-teal-500 text-white px-2 w-20 rounded">Active Member</p> : <p>Not a Member</p> }
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