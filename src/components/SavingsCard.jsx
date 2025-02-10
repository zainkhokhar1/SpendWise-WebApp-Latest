
import React from 'react'
import { GiGraduateCap } from "react-icons/gi";

const SavingsCard = () => {
    return (
        <div className='flex p-4 h-22 mb-2'>
            {/* img container */}
            <div className='w-14 h-full bg-slate-100 flex items-center justify-center rounded-md'>
                <GiGraduateCap className='w-12 h-14 text-green-500'/>
            </div>

            {/* for name with amount */}
            <div className='flex flex-col items-start pl-5'>
                <span className='font-semibold text-slate-800'>
                    Education
                </span>
                <span className='font-semibold text-slate-400'>
                    $3,4020
                </span>

                {/* progress bar with percentage using a absolute span */}
                <div className='relative h-1 w-48 bg-slate-100 rounded-full mt-1'>
                    <div className='bg-amber-400 z-10 absolute top-0 w-32 h-1 rounded-full'>
                        
                    </div>
                    {/* span for percentage */}
                    <span className='absolute right-2 -top-7 text-slate-800 text-sm'>
                        48%
                    </span>
                </div>
            </div>

        </div>
    )
}

export default SavingsCard;