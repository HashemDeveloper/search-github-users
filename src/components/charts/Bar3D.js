import React from 'react';
import ReactFC from "react-fusioncharts";

const Bar3D = (props) => {
    const data = props.data;
    const chartConfigs = {
        type: "bar3d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
          chart: {
           caption:"Most Forked",
           yAxisName:"Forks",
           xAxisName:"Repos",
           xAxisNameFontSize:"16px",
           yAxisNameFontSize:"16px"
          },
          data
        }
      };
    return (
        <ReactFC {...chartConfigs} />
    );
};

export default Bar3D;