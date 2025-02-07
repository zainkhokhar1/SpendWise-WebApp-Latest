
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import FinancialChart from '../components/charts/FinancialChart';
import PieChart from '../components/charts/PieChart';
import PieComponentButton from '../components/PieComponentButton';
import { incomePieData, expensePieData } from '../charts.data';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  const [isEpense, setIsExpense] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [option, setOption] = useState('');

  console.log(option);
  return (
    <div className='w-full bg-[#F9FBFC] pl-8 md:ml-52 pr-7 max-lg:pl-2 max-lg:pr-2 max-[350px]:pl-1 max-[350px]:pr-1 z-50'>
      <Navbar />

      <div className='grid grid-cols-6 h-screen w-full'>

        {/* cards section */}
        <section className='col-span-6 grid grid-cols-6 gap-4 h-fit'>
          <Card />
          <Card />
          <Card />
        </section>

        {/* financial insights section (bar chart) */}
        <section className='col-span-4 h-80 px-5 '>

          {/* for the options of the chart */}
          <div className='flex items-center justify-between'>
            {/* first div */}
            <div className='flex items-center gap-1'>
              <span className='font-semibold'>
                Financial Insights
              </span>
              {/* icon */}
              <IoMdInformationCircleOutline className='mt-[1px] text-slate-400' />
            </div>
            {/* 2nd div */}
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-1 cursor-pointer'>
                <span className='bg-blue-600 rounded-full w-1 h-1'></span>
                <span>
                  Income
                </span>
              </div>
              <div className='flex items-center gap-1 cursor-pointer'>
                <span className='bg-blue-600 rounded-full w-1 h-1'></span>
                <span>
                  Expense
                </span>
              </div>
              {/* drop down here */}
              <div className='px-[2.6px] py-[2.6px] rounded-md w-fit bg-[#dcdce7] hover:bg-[#d6d6db] cursor-pointer group relative' onClick={() => setShowOptions(true)} >

                <div className='flex items-center gap-1 px-1 bg-white hover:bg-gray-50'>
                  <span>
                    This month
                  </span>
                  <IoIosArrowDown className='text-slate-500 group-hover:text-slate-700 duration-200 mt-1' />

                  {/* absolute div to show the selection option to the user */}
                  <div className={`absolute z-[999] ${showOptions ? "top-7 left-3" : "hidden"} w-[120px] h-fit flex flex-col bg-white border border-slate-200 rounded-md`} onClick={() => setShowOptions(false)}>
                    <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] border border-transparent border-b-slate-200 text-[16px]' onClick={() => { setOption('This month'); setShowOptions(false); }}>
                      This month
                    </div>
                    <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] border border-transparent border-b-slate-200 text-[16px]' onClick={() => { setShowOptions(!showOptions); setOption('Last 6 months');  }}>
                      Last 6 months
                    </div>
                    <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] text-[16px]' onClick={() => { setOption('Last 1 year'); setShowOptions(false); }}>
                      Last 1 year
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FinancialChart />
        </section>

        {/* pie chart for income and expense percentage */}
        <section className='col-span-2 h-fit w-full rounded-md bg-white '>
          <PieComponentButton isEpense={isEpense} setIsExpense={setIsExpense} />
          {
            isEpense ? <PieChart data={expensePieData} /> : <PieChart data={incomePieData} />
          }
        </section>

        {/* recent transactions */}
        <section className='col-span-4'>

        </section>

        {/* Saving show in percent  */}
        <section className='col-span-2'>

        </section>

      </div>

      {/* div on the back to close the options  */}
      {
        showOptions ? <div className='w-screen h-screen fixed inset-0 z-0' onClick={() => setShowOptions(false)}></div> : ''
      }
    </div>
  )
}

export default Dashboard;