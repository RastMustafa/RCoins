import React from "react";
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

function ChartCol() {
  return (
    <div className="overflow-hidden max-w-[10rem]">
      <Chart id="chart" dataSource={dataSource}>
        <CommonSeriesSettings argumentField="date" type="line" />
        <Legend visible={false} />
        <Series valueField="close" name="AAPL" />
        <ArgumentAxis visible={false} argumentType="datetime">
          <Grid visible={false} opacity={0} />
        </ArgumentAxis>
        <ValueAxis visible={false} tickInterval={500}>
          <Grid visible={false} opacity={0.2} />
        </ValueAxis>
        <Size height={100} width={100} />
      </Chart>
    </div>
  );
}

export default ChartCol;
