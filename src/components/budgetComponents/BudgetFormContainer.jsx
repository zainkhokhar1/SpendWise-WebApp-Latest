
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";


const BudgetFormContainer = () => {

    const [options, setOptions] = useState(false);
    const [optionsSecondary, setOptionsSecondary] = useState(false);
    const [optionSelected, setOptionSelected] = useState('');
    const [optionSelectedSecondary, setOptionSelectedSecondary] = useState('');

    return (
        <>
            <div className='bg-white w-full p-2 h-full'>

                {/* first form to create category and sub-category */}
                <form action="" className='flex items-center gap-2 flex-col mt-1'>
                    <h2 className='text-[15px] font-medium text-purple-800 pt-2'>
                        Create Category and Sub-category
                    </h2>

                    <div className='flex gap-1 flex-col w-full px-4'>
                        {/* container for category */}
                        <div className='relative flex items-center border border-purple-600 focus:border-purple-900 duration-200 rounded-md w-full mt-2 bg-purple-50 px-1'>
                            <input type="text" className='w-11/12 h-8 text-sm' placeholder='Enter/Select Category' />
                            <IoMdArrowDropdown className='text-2xl fill-purple-700 cursor-pointer' onMouseEnter={() => setOptions(true)} />

                            {/* absolute options show here */}
                            <div className={`absolute z-[999] ${options ? "top-7 right-0" : "hidden"} w-[120px] h-fit flex flex-col bg-white border border-slate-200 rounded-sm`} onMouseLeave={() => setOptions(false)} onClick={(e) => {
                                e.stopPropagation();
                                setOptions(false);
                            }}>

                                <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] border border-transparent border-b-slate-200 text-[14px] min-w-full' onClick={() => { setOptionSelected('Rent'); }}>
                                    Rent
                                </div>
                                <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] border border-transparent border-b-slate-200 text-[14px]' onClick={() => { setOptionSelected('Food'); }}>
                                    Food
                                </div>
                                <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] text-[14px]' onClick={() => { setOptionSelected('Petrol'); }}>
                                    Petrol
                                </div>
                            </div>

                        </div>

                        {/* container to create sub-category */}
                        <div className='relative flex items-center border border-purple-600 focus:border-purple-900 duration-200 rounded-md w-full mt-2 bg-purple-50 px-1'>

                            <input type="text" className='w-11/12 h-8 text-sm' placeholder='Enter/Select Sub-Category' />
                            <IoMdArrowDropdown className='text-2xl fill-purple-700 cursor-pointer' onMouseEnter={() => setOptionsSecondary(true)} />

                            {/* absolute options show here */}
                            <div className={`absolute z-[999] ${optionsSecondary ? "top-7 right-0" : "hidden"} w-[120px] h-fit flex flex-col bg-white border border-slate-200 rounded-sm`} onMouseLeave={() => setOptionsSecondary(false)} onClick={(e) => {
                                e.stopPropagation();
                                setOptionsSecondary(false);
                            }}>

                                <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] border border-transparent border-b-slate-200 text-[14px] min-w-full' onClick={() => { setOptionSelectedSecondary('Biryani'); }}>
                                    Biryani
                                </div>
                                <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] border border-transparent border-b-slate-200 text-[14px]' onClick={() => { setOptionSelectedSecondary('Chicken'); }}>
                                    Chicken
                                </div>
                                <div className='text-nowrap hover:bg-slate-50 duration-300 ease-in-out cursor-pointer pt-1 pb-1 px-[6px] text-[14px]' onClick={() => { setOptionSelectedSecondary('University Food'); }}>
                                    University Food
                                </div>
                            </div>

                        </div>
                    </div>
                    <button className=' my-2 bg-purple-600 hover:bg-purple-700 duration-300 cursor-pointer rounded-md py-1 w-11/12 text-white'>
                        Create
                    </button>

                </form>

                {/* second form to create the income and select the corresponding category or sub-category */}
                <form action="" className='flex items-center gap-3 flex-col'>
                    <h2 className='text-[15px] font-medium text-purple-800 pt-2'>
                        Create Budget
                    </h2>
                    <input type="number" className='w-11/12 h-8 text-sm bg-purple-50 border border-purple-600 rounded-md px-1' placeholder='Enter Amount Rs/.' />
                    {/* first to select the category */}
                    <select className='w-11/12 bg-purple-50 text-purple-800 h-9 rounded-md'>
                        <option className='custom-option' value="">Rent</option>
                        <option className='custom-option' value="">Food</option>
                        <option className='custom-option' value="">Petrol</option>
                    </select>

                    {/* second to select the sub-category */}
                    <select className='w-11/12 bg-purple-50 h-9 text-purple-800 rounded-md'>
                        <option className="custom-option" value="">Biryani</option>
                        <option className='custom-option' value="">Chicken</option>
                        <option className='custom-option' value="">University Food</option>
                    </select>

                    <button className=' my-2 bg-purple-600 hover:bg-purple-700 duration-300 cursor-pointer rounded-md py-1 w-11/12 text-white'>
                        Create
                    </button>

                </form>
            </div>

            {/* div on the back to close the options  */}
            {
                options || optionsSecondary ? <div className='w-screen h-screen fixed inset-0 z-0' onClick={() => { setOptions(false); setOptionsSecondary(false); }}></div> : ''
            }

        </>
    )
}

export default BudgetFormContainer;