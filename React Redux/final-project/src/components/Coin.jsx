import { useDispatch, useSelector } from "react-redux"
import { selectAllCoins, getCoins } from "../redux/coins/coinsSlice"
import { useEffect } from "react";

const Coin = () => {
  const coins = useSelector(selectAllCoins);

  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length ===0) {
      dispatch(getCoins())
    }
  }, [dispatch]);
  
  return (
    <>
      {
        coins.map((coin) => (
          <section key={coin.coinId}>
            <p>{coin.coinName}</p>
          </section>
        ))
      }
    </>
  )
}

export default Coin