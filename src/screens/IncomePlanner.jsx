
import React from 'react'
import IncomeCard from '../components/Income components/IncomeCard';
import IncomeCreateCategory from '../components/Income components/IncomeCreateCategory';
import IncomeHistory from '../components/Income components/IncomeHistory';


const IncomePlanner = () => {
  return (
    <div className='bg-[#F9FBFC] h-fit gap-3 grid grid-cols-6 overflow-x-hidden w-full p-5'>

      {/* Cards section here */}
      <div className='col-span-6 h-fit grid grid-cols-6 gap-2'>

        {/* Call the card one */}
        <IncomeCard />
        <IncomeCard />

        {/* create category card here */}
        <IncomeCreateCategory />
      </div>

      {/* old transections shown here */}
      <div className='h-80 bg-white rounded-lg p-2 col-span-4'>
        <IncomeHistory />
      </div>
    </div>
  )
}

export default IncomePlanner;