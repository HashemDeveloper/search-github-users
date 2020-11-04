import React from "react";

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);


const Doghnut2D = (props) => {
    const data = props.data;
    const chartConfigs = {
        type: "doughnut2d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
          chart: {
           caption:"Stars Per Language",
           decimals:0,
           theme:'candy',
           doughnutRadius:'45%',
           showPercentValues:0
          },
          data
        }
      };
    return (
        <ReactFC {...chartConfigs} />
    );
}

export default Doghnut2D;