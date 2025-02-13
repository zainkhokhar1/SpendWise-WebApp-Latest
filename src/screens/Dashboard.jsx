
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import FinancialChart from '../components/charts/FinancialChart';
import PieChart from '../components/charts/PieChart';
import PieComponentButton from '../components/PieComponentButton';
import { incomePieData, expensePieData } from '../charts.data';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { cardData1, cardData2, cardData3 } from '../charts.data.js'
import RecentTransections from '../components/RecentTransections.jsx';
import SavingsShow from '../components/SavingsShow.jsx';


const Dashboard = () => {
  const [isEpense, setIsExpense] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [option, setOption] = useState('This month');
  const [showBarExpense, setShowBarExpense] = useState(false);

  const data = [...cardData1, ...cardData2, ...cardData3];

  return (
    <div className='w-full bg-[#F9FBFC] mt-24 min-[800px]:mt-0 min-[800px]:pl-8 pr-7 pl-2 min-[800px]:pr-2 min-[350px]:pl-1 max-[350px]:pr-1 '>
      <Navbar />

      <div className='grid grid-cols-6 w-full lg:gap-7'>

        {/* cards section */}
        <section className='col-span-6 grid grid-cols-6 gap-4 h-fit'>
          {
            data.map((oneData, key) => <Card key={key} data={data} index={key} />)
          }
        </section>

        {/* financial insights section (bar chart) */}
        <section className='col-span-6 px-5 mt-7 xl:mt-0 h-96 xl:h-96 xl:pb-20 xl:col-span-4 bg-white p-2 rounded-md'>

          {/* for the options of the chart */}
          <div className='flex flex-col md:flex-row items-center justify-between h-fit'>

            {/* first div */}
            <div className='flex items-center gap-1'>
              <span className='font-semibold text-nowrap my-5 sm:my-0'>
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

                <div className='flex items-center justify-between px-1 gap-1 min-w-[113px] bg-white hover:bg-gray-50 text-[13.7px] pb-[2px] '>
                  <span>
                    {
                      option
                    }
                  </span>
                  <IoIosArrowDown className='text-slate-500 group-hover:text-slate-700 duration-200 mt-1' />

                </div>

                {/* absolute div to show the selection option to the user */}
                <div className={`absolute z-[999] ${showOptions ? "top-7 left-0" : "hidden"} w-[120px] h-fit flex flex-col bg-white border border-slate-200 rounded-sm`} onClick={(e) => {
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
        <section className='xl:col-span-2 min-[640px]:col-span-3 max-[900px]:min-h-[340px] sm:h-[420px] xl:h-96 col-span-6 mt-28 sm:mt-16 lg:mt-4 xl:mt-0 min-w-full rounded-md bg-white'>
          <PieComponentButton isEpense={isEpense} setIsExpense={setIsExpense} />
          {
            isEpense ? <PieChart data={expensePieData} /> : <PieChart data={incomePieData} />
          }
        </section>

        {/* recent transactions */}
        <section className='sm:col-span-6 xl:col-span-4 col-span-6 mt-14 xl:mt-4 xl:pt-5 bg-white rounded-md sm:order-5 xl:order-1 min-[640px]:order-3'>
          <RecentTransections />
        </section>

        {/* Saving show in percent  */}
        <section className='col-span-6 min-[640px]:col-span-3 xl:col-span-2 lg:mt-4 bg-white rounded-md mt-4 h-fit sm:h-[420px] sm:mt-16 sm:ml-2 xl:order-1 xl:h-[420px] min-[640px]:order-2'>
          <SavingsShow />
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