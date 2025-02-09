
export const incomePieData = [
    {
        value: 2000,
        name: 'Food',
        itemStyle: {
            color: '#4B535A'
        }
    },
    {
        value: 4000,
        name: 'Travelling',
        itemStyle: {
            color: '#6FD6FA'
        }
    },
    {
        value: 3400,
        name: 'Rent',
        itemStyle: {
            color: '#5583D6'
        }
    },
];

// for data i need these things from the backend 
// 1. must be array of objects and object must be of the following
// 1. value
// 2. name
// 3. itemstyle object with color property and value in hex

export const expensePieData = [
    {
        value: 3200,
        name: 'Shopping',
        itemStyle: {
            color: '#FFDAB3'
        }
    },
    {
        value: 2500,
        name: 'Food',
        itemStyle: {
            color: '#A6CDC6'
        }
    },
    {
        value: 4000,
        name: 'Petrol',
        itemStyle: {
            color: '#EB5A3C'
        }
    }
]

// here data needed for the card's dispaly component
// for X-axis an array for the x-axis which will be months or days  years what the user available data is
// the actual data will be sent with the  series data array which will be amount of money the user got or increased
// make sure to use rgba colors only for the area


export const cardData2 = [
    {
        xAxis: {
            data: ['Jan', 'Feb', 'Mar']
        },
        series: {
            data: [20,60,80],
            lineColor: 'rgba(132, 135, 193, 1)',
            areaColor: 'rgba(132, 135, 193, 0.34)',
        }
    }
]

export const cardData1 = [
    {
        xAxis: {
            data: ['Jan', 'Feb', 'Mar']
        },
        series: {
            data: [40,200,100],
            lineColor: 'rgba(20, 195, 36, 1)',
            areaColor: 'rgba(20, 213, 38, 0.48)',
        }
    }
]

export const cardData3 = [
    {
        xAxis: {
            data: ['Jan', 'Feb', 'Mar'],
        },
        series: {
            data: [40,60,30],
            lineColor: 'rgba(132, 2, 77, 1)',
            areaColor: 'rgba(132, 2, 77, 0.38)',
        }
    }
]