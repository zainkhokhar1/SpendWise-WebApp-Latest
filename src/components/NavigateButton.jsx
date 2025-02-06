
import React, { useState } from 'react'

const NavigateButton = ({ Icon, selected, title, setSelected, index }) => {

    return (
        <button onClick={() => { setSelected(index) }} className={`flex gap-2  ${selected === index ? "bg-[#EDF3FA] font-medium text-[#134074]" : "bg-transparent font-medium"} items-center w-full hover:bg-slate-200 duration-200 cursor-pointer px-4 py-[3px] rounded-md`}>
            {
                Icon
            }
            <span className='text-lg text-nowrap'>
                {
                    title
                }
            </span>
        </button>
    )
}

export default NavigateButton