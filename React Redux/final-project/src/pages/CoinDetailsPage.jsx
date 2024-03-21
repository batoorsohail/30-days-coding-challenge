import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllCoins } from '../redux/coins/coinsSlice';

const CoinDetailsPage = () => {
  const coins = useSelector(selectAllCoins);
  const { coinId } = useParams();

  const cryptoCoin = coins.find((coin) => coin.coinId === coinId);

  return (
    <section className="bg-pink-500 h-screen">
      <div className="flex justify-between items-center px-10 py-5">
        <img className="w-32" src={cryptoCoin.coinImage} alt={cryptoCoin.coinName} />
        <div>
          <h2 className="text-white text-3xl font-bold">{cryptoCoin.coinName}</h2>
          <p className="text-white text-xl font-bold">{cryptoCoin.coinPrice}</p>
        </div>
      </div>
      <section className="coin-section">
        <div className="flex items-center justify-between p-5 bg-pink-400">
          <p className="text-white text-lg font-bold">Coin Rank:</p>
          <p className="text-white text-lg font-bold">{cryptoCoin.coinRank}</p>
        </div>
        <div className="flex items-center justify-between p-5 bg-pink-400">
          <p className="text-white text-lg font-bold">Coin Price Change:</p>
          <p className="text-white text-lg font-bold">{cryptoCoin.coinPriceChange}</p>
        </div>
      </section>
    </section>
  );
};

export default CoinDetailsPage;
