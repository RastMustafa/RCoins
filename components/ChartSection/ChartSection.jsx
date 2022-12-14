import React from "react";
import Chart from "./Chart";
import { Option, Select } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// color function
function isRed(value) {
  if (value > 0) {
    return "text-green-400";
  } else {
    return "text-red-400";
  }
}

function ChartSection() {
  const [coinId, setCoinId] = useState("bitcoin");

  // fetch data from api
  const { isLoading, error, data } = useQuery({
    queryKey: [`${coinId}1`],
    queryFn: () =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }
  if (error) {
    return <h1>Error ...</h1>;
  }
  return (
    <>
      <div className="flex lg:flex-row border-4 border-yellow-50  relative flex-col shadow-xl bg-white bg-opacity-10 backdrop-blur-3xl	 bg-slate-200  font-header  md:px-2 gap-12  w-full   container mx-auto  py-5">
        <div className=" w-auto pl-4  ">
          <Select onChange={(e) => setCoinId(e)} variant="static" label="Coins">
            <Option value="bitcoin">Bitcoin</Option>
            <Option value="ethereum">Etherum</Option>
            <Option value="tron">TRX</Option>
            <Option value="ripple">XRP</Option>
          </Select>
          <div className="mt-4 py-4 text-display text-md grid grid-cols-2 text-xs sm:text-sm  font-semibold font-body lg:flex lg:flex-col gap-4 w-full">
            <div>
              Price : <span className="font-bold text-md">${parseFloat(data[0]?.current_price).toFixed(4)}</span>
            </div>
            <div>
              Market Cap(24) : <span className="font-bold text-md">${parseFloat(data[0].market_cap).toFixed(2)}</span>
            </div>
            <div>
              Market cap change 24h :{" "}
              <span className={`font-bold text-md + ${isRed(parseFloat(data[0].market_cap_change_24h))}`}>
                ${parseFloat(data[0].market_cap_change_24h).toFixed(2).slice(1)}
              </span>
            </div>
            <div>
              Volume 24h : <span className="font-bold text-md">${parseFloat(data[0].total_volume).toFixed(4)}</span>
            </div>
            <div>
              Price Change 24h :{" "}
              <span className={`font-bold text-md + ${isRed(parseFloat(data[0].price_change_24h))}`}>
                ${parseFloat(data[0].price_change_24h).toFixed(4).slice(1)}
              </span>
            </div>
            <div>
              Change rate 24h :{" "}
              <span className={`font-bold text-md + ${isRed(parseFloat(data[0].price_change_percentage_24h))}`}>
                {parseFloat(data[0].price_change_percentage_24h).toFixed(4).slice(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full  flex-1  ">
          <Chart coinId={coinId} />
        </div>
      </div>
    </>
  );
}

export default ChartSection;
