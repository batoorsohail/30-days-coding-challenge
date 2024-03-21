import { useSelector } from "react-redux";
import { selectAllCoins } from "../redux/coins/coinsSlice";
import { useParams } from "react-router-dom";

const CoinDetailsPage = () => {
  const coins = useSelector(selectAllCoins);
  const { coinId } = useParams();

  const cryptoCoin = coins.find((coin) => coin.coinId === coinId);

  return(
    <section>
          <div>
            <img src={cryptoCoin.coinImage} alt={cryptoCoin.coinName} />
            <div>
              <h2>{cryptoCoin.coinName}</h2>
              <p>{cryptoCoin.coinPrice}</p>
            </div>
          </div>
          <section>
            <div>
              <p>{cryptoCoin.coinRank}</p>
            </div>
            <div>
              <p>{cryptoCoin.coinPriceChange}</p>
            </div>
          </section>
    </section>
  )
};

export default CoinDetailsPage;
