// const appUrl=process.env.REACT_APP_URL;
// const appApiPort=process.env.REACT_APP_API_PORT;

export const CoinList = (currency) =>
  `https://stockedge-backend.onrender.com/api/top-stocks/:1`;

export const SingleCoin = (id) =>
  `https://stockedge-backend.onrender.com/api/stock-details/${id}`;

// export const HistoricalChart = (id, days = 365, currency) =>
//   `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const HistoricalChart = (id, days = 365) =>
  `https://stockedge-backend.onrender.com/api/price/${id}/${days}`;




export const TrendingStocks = () =>
`https://stockedge-backend.onrender.com/api/trending-stocks/1`;
