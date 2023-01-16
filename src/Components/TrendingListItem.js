import React from 'react'
import "../App.css"
import { SymbolState } from '../Context/CryptoContext'

const idToUrl={
  "reliance":"reliance-industrial-infrastructure",
  "nifty50": "nifty-50",
  "sensex":"bse-sensex",
  "cipla": "cipla",
  "tatasteel":"tata",
  "ashokleyland":"ashok-leyland",
  "eichermotors":"eicher-motors"
}

export default function TrendingListItem(props) {
    const {symbol}=SymbolState()
    const imageUrl=idToUrl[props.coin.id]
    const indicesText=(props.coin.id=="nifty50" || props.coin.id=="sensex")?"/indices":"";
  return (
    <div className="trendingItem">
      
        <img src={`https://s3-symbol-logo.tradingview.com${indicesText}/${imageUrl}.svg`} crossOrigin="anonymous" alt={props.coin.name} className="itemImage"/>
       
        <span className="symbol">{props.coin.symbol.toUpperCase()}</span>
        
        {
           props.coin.price_change_percentage_24h>=0 &&  <div className="changeContainer">
           <span className="triangleUp"></span>
           <span className="percentageChange positiveChange">{props.coin?.price_change_percentage_24h}%</span>
         </div>
        }
         {
           props.coin.price_change_percentage_24h<0 &&  <div className="changeContainer">
           <span className="triangleDown"></span>
           <span className="percentageChange negativeChange">{props.coin?.price_change_percentage_24h}%</span>
         </div>
        }
    
        <div className="itemPrice">{`${symbol} ${props.coin?.current_price.toLocaleString()}`}</div>
       
    </div>
  )
}
