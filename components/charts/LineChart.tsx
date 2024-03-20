import React, { useState, useMemo, useContext, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

import { theme } from "../../components/theme1/ThemeRegistry";
import { withStyles, WithStyles } from "@material-ui/core/styles";
// import { Theme } from "core";
// import { chartsDataFormatter } from "helpers/chartsDataFormatter";
import {
  cartesianGridProps,
  responsiveContainerProps,
  XAxisProps,
  YAxisProps,
  //   zoomIn,
  //   zoomOut,
  //   ZoomInOutProps,
} from "./chartsHelper";

//import CustomTooltip from "./components/Tooltip";
// import CustomLegend from "./components/Legend";
// import CustomTick from "./components/CustomTick";

// import ZoomOutIcon from "assets/svg/ZoomOutIcon";
import styles from "./styles";

interface DataPoint {
  [key: string]: number | string;
  label: string;
  value: number;
}

interface LinesChartProps {
  data: DataPoint[];
  legends: string[];
  xAxisLabel: string;
  yAxisLabel: string;
  type: string;
  isADayRange: boolean;
  isAFiveDayRange: boolean;
  isABigRange: boolean;
  isPercent: boolean;
}

interface LinesChartState {
  filterKeys: string[];
  areaLeft: number;
  areaRight: number;
  chartData: DataPoint[];
  refX1: string;
  refX2: string;
  showDate: boolean;
  showTime: boolean;
}

const LinesChart: React.FC<LinesChartProps> = ({ data, legends }) => {
  const classes = styles();

  const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;

    if (value > 2500) {
      return (
        <svg
          x={cx - 10}
          y={cy - 10}
          width={20}
          height={20}
          fill="red"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
        </svg>
      );
    }

    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="green"
        viewBox="0 0 1024 1024"
      >
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    );
  };
  // labels: salesData?.map((data) => data.monthName).reverse(),
  // const reversedData = [...data].reverse();
  const legendsArr = legends.slice(
    legends.indexOf("monthName") + 1,
    legends.length
  );
  console.log(legendsArr);

  const CustomTooltip = ({ active, payload, label }) => {
    console.log(payload, "payload");
    if (active && payload?.length) {
      return (
        <div className="bg-warning p-3 shadow">
          <span>{label}</span>
          <br />
          {payload.map((ele, index) => (
            <>
              <small key={index} className="text-secondary">
                {ele.name} : {ele.value}
              </small>
              <br />
            </>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className={classes.zoomIconWrapper}></div>
      <ResponsiveContainer {...responsiveContainerProps}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthName" reversed={true} />

          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip
            content={<CustomTooltip active={false} payload={[]} label={""} />}
          />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          {legendsArr.map((legend, index) => (
            <Legend
              key={index}
              wrapperStyle={{
                position: "relative",
              }}
              type={"square"}
              //value={legend}
            />
          ))}
          {/* {legendsArr
            .map((legend, index) => (
              <Line
                type="monotone"
                key={legend}
                dataKey={legend} // Use the dynamic legend key
                stroke={index % 2 === 0 ? "#8884d8" : "#82ca9d"} // Alternate stroke colors
                strokeWidth={3}
              />
            ))
            .reverse()} */}
          {legendsArr
            ?.map((legend, index) => (
              <React.Fragment key={index}>
                <Line
                  type="monotone"
                  //  yAxisId={index % 2 ==="left" ?"right"}
                  yAxisId={index % 2 === 0 ? "left" : "right"}
                  key={legend}
                  dataKey={legend}
                  //dot={<CustomizedDot />}
                  stroke={index % 2 === 0 ? "#8884d8" : "#82ca9d"} // Alternate stroke colors
                  //stroke={`${theme.palette.charts.line[`line${index + 1}`]}`}
                  strokeWidth={3}
                />
                {/* <Line
                  type="monotone"
                  // yAxisId="2"
                  // xAxisId="2"
                  key={legend.totalSales}
                  dataKey="totalSales"
                  stroke="#82ca9d"
                  dot={<CustomizedDot />}
                  //stroke={`${theme.palette.charts.line[`line${index + 1}`]}`}
                  strokeWidth={3}
                /> */}
              </React.Fragment>
            ))
            .reverse()}
        </LineChart>
      </ResponsiveContainer>
      {/* <ResponsiveContainer {...responsiveContainerProps}>
        <LineChart data={dataToRender} margin={{ left: 10 }}>
          <CartesianGrid {...cartesianGridProps} />
          <XAxis {...XAxisProps} dataKey={"value"} hide={true} xAxisId="1" />
          <XAxis
            {...XAxisProps}
            xAxisId="2"
            label={{
              value: `${xAxisLabel}`,
              position: "bottom",
              fill: theme.palette?.secondary.main,
              offset: 10,
            }}
          />
          <YAxis {...YAxisProps} yAxisId="1" hide={true} />
          <YAxis
            {...YAxisProps}
            yAxisId="2"
            label={{
              value: `${yAxisLabel}`,
              position: "insideLeft",
              angle: -90,
              style: { textAnchor: "middle" },
              fill: theme.palette?.secondary.main,
            }}
          />

          <Legend
            align="left"
            wrapperStyle={{
              position: "relative",
            }}
          />
          {legends.map((legend, index) => (
            <Line
              dot={false}
              yAxisId="2"
              xAxisId="2"
              key={legend}
              dataKey={legend}
              stroke={`${theme.palette.charts.line[`line${index + 1}`]}`}
              strokeWidth={3}
            />
          ))}

          {state.refX1 && state.refX2 ? (
            <ReferenceArea
              yAxisId="1"
              xAxisId="1"
              x1={state.refX1}
              x2={state.refX2}
              strokeOpacity={0.3}
            />
          ) : null}
        </LineChart>
      </ResponsiveContainer> */}
    </>
  );
};

export default LinesChart;
