
import React from 'react'
import { PiWallet } from "react-icons/pi";

const Card = () => {
    return (
        <div className='w-full flex h-32 px-4 py-[3px] bg-white max-[840px]:col-span-6 min-lg:col-span-2 col-span-6 rounded-md hover:shadow shadow-gray-100 duration-200 cursor-pointer'>

            <div className='w-1/2 flex flex-col h-full justify-between py-2 '>

                <span className='h-fit w-fit px-[5px] py-[2px] rounded-lg bg-[#F3FBFF]'>
                    <PiWallet className='w-5 h-5 text-blue-800'/>
                </span>

                <span>
                    <h3 className='text-slate-500 max-lg:text-sm hover:text-slate-700 cursor-pointer duration-100 font-semibold'>
                        Total Balance
                    </h3>
                    <span className='text-2xl max-lg:text-lg font-semibold'>
                        $30,192.98
                    </span>
                </span>
            </div>

            {/* graph showing section  */}
            <section className='w-1/2 h-full'>

            </section>

        </div>
    )
}

export default Card;