
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
import { Link } from 'react-router-dom';

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

    return (
        <div className='shadow-xl shadow-gray-200 h-screen min-[800px]:flex min-[800px]:fixed flex-col pt-6 min-w-52 max-w-52 overflow-hidden items-center justify-between hidden left-0 top-0 -translate-x-full z-[999] md:translate-x-0 '>

            <div className='w-full px-2'>
                {/* for title and logo */}
                <Link to={'/'} className='flex items-center gap-2 pl-3 cursor-pointer'>
                    <IoLogoAmplify className='text-xl' />
                    <span className='text-2xl font-semibold '>
                        SpendWise
                    </span>
                </Link>
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

                <div className='hover:bg-gray-100 shadow-purple-50 hover:shadow w-full opacity-70 hover:opacity-100 duration-200'>
                    <Link to={'/help-center'} className='flex items-center w-full pl-6 py-2 gap-2 text-slate-800 hover:text-slate-950 cursor-pointer'>
                        <IoAlertCircleOutline className='text-lg' />
                        <span className='text-md'>
                            Help
                        </span>
                    </Link>
                </div>

                <Link to={'/settings'} className='hover:bg-gray-100 shadow-purple-50 hover:shadow w-full opacity-80 hover:opacity-100'>
                    <button className='flex items-center gap-2 pl-6 py-2 text-slate-800 duration-200 hover:text-slate-950 cursor-pointer '>
                        <IoSettingsOutline className='text-lg' />
                        <span className='text-md'>
                            Settings
                        </span>
                    </button>
                </Link>

                <Link to={'/my-profile'} className='flex group items-center pl-2 h-full pt-1 border border-transparent border-t-slate-200 w-full cursor-pointer hover:bg-slate-100 duration-200 '>

                    <div className='w-10 pt-[2px]'>
                        <img className="inline-block size-9 rounded-full ring-2 ring-white" src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg" alt="" />
                    </div>
                    <div className='flex items-start flex-col pl-2 pt-1'>
                        <span className='text-[14px] line-clamp-1 w-28'>
                            Zain ul Abideen
                        </span>
                        <span className='text-sm w-28 line-clamp-1'>
                            zain@gmail.com
                        </span>
                    </div>
                    <IoIosArrowForward className='text-xl ml-4 text-slate-400 group-hover:text-slate-600 duration-300'/>
                </Link>
            </footer>
        </div>
    )
}

export default Siderbar;