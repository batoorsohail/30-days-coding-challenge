import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { selectAllRockets, getRockets } from "../redux/rockets/rocketsSlice"

const RocketsPage = () => {


  const rockets = useSelector(selectAllRockets);
  return (
    <h1>Hello World</h1>
  )
}

export default RocketsPage