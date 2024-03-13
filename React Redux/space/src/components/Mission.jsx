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
    </>
  )
}

export default Mission