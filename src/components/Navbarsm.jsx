
import React, { useState } from 'react'
import { IoLogoAmplify, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbarsm = () => {
  const [menu, setShow] = useState(false);



  return (
    <div className={`max-[800px]:flex items-center fixed top-5 transform -translate-x-1/2 left-1/2 justify-between px-3 w-10/12 h-12 rounded-full border-slate-700 hover:border-slate-800 border-2 hidden z-[999] bg-white`}>

      {/* Logo here */}
      <Link to={'/'}>
        <IoLogoAmplify className='text-3xl' />
      </Link>

      {/* Hamberg menu here */}
      <span className='w-fit flex items-center justify-center h-fit p-1' onClick={() => setShow(true)}>
        <IoMenu className='text-3xl' />
      </span>

      {/* Hamberg menu div here */}
      <div className={`fixed z-50 left-1/2 ${menu ? "translate-y-17" : "-translate-y-full"}  transform mt-25 h-fit -translate-x-1/2 w-screen  bg-white border border-slate-200 shadow transition-transform duration-700 ease-in-out flex flex-col items-center rounded-lg`} onClick={() => setShow(false)} >


        <Link to={'/'} className='px-2 py-[9px] border border-transparent border-b-slate-200 w-full text-center text-[15px] font-semibold text-slate-700'>
          Dashboard
        </Link>

        <Link to={'/income-planner'} className='px-2 py-[9px] border border-transparent border-b-slate-200 w-full text-center text-[15px] font-semibold text-slate-700'>
          Income
        </Link>
        <Link to={'/budget-planner'} className='px-2 py-[9px] border border-transparent border-b-slate-200 w-full text-center text-[15px] font-semibold text-slate-700'>
          Budget
        </Link>
        <Link to={'/expense-planner'} className='px-2 py-[9px] border border-transparent border-b-slate-200 w-full text-center text-[15px] font-semibold text-slate-700'>
          Expense
        </Link>
        <Link to={'/reports-analysis'} className='px-2 py-[9px] w-full border border-transparent border-b-slate-200 text-center text-[15px] font-semibold text-slate-700'>
          Reports Analysis
        </Link>

        <Link to={'/notifications'} className='px-2 py-[9px]  w-full text-center text-[15px] font-semibold text-slate-700'>
          Notifications
        </Link>
        <div className='w-11/12 max-auto h-[1px] bg-slate-200'></div>
        <Link to={'/my-profile'} className='mt-2'>
          {/* show user profile here */}
          <div className='flex items-center px-2 py-[9px] w-full'>

            <div className='w-10 pt-[2px]'>
              <img className="inline-block size-9 rounded-full ring-2 ring-white" src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg" alt="" />
            </div>
            <span className='line-clamp-1 px-1 text-sm'>
              Muhammad Zain ul abideen
            </span>
          </div>
        </Link>
      </div>

      {/* absolute div to close the opened menu */}
      {
        menu && <div className='inset-0 h-screen w-screen absolute -left-6 -top-6 z-0 bg-transparent' onClick={() => setShow(false)}>
        </div>
      }
    </div>
  )
}

export default Navbarsm;