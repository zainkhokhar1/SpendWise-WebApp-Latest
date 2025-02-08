
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
  const [option, setOption] = useState('This month');
  const [showBarExpense, setShowBarExpense] = useState(false);

  console.log(showOptions)
  return (
    <div className='w-full bg-[#F9FBFC] pl-8 md:ml-52 pr-7 max-lg:pl-2 max-lg:pr-2 max-[350px]:pl-1 max-[350px]:pr-1 z-50'>
      <Navbar />

      <div className='grid grid-cols-6 w-full lg:gap-7'>

        {/* cards section */}
        <section className='col-span-6 grid grid-cols-6 gap-4 h-fit'>
          <Card />
          <Card />
          <Card />
        </section>

        {/* financial insights section (bar chart) */}
        <section className='col-span-6 px-5 h-72 mt-7 lg:mt-0 lg:h-80 lg:col-span-4 '>

          {/* for the options of the chart */}
          <div className='flex items-center justify-between h-fit overflow-hidden'>
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
              <div className='flex items-center gap-1 cursor-pointer' onClick={(() => { setShowBarExpense(false); })}>
                <span className={`${showBarExpense ? "bg-gray-300" : "bg-blue-600"} rounded-full w-[5px] h-[5px]`}></span>
                <span>
                  Income
                </span>
              </div>
              <div className='flex items-center gap-1 cursor-pointer' onClick={(() => { setShowBarExpense(true); })}>
                <span className={`${showBarExpense ? "bg-blue-600" : "bg-gray-300"} rounded-full w-[5px] h-[5px]`}></span>
                <span>
                  Expense
                </span>
              </div>
              {/* drop down here */}
              <div className='px-0 py-[2.6px] rounded-md w-[120px] flex justify-center bg-[#dcdce7] hover:bg-[#d6d6db] cursor-pointer group relative' onClick={() => setShowOptions(true)} >

                <div className='flex items-center justify-between px-1 gap-1 min-w-[113px] bg-white hover:bg-gray-50 text-[13.7px] pb-[2px]'>
                  <span>
                    {
                      option
                    }
                  </span>
                  <IoIosArrowDown className='text-slate-500 group-hover:text-slate-700 duration-200 mt-1' />
                </div>

                {/* absolute div to show the selection option to the user */}
                <div className={`absolute z-[999] ${showOptions ? "top-7 z-50 left-3" : "hidden"} w-[120px] h-fit flex flex-col bg-white border border-slate-200 rounded-md`} onClick={(e) => {
                  e.stopPropagation();
                  setShowOptions(false);
                }}>

                  <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] border border-transparent border-b-slate-200 text-[14px] min-w-full' onClick={() => { setOption('This month'); }}>
                    This month
                  </div>
                  <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] border border-transparent border-b-slate-200 text-[14px]' onClick={() => { setOption('Last 6 months'); }}>
                    Last 6 months
                  </div>
                  <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] text-[14px]' onClick={() => { setOption('Last 1 year'); }}>
                    Last 1 year
                  </div>
                </div>

              </div>
            </div>
          </div>
          <FinancialChart />
        </section>

        {/* pie chart for income and expense percentage */}
        <section className='lg:col-span-2 sm:col-span-3 col-span-6 min-[600px]:col-span-3 mt-16 xl:mt-0 h-72 min-h-60 min-w-full rounded-md bg-white'>
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

      </div >

      {/* div on the back to close the options  */}
      {
        showOptions ? <div className='w-screen h-screen fixed inset-0 z-0' onClick={() => setShowOptions(false)}></div> : ''
      }
    </div >
  )
}

export default Dashboard;