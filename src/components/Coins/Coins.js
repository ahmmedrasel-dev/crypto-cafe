import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => res.json())
      .then(data => setCoins(data))
  }, [])
  return (
    <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
      <p className='text-center text-3xl font-bold text-gray'>Available Crypto Currencies: {coins.length}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 mt-8'>
        {coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard>)}
      </div>
    </div>
  );
};

export default Coins;