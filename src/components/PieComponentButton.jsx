import React, { useState } from 'react'

const PieComponentButton = () => {
    const [isFir, setIsFir] = useState(false);

    return (
        // #FFFFFD
        // #F5F9FA
        // for the text i can use this if it's not selected #B6BABB
        // for the text if it's selected #6478A3
        <div className={`flex items-center w-72 mt-3 mx-auto h-10 rounded-xl bg-[#f8f8fb] overflow-hidden shadow shadow-slate-100`}>

            <div onClick={() => { setIsFir(false) }} className={`w-1/2 rounded-md text-center cursor-pointer ${isFir ? "bg-transparent text-[#B6BABB]" : "bg-white py-[4px]"} ml-[6px] text-[#6478A3] font-semibold`}>
                Income
            </div>

            <div className={`w-1/2 rounded-md text-center cursor-pointer ${isFir ? "bg-white py-[4px] text-[#6478A3]" : "bg-transparent text-[#B6BABB]"} mr-[6px] font-semibold`} onClick={() => { setIsFir(true) }}>
                Expense
            </div>
        </div>
    )
}

export default PieComponentButton;