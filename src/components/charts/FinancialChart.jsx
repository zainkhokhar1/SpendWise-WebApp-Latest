import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const FinancialChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    // console.log(chartRef.current)

    const option = {
      grid: { left: "0%", right: "0%", bottom: "0%", containLabel: true },
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisLine: { show: false }, // Hide x-axis line
        axisTick: { show: false }, // Hide ticks
      },
      yAxis: {
        type: "value",
        axisLine: { show: false }, // Hide y-axis line
        splitLine: { show: true, lineStyle: { color: "#E5E7EB" } }, // Light grid lines
      },
      series: [
        {
          name: "Previous Month",
          type: "bar",
          data: [15, 18, 22, 20, 28, 35, 32, 30, 33, 40, 45, 48],
          barWidth: 15,
          color: "#93C5FD", // Light blue bars
          itemStyle: { borderRadius: [4, 4, 0, 0] },
        },
        {
          name: "Current Month",
          type: "bar",
          data: [18, 22, 20, 28, 35, 32, 30, 33, 40, 45, 48, 50],
          barWidth: 15,
          color: "#3B82F6", // Dark blue bars
          itemStyle: { borderRadius: [4, 4, 0, 0] },
        },
      ],
    };

    chart.setOption(option);
    // return () => chart.dispose();
  }, []);

  return <div ref={chartRef} className=" min-h-96"></div>;
};

export default FinancialChart;
