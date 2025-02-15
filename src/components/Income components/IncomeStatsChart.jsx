
import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts';

const IncomeStatsChart = () => {

    const charRef = useRef(null);
    const [windowSize, setWindowSize] = useState(window.innerWidth < 600);

    useEffect(() => {

        const chart = echarts.init(charRef.current, null, {
            height: 'auto',
            width: 'auto'
        });

        const option = {
            title: {
                text: 'Income Breakdown by Month',
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            legend: {
                show: false,
                top: '5%'
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            },
            yAxis: {
                type: 'value',
                name: 'Income Amount (PKR)'
            },
            series: [
                {
                    name: 'Freelancing',
                    type: 'bar',
                    stack: 'total',
                    data: [300, 450, 500, 600, 700],
                    color: '#6366F1' // Modern Indigo Blue
                },
                {
                    name: 'Salary',
                    type: 'bar',
                    stack: 'total',
                    data: [1200, 1200, 1200, 1200, 1200],
                    color: '#14B8A6' // Aqua Green (Techy Look)
                },
                {
                    name: 'Rent',
                    type: 'bar',
                    stack: 'total',
                    data: [200, 200, 220, 250, 230],
                    color: '#FACC15' // Vibrant Yellow
                },
                {
                    name: 'Loan Return',
                    type: 'bar',
                    stack: 'total',
                    data: [100, 150, 130, 180, 160],
                    color: '#EC4899' // Bright Modern Pink
                }
            ]
        };
        
        
        

        const windowChange = () => {
            if (window.innerWidth < 600) {
                setWindowSize(true);
                resizeChart();
            }
            else {
                setWindowSize(false);
                resizeChart();
            }
        }

        chart.setOption(option);

        const resizeChart = () => chart.resize();
        window.addEventListener('resize', windowChange);

        return () => { chart.dispose(); window.removeEventListener('resize', windowChange); }

    }, [])

    return <div ref={charRef} className="w-full h-73"></div>
}

export default IncomeStatsChart;