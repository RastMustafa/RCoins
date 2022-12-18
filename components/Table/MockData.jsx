import React from "react";
import { useState, useEffect } from "react";
import CryptoTable from "./CryptoTable";
function MockData() {
  const [coinsData, setCoinsData] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d"
      );
      const coinsData = await res.json();
      if (!res) {
        throw Error("coudnt fetch");
      }
      setCoinsData(coinsData);
    }

    fetchData();
  }, [coinsData]);

  if (!coinsData) {
    return <h1>is Loading...</h1>;
  }

  return <CryptoTable coinsData={coinsData} />;
}

export default MockData;
