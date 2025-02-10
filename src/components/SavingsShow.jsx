
import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import SavingsCard from './SavingsCard';

const SavingsShow = () => {
    return (
        <div className='py-4'>

            {/* Navbar */}
            <section className='flex justify-between items-center px-2'>
                <span className='flex items-center gap-1'>
                    <h3 className='font-semibold text-nowrap text-lg my-5 sm:my-0 lg:pl-3'>
                        Savings
                    </h3>
                    {/* icon */}
                    <IoMdInformationCircleOutline className='mt-[1px] text-slate-400' />
                </span>
                <BsThreeDots className='text-slate-600 hover:text-slate-700 duration-200 cursor-pointer mr-5' />
            </section>

            {/* cards showing section */}
            <section className='flex flex-col'>
                <SavingsCard />
                <SavingsCard />
                <SavingsCard />
                <SavingsCard />
            </section>
        </div>
    )
}

export default SavingsShow;