import React, { useState, useCallback } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
  Tooltip,
  Legend,
} from "recharts";
import pieStyles from "./styles";
import { theme } from "../../components/theme1/ThemeRegistry";

interface DataItem {
  roomName: string;
  bookingsCount: number;
}

interface PieChartProps {
  data: DataItem[];
  visibleEffect: boolean;
  infoColorBar: string;
  styleContainer: React.CSSProperties;
}

const renderCustomizedLabel = (props: any, theme: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, index } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.26;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const responsiveContainerLicensesProps = {
  width: "100%",
  height: 320,
};

const PieChartComponent: React.FC<PieChartProps> = ({
  data,
  visibleEffect,
  infoColorBar,
  styleContainer,
}) => {
  const classes = pieStyles();
  const [activeIndex, setActiveIndex] = useState<number | null>(
    visibleEffect ? null : 0
  );

  const onPieEnter = useCallback((_, index: number) => {
    setActiveIndex(index);
  }, []);

  console.log(visibleEffect);
  const responsiveStyle = responsiveContainerLicensesProps;
  const outerRadius = 100;
  const innerRadius = 57;

  return (
    <div className={classes.pieChartContainer}>
      <ResponsiveContainer {...responsiveStyle}>
        <PieChart style={{ outline: "none" }}>
          <Pie
            activeIndex={activeIndex}
            //activeShape={(props) => renderActiveShape(props, theme)}
            label={(props) => renderCustomizedLabel(props, theme)}
            labelLine={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            nameKey="roomName"
            margin={{ left: -20 }}
            isAnimationActive={false}
            dataKey={"bookingsCount"}
            onMouseEnter={visibleEffect ? undefined : onPieEnter}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                style={{ outline: "none" }}
                fill={`${
                  theme?.overrides?.charts?.doughnut[`cell${index + 1}`]
                }`}
              />
            ))}
          </Pie>
          {visibleEffect && <Tooltip />}
          {/* {visibleEffect && <Tooltip active={activeIndex !== null} />} */}
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
