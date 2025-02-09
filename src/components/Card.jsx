
import React from 'react'
import { PiWallet } from "react-icons/pi";
import CardChart from './charts/CardChart';


const Card = ({ data, index }) => {

    // function to check for the increase in the trend or decrease in the trend
    // const increasing = [];
    // const Increasing = data.map((singleData, index) => {
    //     let values = singleData?.series?.data;
    //     return values.map((oneValue, index) => {
    //         if (values[values?.length - 2] < values[values?.length - 1]) {
    //             return true;
    //         }
    //     })
    // });
    const Increasing = data.map((singleData) => {
        let values = singleData?.series?.data;
        // Ensure there are at least two values to compare
        if (values && values.length > 1) {
            return values[values.length - 2] < values[values.length - 1]; // Check if last value is greater than the second last
        }
        return false;
    });

    return (
        <div className=' flex justify-baseline h-32 pl-4 py-[3px] bg-white min-[850px]:col-span-2 max-[800px]:col-span-6 max-md:col-span-6 col-span-6 rounded-md hover:shadow shadow-gray-100 duration-200 cursor-pointer'>

            <div className='w-1/2 flex flex-col h-full justify-between py-2 '>

                <span className='h-fit w-fit px-[5px] py-[2px] rounded-lg bg-[#F3FBFF]'>
                    <PiWallet className='w-5 h-5 text-blue-800' />
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
            <section className='w-full min-h-32 pt-14'>
                <CardChart data={data} index={index} isIncrease={Increasing} />
            </section>

        </div>
    )
}

export default Card;