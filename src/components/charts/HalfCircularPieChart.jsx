
import React, { useEffect, useRef } from 'react';
import * as echart from 'echarts';

const HalfCircularPieChart = () => {

    // get a reference to append the chart
    const chartRef = useRef(null);

    useEffect(() => {

        const chart = echart.init(chartRef.current, null, {
            height: 'auto',
            width: 'auto'
        });

        // some options according to my own needs
        const option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center',
                right: 'center',
                show: true
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '70%'],
                    // adjust the start and end angle
                    startAngle: 180,
                    endAngle: 360,
                    data: [
                        { value: 1048, name: 'Salary' },
                        { value: 735, name: 'Rent' },
                        { value: 580, name: 'Freelancing' },
                        { value: 484, name: 'Loan return' },
                    ]
                }
            ]
        };

        chart.setOption(option);

        const resizeChart = () => chart.resize();
        window.addEventListener('resize', resizeChart);

        return () => {
            chart.dispose();
            window.removeEventListener('resize', resizeChart);
        }
    }, []);

    return (
        <div className='h-full w-full' ref={chartRef}></div>
    )
}

export default HalfCircularPieChart;