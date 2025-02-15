
import React, { useState } from 'react'
import { IoIosArrowDown, IoMdInformationCircleOutline } from "react-icons/io";
import IncomeStatsChart from './IncomeStatsChart';

const IncomeStats = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [option, setOption] = useState('This month');

    return (
        <div className='w-full min-h-fit h-full'>
            <div className='grid grid-cols-6 items-center justify-between px-2 max-[350px]:px-0'>

                {/* making the container flex so that i can modify it */}
                <div className='flex items-center max-[300px]:flex-col justify-between px-1 col-span-6'>
                    {/* income insights div */}
                    <div className='flex items-center min-w-fit gap-1 p-1 pt-2 col-span-4 px-0 min-md:col-span-5'>
                        <span className='font-semibold text-nowrap my-5 sm:my-0'>
                            Income Insights
                        </span>
                        {/* icon */}
                        <IoMdInformationCircleOutline className='mt-[1px] text-slate-400' />
                    </div>

                    {/* drop down here */}
                    <div className='px-1 py-[2.6px] rounded-md h-7 flex min-w-fit justify-center duration-200 bg-purple-200 hover:bg-purple-300 cursor-pointer group relative' onClick={() => setShowOptions(true)} >

                        <div className='flex items-center justify-between px-1 gap-1 text-nowrap min-md:w-[113px] bg-white hover:bg-gray-50 text-[13.7px] pb-[2px] '>
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

                <div className='min-w-full min-h-fit col-span-6'>
                    <IncomeStatsChart />
                </div>
            </div>

            {/* div on the back to close the options  */}
            {
                showOptions ? <div className='w-screen h-screen fixed inset-0 z-0' onClick={() => setShowOptions(false)}></div> : ''
            }
        </div>
    )
}

export default IncomeStats;