
import React from 'react'
import { PiWallet } from "react-icons/pi";
import CardChart from './charts/CardChart';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';



const Card = ({ data, index }) => {

    const Increasing = data.map((singleData) => {
        let values = singleData?.series?.data;

        // Ensure there are at least two values to compare
        if (values && values.length > 1) {
            const currentValue = values[values.length - 1]; // Last value
            const previousValue = values[values.length - 2]; // Second to last value

            // Compare values and calculate the percentage difference
            if (previousValue < currentValue) {
                // If the current value is greater than the previous value
                const percentage = (((currentValue - previousValue) / previousValue) * 100);
                return {
                    greaterThan: true,
                    percentage: percentage
                };
            } else if (previousValue > currentValue) {
                // If the current value is less than the previous value
                const percentage = (((previousValue - currentValue) / previousValue) * 100);
                return {
                    greaterThan: false,
                    percentage: percentage
                };
            }
        }
        return null; // Return null for invalid or empty data
    });


    return (
        <div className=' flex justify-baseline h-32 pl-4 py-[3px] bg-white relative min-[850px]:col-span-2 max-[800px]:col-span-6 max-md:col-span-6 col-span-6 rounded-md hover:shadow shadow-gray-100 duration-200 cursor-pointer'>

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
            {
                Increasing[index]?.greaterThan ? <span className='absolute top-5 right-14 flex items-center gap-1 text-[#4D8773]'>
                    <FaArrowUp className='order-2 text-sm' />
                    <span className='order-1 font-medium'>
                        +{
                            Increasing[index]?.percentage.toString().slice(0, 2)
                        }%
                    </span>
                </span> : <span className='absolute top-5 right-14 flex items-center gap-1 text-[#a31925]'>
                    <FaArrowDown className='order-2 text-sm'/>
                    <span className="order-1 font-medium">
                        -{
                            Increasing[index]?.percentage.toString().slice(0, 2)
                        }%
                    </span>
                </span>
            }
        </div>
    )
}

export default Card;