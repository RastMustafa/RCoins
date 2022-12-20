import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  Chart,
  Title,
  CommonSeriesSettings,
  Series,
  Legend,
  ArgumentAxis,
  ValueAxis,
  CommonAnnotationSettings,
  Font,
  Image,
  Annotation,
  Size,
  Grid,
  Label,
  Margin,
} from "devextreme-react/chart";
import { dataSource, annotationSources } from "./data.js";

function ChartCol({ coinId }) {
  console.log(coinId);
  const { isLoading, error, data } = useQuery({
    queryKey: [coinId],
    queryFn: () =>
      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=14`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }
  if (error) {
    return <h1>Error ...</h1>;
  }

  const dormateData = () => {
    const element = [];
    for (let i of data.prices) {
      element.push({
        date: i[0],
        close: i[1],
      });
    }

    return element;
  };

  return (
    <div className=" h-16 w-36 bg-red-2  ">
    <Chart id="chart"  dataSource={dormateData()}>
        <CommonSeriesSettings color={'green'} barNegativeColor argumentField="date" type="line" />
        {/* <Legend visible={false} /> */}
        <Series valueField="close" name="AAPL" />
        <ArgumentAxis visible={false} argumentType="datetime">
          <Grid visible={false} opacity={0} />
        </ArgumentAxis>
        <ValueAxis visible={false} tickInterval={'none'}>
          {/* <Grid visible={false} opacity={0.2} /> */}
        </ValueAxis>
        <Size  height={70} />
      </Chart>
    </div>
  );
}

export default ChartCol;
