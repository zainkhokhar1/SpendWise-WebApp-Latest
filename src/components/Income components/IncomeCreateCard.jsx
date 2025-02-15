
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const IncomeCreateCard = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [option, setOption] = useState('Select');

    return (
        <div className='rounded-md h-full shadow-lg shadow-purple-950/5 duration-200 ease-in-out col-span-2 p-2  space-y-2 '>
            <div className='flex flex-col px-4 gap-3'>
                <h1 className='text-[16px] font-medium text-purple-950 my-4'>
                    Create Category
                </h1>
                <input type="number" className='ring ring-purple-300 px-2 mb-3 rounded-lg h-10 text-sm focus:ring-purple-700' placeholder='Enter Amount ' />

                {/* dropdown menu here */}
                <div className='flex relative items-center gap-2 bg-purple-200 hover:bg-purple-300 duration-100 px-3 border border-purple-600 mb-4 rounded-lg py-2 justify-between group' onClick={() => { setShowOptions(true) }}>
                    <span className='text-[15px] font-normal text-purple-700 cursor-pointer'>
                        {
                            option
                        }
                    </span>
                    <MdKeyboardArrowDown className='text-2xl text-purple-800 group-hover:text-purple-900 duration-100' />

                    {/* div for the select options */}
                    <div className={`${showOptions ? 'opacity-100 absolute' : 'hidden opacity-0'} z-[999] duration-200 transition-transform flex flex-col top-10 border border-purple-900 rounded-md text-center bg-purple-200 w-full left-0`} onClick={(e) => { e.stopPropagation(); setShowOptions(false); }}>
                        <span className='px-2 cursor-pointer py-2 hover:bg-purple-300 duration-100 border border-transparent border-b-purple-300' onClick={() => setOption('Salary')}>Salary</span>
                        <span className='px-2 py-2 hover:bg-purple-300 cursor-pointer duration-100 border border-transparent border-b-purple-300' onClick={() => setOption('Freelancing')}>Freelancing</span>
                        <span className='px-2 py-2 hover:bg-purple-300 duration-100 border cursor-pointer border-transparent border-b-purple-300' onClick={() => setOption('Rent')}>Rent</span>
                        <span className='px-2 py-2 hover:bg-purple-300 duration-100 cursor-pointer' onClick={() => setOption('Loan return')}>Loan return</span>
                    </div>

                </div>
                <button className='bg-purple-600 hover:bg-purple-700 duration-200 py-2 text-white border-2 cursor-pointer border-purple-100 rounded-lg font-semibold'>Create</button>

                {/* allow user to edit the income setted and categories */}
                <button className='border-purple-600 hover:bg-purple-200 hover:border-purple-700 duration-200 py-2 text-purple-900 border-1 cursor-pointer rounded-lg'>Manipulate Income</button>
            </div>

            {/* div to close show options by clicking anywhere on the page */}
            {
                showOptions && <div className='fixed inset-0 h-screen w-screen z-0 bg-transparent' onClick={() => setShowOptions(false)}></div>
            }
        </div>
    )
}

export default IncomeCreateCard;