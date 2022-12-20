import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import CryptoTable from "./CryptoTable";
function MockData() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["dataTable"],
    queryFn: () =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  if (error) {
    return <h1>Error ...</h1>;
  }

  console.log(data);
  return <CryptoTable coinsData={data} />;
}

export default MockData;
