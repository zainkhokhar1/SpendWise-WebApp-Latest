
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { FiDownload } from "react-icons/fi";

const Navbar = ({ highding, para }) => {
    return (
        <div className='min-w-full flex items-center justify-between py-5'>

            <div className='flex flex-col gap-[1px]'>
                <span className='font-semibold md:text-xl max-[350px]:text-sm'>
                    {highding}
                </span>
                <span className='md:text-sm text-xs text-slate-700 hover:text-slate-800 duration-100'>
                    {para}
                </span>
            </div>

            <div className='flex items-center gap-6'>
                <div>
                    <FiSearch className='cursor-pointer w-5 h-5 opacity-50 hover:opacity-100 duration-200' />
                </div>
                <div className='relative w-5 h-5 group rounded-full '>
                    <GoBell className='min-w-full min-h-full  opacity-50 group-hover:opacity-100 duration-200 cursor-pointer' />
                    <span className='w-[6px] h-[6px] bg-red-600 group-hover:opacity-100 absolute -top-[1px] right-[1px] rounded-full'></span>
                </div>
                <button className='flex max-[550px]:hidden items-center gap-1 cursor-pointer bg-[#577FDD] hover:bg-blue-600 duration-200 px-[13px] py-[6px] rounded-md text-white'>
                    <FiDownload className='text-lg' />
                    <span className=''>
                        Export
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Navbar;