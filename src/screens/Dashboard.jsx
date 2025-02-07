
import React from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
// import FinancialChart from '../components/charts/FinancialChart';
import PieChart from '../components/charts/PieChart';
import PieComponentButton from '../components/PieComponentButton';

const Dashboard = () => {
  return (
    <div className='w-full bg-[#F9FBFC] pl-8 md:ml-52 pr-7 max-lg:pl-2 max-lg:pr-2 max-[350px]:pl-1 max-[350px]:pr-1'>
      <Navbar />

      <div className='grid grid-cols-6 h-screen w-full'>

        {/* cards section */}
        <section className='col-span-6 grid grid-cols-6 gap-4 lg:h-20'>
          <Card />
          <Card />
          <Card />
        </section>

        {/* financial insights section (bar chart) */}
        <section className='col-span-4 overflow-hidden '>
          {/* <FinancialChart /> */}
        </section>

        {/* pie chart for income and expense percentage */}
        <section className='col-span-2 h-80 w-full rounded-md bg-white'>
          <PieComponentButton />
          <PieChart />
        </section>

        {/* recent transactions */}
        <section className='col-span-4'>

        </section>

        {/* Saving show in percent  */}
        <section className='col-span-2'>

        </section>

      </div>

    </div>
  )
}

export default Dashboard;