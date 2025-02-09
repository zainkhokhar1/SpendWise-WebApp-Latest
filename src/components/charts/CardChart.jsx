import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const CardChart = ({ data, index, isIncrease }) => {


    const cardChartRef = useRef(null);

    const handleResize = () => {
        if (cardChartRef.current) {
            const chartInstance = echarts.getInstanceByDom(cardChartRef.current);
            if (chartInstance) {
                chartInstance.resize();
            }
        }
    }

    useEffect(() => {
        let chartInstance = echarts.getInstanceByDom(cardChartRef.current);

        if (!chartInstance) {
            chartInstance = echarts.init(cardChartRef.current);
        }

        const option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                data: data[index]?.xAxis?.data,
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    symbol: 'none',
                    data: [40, 200, 400, 750, 850, 405, 800],
                    data: data[index]?.series?.data,
                    type: 'line',
                    areaStyle: {},
                    label: {
                        show: false
                    },
                    lineStyle: {
                        color: data[index]?.series?.lineColor,
                    },
                    areaStyle: {
                        color: data[index]?.series?.areaColor,
                    }
                }
            ]
        };

        chartInstance.setOption(option);

        // Make sure to resize on window resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chartInstance.dispose();
        };

    }, []);

    return <div ref={cardChartRef} className='w-full h-full relative'>
        {
            isIncrease ? <span className='absolute -top-3'>
                
            </span> : <span>

            </span>
        }
    </div>;
}

export default CardChart;
