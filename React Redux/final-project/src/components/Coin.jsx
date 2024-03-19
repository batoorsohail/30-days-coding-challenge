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
          <section key={coin.coinId} className="flex items-center justify-center flex-col bg-pink-400 w-1/2 p-6">
            <div className="w-20">
              <img src={coin.coinImage} alt={coin.coinName} />
            </div>
            <div>
              <p className="text-white text-lg font-bold">{coin.coinName}</p>
              <p className="text-white text-lg font-bold">{coin.coinPrice}$</p>
            </div>
          </section>
        ))
      }
    </>
  )
}

export default Coin