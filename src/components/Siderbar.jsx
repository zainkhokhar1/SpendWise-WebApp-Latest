
import React, { useState } from 'react'
import NavigateButton from './NavigateButton';
import { IoLogoAmplify } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { LuCodesandbox } from "react-icons/lu";
import { CgBox } from "react-icons/cg";
import { GiExpense } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Siderbar = () => {
    const [selected, setSelected] = useState(1);

    const buttonsInfo = [
        {
            title: 'Dashboard',
            icon: <RxDashboard />
        },
        {
            title: 'Income Planner',
            icon: <LuCodesandbox />
        },
        {
            title: 'Budget Planner',
            icon: <CgBox />
        },
        {
            title: 'Expense Planner',
            icon: <GiExpense />
        },
        {
            title: 'Reports',
            icon: <TbReportSearch />
        },
        {
            title: 'Notifications',
            icon: <IoNotificationsOutline />
        }

    ]

    console.log(selected)

    return (
        <div className='shadow-xl shadow-blue-200 h-screen flex flex-col pt-6 w-52 items-center justify-between'>

            <div>
                {/* for title and logo */}
                <div className='flex items-center gap-2 pl-3 cursor-pointer'>
                    <IoLogoAmplify className='text-xl' />
                    <span className='text-2xl'>
                        Wealthify
                    </span>
                </div>
                {/* Navigate buttons div */}
                <div className='mt-8 space-y-3'>
                    {
                        buttonsInfo.map((oneData, key) => {
                            return <NavigateButton setSelected={setSelected} selected={selected} Icon={oneData.icon} index={key + 1} key={key} title={oneData.title} />
                        })
                    }
                </div>
            </div>

            <footer className=' h-40 flex flex-col items-start pt-2 w-full'>

                <div className='hover:bg-gray-100 shadow-purple-50 hover:shadow w-full'>
                    <button className='flex items-center w-full pl-7 py-2 gap-2 text-slate-800 hover:text-slate-950 cursor-pointer'>
                        <IoAlertCircleOutline className='text-xl' />
                        <span className='text-lg'>
                            Help
                        </span>
                    </button>
                </div>

                <div className='hover:bg-gray-100 shadow-purple-50 hover:shadow w-full'>
                    <button className='flex items-center gap-2 pl-7 py-2 text-slate-800 hover:text-slate-950 cursor-pointer '>
                        <IoSettingsOutline className='text-xl' />
                        <span className='text-lg'>
                            Settings
                        </span>
                    </button>
                </div>

                <div className='flex group items-center pl-2 pt-2 border border-transparent border-t-slate-200 w-full cursor-pointer hover:bg-slate-100 duration-200 '>

                    <div className='w-10 pt-[2px]'>
                        <img class="inline-block size-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className='flex items-start flex-col pl-2 pt-1'>
                        <span className='text-[16px] font-medium'>
                            Zain ul Abideen
                        </span>
                        <span className='text-sm'>
                            zain@gmail.com
                        </span>
                    </div>
                    <IoIosArrowForward className='text-xl ml-4 text-slate-400 group-hover:text-slate-600 duration-300'/>
                </div>
            </footer>
        </div>
    )
}

export default Siderbar;