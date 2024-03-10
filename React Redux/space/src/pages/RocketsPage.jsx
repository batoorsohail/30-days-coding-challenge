import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { selectAllRockets, getRockets } from "../redux/rockets/rocketsSlice"

const RocketsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch])


  const rockets = useSelector(selectAllRockets);
  return (
    <section>
      {rockets.map((rocket) => (
        <section key={rocket.id}>
          <img src={rocket.flickerImage} alt="rocket" className="w-72" />
          <p className="text-xl font-bold">{rocket.rocketName}</p>
          <p>{rocket.description}</p>
        </section>
      ))}
    </section>
  )
}

export default RocketsPage