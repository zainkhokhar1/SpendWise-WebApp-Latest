
import React, { useRef } from 'react';
import * as echarts from 'echarts';
import { useEffect } from 'react';


const PieChart = ({ data }) => {
    const chartReference = useRef(null);

    // Pie chart options here
    useEffect(() => {
        const chart = echarts.init(chartReference.current);

        const option = {
            title: {
                text: '',
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}\n ({d}%)'
            },
            legend: {
                show: false,
                data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
            },
            series: [
                {
                    type: 'pie',
                    // radius: '70%',
                    // center: ['50%', '50%'],
                    selectedMode: 'single',
                    label: {
                        show: true,
                        position: 'outside',
                        fontSize: 11,
                        formatter: [
                            '{nameStyle|{b}}\n',  // First line: Name
                            '{percentStyle|{d}%}' // Second line: Percentage with different color
                        ].join(''),
                        rich: {
                            nameStyle: {
                                fontSize: 11,
                                color: '#333',  // Color for the name (black)
                                fontWeight: 'bold'
                            },
                            percentStyle: {
                                fontSize: 12,
                                color: '#6478A3',
                            }
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return `${params.name}:  ${params.value}`;
                        }
                    },

                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };


        chart.setOption(option);

        const resizeChart = () => chart.resize();
        window.addEventListener('resize', resizeChart);
    
        return () => {
          window.removeEventListener('resize', resizeChart);
          chart.dispose();
        };


    }, [data])

    return <div ref={chartReference} className="w-full h-full"></div>;
}

export default PieChart;