
import React from 'react'
import IncomeCard from '../components/Income components/IncomeCard';
import IncomeCreateCategory from '../components/Income components/IncomeCreateCategory';
import IncomeHistory from '../components/Income components/IncomeHistory';
import Navbar from '../components/Navbar';
import IncomeCreateCard from '../components/Income components/IncomeCreateCard';
import IncomeStats from '../components/Income components/IncomeStats';
import IncomePieChart from '../components/Income components/IncomePieChart.jsx'

const IncomePlanner = () => {
  return (
    <div className='bg-[#F9FBFC] h-fit max-sm:gap-5 gap-3 grid grid-cols-6 mb-5 w-full px-4 z-10 max-lg:pt-16'>

      {/* program changed adding navbar to all pages */}
      <div className='col-span-6'>
        <Navbar highding={'Track your income with Ease.'} para={'Welcome to your Income management Page.'} />
      </div>

      {/* Cards section here */}
      <div className='col-span-6 h-fit grid grid-cols-6 gap-2'>

        {/* Call the card */}
        <IncomeCard />
        <IncomeCard />

        {/* create category card here */}
        <IncomeCreateCategory />
      </div>

      {/* old transections shown here */}
      <div className='h-86 min-h-fit min-w-full bg-white rounded-lg p-2 col-span-6 min-xl:col-span-4 border py-1 border-purple-400 '>
        <IncomeStats />
      </div>
      {/* create income card here */}
      <div className='border max-sm:col-span-6 border-purple-400 bg-white  col-span-2 rounded-lg h-86 max-xl:order-1 max-xl:col-span-3'>
        <IncomeCreateCard />
      </div>

      {/* income history showing here */}
      <div className='col-span-4 h-86 max-xl:col-span-6 rounded-lg border py-1 px-1 border-purple-400 bg-white  max-xl:order-4'>
        <IncomeHistory />
      </div>

      {/* pie chart to show the income with categories */}
      <div className='col-span-2 h-86 rounded-lg max-sm:col-span-6 border py-1 px-1 border-purple-400 bg-white max-xl:col-span-3 overflow-hidden'>
        <IncomePieChart />
      </div>
    </div>
  )
}

export default IncomePlanner;