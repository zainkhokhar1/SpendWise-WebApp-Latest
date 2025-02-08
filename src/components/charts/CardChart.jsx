import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const CardChart = ({ data }) => {

    const cardChartRef = useRef(null);

    useEffect(() => {
        const chart = echarts.init(cardChartRef.current);

        const option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    symbol: 'none',
                    data: [40, 200, 400, 750, 850, 40, 80],
                    type: 'line',
                    areaStyle: {},
                    label: {
                        show: false
                    },
                    lineStyle: {
                        color: 'rgba(20, 195, 36, 1)',
                    },
                    areaStyle: {
                        color: 'rgba(20, 213, 38, 0.48)'
                    }
                }
            ]
        };

        chart.setOption(option);

        // Make sure to resize on window resize
        window.addEventListener('resize', () => chart.resize());
        
        return () => {
            window.removeEventListener('resize', () => chart.resize());
            chart.dispose();
        };

    }, [data]);

    return <div ref={cardChartRef} className='w-full h-full'></div>;
}

export default CardChart;
