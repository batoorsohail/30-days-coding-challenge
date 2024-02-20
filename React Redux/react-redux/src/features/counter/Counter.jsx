import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset())
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <p>{count}</p>
      <div>
        <button className="px-5 py-2 rounded-md border" onClick={() => dispatch(increment())}>+</button>
        <button className="px-5 py-2 rounded-md border" onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={() => dispatch(resetAll())}>Reset</button>
      </div>
    </section>
  )
}

export default Counter