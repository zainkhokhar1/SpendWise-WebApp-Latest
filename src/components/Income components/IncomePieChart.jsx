
import React from 'react'
import HalfCircularPieChart from '../charts/HalfCircularPieChart';

const IncomePieChart = () => {
  return (
    <div className='text-center w-full min-h-fit h-96 overflow-hidden flex flex-col justify-between'>
      <h2 className='text-[15px] font-medium text-purple-900'>
        Income Categories with Contribution
      </h2>
      {/* chart container here */}
      <div className=' w-full h-full'>
        <HalfCircularPieChart />
      </div>
    </div>
  )
}

export default IncomePieChart;