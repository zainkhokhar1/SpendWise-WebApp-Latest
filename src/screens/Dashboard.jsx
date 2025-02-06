
import React from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <div className='w-full bg-[#F9FBFC] pl-8 pr-7 max-lg:pl-2 max-lg:pr-2 max-[350px]:pl-1 max-[350px]:pr-1'>
      <Navbar />

      <div className='grid grid-cols-6 h-screen w-full'>

        {/* cards section */}
        <section className='col-span-6 grid grid-cols-6 gap-4 h-fit'>
          <Card />
          <Card />
          <Card />
        </section>

        {/* financial insights section (bar chart) */}
        <section className='col-span-4'>

        </section>

        {/* pie chart for income and expense percentage */}
        <section className='col-span-2'>

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