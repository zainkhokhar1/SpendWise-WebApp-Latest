
import React from 'react'

const IncomeCard = ({isBudget}) => {
    console.log(isBudget)
    return (
        <div className={`flex flex-col ${isBudget ? 'col-span-2' : 'max-sm:col-span-6 col-span-2'} justify-between py-2 rounded-md h-36 cursor-pointer shadow-lg shadow-purple-950/5 border border-purple-400 duration-200 ease-in-out  p-2  bg-white space-y-2`}>

            <div className='w-full space-y-1'>
                <h1 className='text-[14px] text-purple-500 font-medium'>
                    Total Income
                </h1>
                <p className='text-[24px] font-medium text-purple-800'>
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