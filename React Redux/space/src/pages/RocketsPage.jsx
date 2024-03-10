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
    <section className="flex flex-col gap-10 px-20">
      {rockets.map((rocket) => (
        <article key={rocket.id} className="flex items-center gap-5">
          <img src={rocket.flickerImage} alt="rocket" className="w-72 rounded" />
          <div className="flex flex-col gap-5">
            <p className="text-xl font-bold">{rocket.rocketName}</p>
            <p>{rocket.description}</p>
            <button type="button" className="bg-blue-500 text-white px-5 py-2 w-32 rounded-md">Reserve</button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default RocketsPage