import React from 'react';
import './Coin.css';

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className="custom w-full sm:w-full m:w-full lg:w-2/3 xl:w-2/3 inline-flex  p-5 mx-auto container items-center my-5  outline rounded-lg">
        <div className="w-full md:w-1/2 p-10 mx-10 ">
            <img src={image} className="" alt="crypto"/>
        </div>
        <div className="w-full md:w-1/2">
            <h1 className="py-2">{name}</h1>
            <p className="py-2">{symbol}</p>
            <p className="py-2">${price}</p>
            <p className="py-2">${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
                <p className=' py-2 red'>
                    {priceChange.toFixed(2)}
                </p>
            ) : (
                <p className=' py-2 green'>
                    {priceChange.toFixed(2)}
                </p>
            )}
            <p className="py-2">
                Mkt Cap: ${marketcap.toLocaleString()}
            </p>
        </div>        
    </div>
  )
}

export default Coin;
