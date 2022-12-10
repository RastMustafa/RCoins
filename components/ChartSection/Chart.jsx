import React, { useEffect, useState } from "react";

import Chart, {
  CommonSeriesSettings,
  Series,
  Reduction,
  ArgumentAxis,
  Label,
  Format,
  ValueAxis,
  Title,
  Legend,
  Export,
  Tooltip,
  ZoomAndPan,
  LoadingIndicator,
  Grid,
  CommonAxisSettings,
  Crosshair,
  Size,
} from "devextreme-react/chart";

function App() {
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=30"
      );
      const data = await res.json();
      if (!res) {
        throw Error("couldnt fetch ");
      }
      const formatedData = [];
      for (let i of data) {
        const dataObj = {
          date: new Date(i[0]),
          l: i[3],
          h: i[2],
          o: i[1],
          c: i[4],
        };
        formatedData.push(dataObj);
      }
      setDataSource(formatedData);
      //  console.log(formatedData);
    }
    getData();
  }, []);

  if (!dataSource) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-full">
      <Chart id="chart" title="Bitcoin" dataSource={dataSource}>
        <LoadingIndicator enabled={true} />
        <ZoomAndPan argumentAxis="both" />
        <CommonSeriesSettings argumentField="date" type="candlestick" />
        <Size height={400} />
        <Series
          color="#82c494"
          name=" "
          openValueField="o"
          highValueField="h"
          lowValueField="l"
          closeValueField="c"
        >
          {/* or "zoom" | "pan" | "none" */}
          <Reduction color="red" />
        </Series>
        <ArgumentAxis workdaysOnly={true}>
          <Grid visible={true} opacity={0.5} />
          <Label format="shortDate" />
        </ArgumentAxis>
        <Crosshair enabled={true} color="#949494" width={1} dashStyle="dot">
          <Label visible={true} backgroundColor="#949494"></Label>
        </Crosshair>
        <ValueAxis tickInterval={500}>
          <Grid opacity={0.2} />
        </ValueAxis>
      </Chart>
    </div>
  );
}

export default App;
