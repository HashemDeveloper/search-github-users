import React from 'react';

import ReactFC from "react-fusioncharts";

const Column3D = (props) => {
    const data = props.data;
    const chartConfigs = {
        type: "column3d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
          chart: {
           caption:"Most Popular",
           yAxisName:"Stars",
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

export default Column3D;