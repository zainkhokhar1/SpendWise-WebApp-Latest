import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

const FinancialChart = ({ data }) => {
  const chartRef = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth < 600);
  // this will be true only when there is less than 768px md devices.

  useEffect(() => {
    const chart = echarts.init(chartRef.current);


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
          color: "#93C5FD", // Light blue bars
          itemStyle: { borderRadius: [4, 4, 0, 0] },
          barWidth: windowSize ? 8 : 17
        },
        {
          name: "Current Month",
          type: "bar",
          data: [18, 22, 20, 28, 35, 32, 30, 33, 40, 45, 48, 50],
          color: "#3B82F6", // Dark blue bars
          itemStyle: { borderRadius: [4, 4, 0, 0] },
          barWidth: windowSize ? 8 : 17
        },
      ],
    };

    chart.setOption(option);

    const resizeChart = () => chart.resize();
    window.addEventListener('resize', resizeChart);

    return () => {
      window.removeEventListener('resize', resizeChart);
      chart.dispose();
    };

    const windowChange = () => {
      if (window.innerWidth < 600) {
        setWindowSize(true);
      }
      else {
        setWindowSize(window.innerWidth > 600);
      }
    }
    return () => { chart.dispose(); window.removeEventListener('resize', windowChange); }
  }, [windowSize]);

  return <div ref={chartRef} className="w-full h-full"></div>;
};

export default FinancialChart;
