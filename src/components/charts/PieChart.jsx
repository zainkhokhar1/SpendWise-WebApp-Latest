
import React, { useRef } from 'react';
import * as echarts from 'echarts';
import { useEffect } from 'react';


const PieChart = () => {
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
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                bottom: 50,
                show: false,
                left: 'center',
                data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
            },
            series: [
                {
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data: [
                        {
                            value: 210,
                            name: 'Groceries',
                            itemStyle: {
                                color: '#4B535A'
                            }
                        },
                        {
                            value: 100,
                            name: 'Education 25%',
                            itemStyle: {
                                color: '#6FD6FA'
                            }
                        },
                        {
                            value: 434,
                            name: 'Housing',
                            itemStyle: {
                                color: '#5583D6'
                            }
                        }
                    ],
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

        return () => chart.dispose();
    }, [])

    return <div ref={chartReference} className="w-full h-full"></div>;
}

export default PieChart;