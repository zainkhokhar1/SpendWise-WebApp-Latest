
import React, { useState } from 'react'

const NavigateButton = ({ Icon, selected, title, setSelected, index }) => {

    return (
        <button onClick={() => { setSelected(index) }} className={`flex gap-2  ${selected === index ? "bg-[#EDF3FA] font-semibold text-[#134074]" : "bg-transparent opacity-80 hover:opacity-100"} items-center outline-none focus:outline-none w-full hover:bg-slate-200 duration-200 cursor-pointer px-4 py-[4px] rounded-md`}>
            {
                Icon
            }
            <span className='text-[17px] text-nowrap'>
                {
                    title
                }
            </span>
        </button>
    )
}

export default NavigateButton