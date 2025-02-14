
import React from 'react'

const IncomeCard = () => {
    return (
        <div className='flex flex-col rounded-md h-36 cursor-pointer shadow-lg shadow-purple-950/5 ring ring-purple-900 duration-200 ease-in-out col-span-2 p-2 border bg-white border-purple-400 space-y-2'>

            <div className='w-full space-y-1'>
                <h1 className='text-[14px] text-purple-500 font-medium'>
                    Total Income
                </h1>
                <p className='text-xl font-medium text-purple-800'>
                    Rs. 3000
                </p>
            </div>

            <div className='w-full h-[0.5px] bg-purple-100'></div>

            <div className='w-full text-xs'>
                <span>
                    starting from &nbsp;
                </span>
                <span className='text-green-900 font-semibold text-[15px]'>
                    6 Jan, 2025
                </span>
            </div>

        </div>
    )
}

export default IncomeCard;