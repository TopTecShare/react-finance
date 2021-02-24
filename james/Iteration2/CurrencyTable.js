import React from 'react'

const CurrencyTable = ({ image, name, symbol, price, priceChange, marketcap }) => {
        return (
            <div className="stock-container">
                <div className="stock-row">
                    <div className="stock">
                        <img src={image} />
                        <h1>{name}</h1>
                        <p className="stock-symbol">{symbol}</p>
                    </div>
                    <div className="stock-data">
                        <p className="stock-price">{price}</p>
                        {priceChange < 0 ? (
                            <p className="stock-percent red">{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className="stock-percent green">{priceChange.toFixed(2)}%</p>
                        )}
                        <p className="stock-marketcap">
                            Mkt Cap: ${marketcap.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

export default CurrencyTable
