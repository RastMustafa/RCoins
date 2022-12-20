import { useQuery } from "@tanstack/react-query";
import Chart, {
  CommonSeriesSettings,
  Series,
  Reduction,
  ArgumentAxis,
  Label,
  ValueAxis,
  ZoomAndPan,
  LoadingIndicator,
  Grid,
  Crosshair,
  Size,
} from "devextreme-react/chart";

function OhlcChart({ coinId }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["mainChartData"],
    queryFn: () =>
      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=30`).then((res) => res.json()),
  });

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }
  if (error) {
    return <h1>Error ...</h1>;
  }

  const formateData = () => {
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
    return formatedData;
  };

  return (
    <div className="w-full">
      <Chart id="chart" title={coinId.toUpperCase()} dataSource={formateData()}>
        <LoadingIndicator enabled={true} />
        <ZoomAndPan argumentAxis="both" />
        <CommonSeriesSettings argumentField="date" type="candlestick" />
        <Size height={400} />
        <Series color="#82c494" name=" " openValueField="o" highValueField="h" lowValueField="l" closeValueField="c">
          <Reduction color="red" />
        </Series>
        <ArgumentAxis workdaysOnly={true}>
          <Grid visible={true} opacity={0.5} />
          <Label format="shortDate" />
        </ArgumentAxis>
        <Crosshair enabled={true} color="#949494" width={1} dashStyle="dot">
          <Label visible={true} backgroundColor="#949494"></Label>
        </Crosshair>
        <ValueAxis tickInterval={0.001}>
          <Grid opacity={0.2} />
        </ValueAxis>
      </Chart>
    </div>
  );
}

export default OhlcChart;
