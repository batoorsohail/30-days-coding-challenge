import { useDispatch, useSelector } from "react-redux"
import { getMissions, joinMission, leaveMission, selectAllMissions } from "../redux/missions/missionsSlice"
import { useEffect } from "react";

const Mission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const missions = useSelector((selectAllMissions));

  return (
    <>
    <table>
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

    </table>
    </>
  )
}

export default Mission