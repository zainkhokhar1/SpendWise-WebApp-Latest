
import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const RecentTransections = () => {
    return (
        <div className='w-full flex flex-col mt-5 lg:mt-7 mb-5 h-92'>
            {/* navbar */}
            <div className='flex justify-between items-center px-2'>
                <span className='flex items-center gap-1'>
                    <h3 className='font-semibold text-nowrap my-5 sm:my-0 lg:pl-3'>
                        Recent Transactions
                    </h3>
                    {/* icon */}
                    <IoMdInformationCircleOutline className='mt-[1px] text-slate-400' />
                </span>
                <BsThreeDots className='text-slate-600 hover:text-slate-700 duration-200 cursor-pointer' />
            </div>

            {/* table like structure for recent Taransections */}
            {/* table here */}
            <table className='grid grid-cols-4 h-full overflow-x-auto sm:overflow-x-hidden overflow-y-auto mt-7'>

                <thead className=' grid grid-cols-8 col-span-4 px-3 text-start mt-6 font-medium text-slate-400'>
                    <tr className='col-span-2  flex items-center gap-1'>
                        <span>
                            Name
                        </span>
                        <IoIosArrowDown />
                    </tr>
                    <tr className='col-span-2'>
                        Account
                    </tr>
                    <tr className='col-span-2 flex items-center gap-1'>
                        <span>
                            Date
                        </span>
                        <IoIosArrowDown />
                    </tr>
                    <tr className='col-span-2'>
                        Amount
                    </tr>
                </thead>
                <tbody className='col-span-8'>
                    {/* first row */}
                    <tr className='col-span-8 grid grid-cols-8 text-start items-center border border-transparent border-b-slate-200'>
                        <td className='col-span-2'>
                            {/* Card here */}
                            <div className='flex items-center mt-2 -ml-2'>
                                <div className='w-fit hidden sm:block'>
                                    <img src="data:image/jpeg;base64,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" className='sm:w-14 w-12' alt="Img" />
                                </div>
                                <div className='flex items-center flex-col ml-5 sm:ml-0'>
                                    {/* title */}
                                    <h3 className=''>
                                        Paypal
                                    </h3>
                                    {/* category */}
                                    <p className='text-slate-500 text-sm'>
                                        Income
                                    </p>
                                </div>
                            </div>
                        </td>
                        {/* for account */}
                        <td className='col-span-2 text-sm sm:text-medium'>
                            Platinum
                        </td>
                        <td className='col-span-2 sm:text-sm text-xs line-clamp-1 -ml-4 w-20 sm:w-auto sm:-ml-3 font-semibold'>
                            08 Aug 2023 5:02 AM
                        </td>
                        <td className='col-span-2 text-green-700 ml-2sm:ml-0 hover:text-green-800 font-semibold text-sm sm:text-base'>
                            + $1,2400
                        </td>
                    </tr>

                    {/* 2nd row just for now */}
                    <tr className='col-span-8 grid grid-cols-8 text-start items-center border border-transparent border-b-slate-200'>
                        <td className='col-span-2'>
                            {/* Card here */}
                            <div className='flex items-center mt-2 -ml-2'>
                                <div className='w-fit hidden sm:block'>
                                    <img src="data:image/jpeg;base64,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" className='sm:w-14 w-12' alt="Img" />
                                </div>
                                <div className='flex items-center flex-col ml-5 sm:ml-0'>
                                    {/* title */}
                                    <h3 className=''>
                                        Paypal
                                    </h3>
                                    {/* category */}
                                    <p className='text-slate-500 text-sm'>
                                        Income
                                    </p>
                                </div>
                            </div>
                        </td>
                        {/* for account */}
                        <td className='col-span-2 text-sm sm:text-medium'>
                            Platinum
                        </td>
                        <td className='col-span-2 sm:text-sm text-xs line-clamp-1 -ml-4 w-20 sm:w-auto sm:-ml-3 font-semibold'>
                            08 Aug 2023 5:02 AM
                        </td>
                        <td className='col-span-2 text-green-700 ml-2sm:ml-0 hover:text-green-800 font-semibold text-sm sm:text-base'>
                            + $1,2400
                        </td>
                    </tr>

                    {/* 3rd row just for now */}
                    <tr className='col-span-8 grid grid-cols-8 text-start items-center border border-transparent border-b-slate-200'>
                        <td className='col-span-2'>
                            {/* Card here */}
                            <div className='flex items-center mt-2 -ml-2'>
                                <div className='w-fit hidden sm:block'>
                                    <img src="data:image/jpeg;base64,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" className='sm:w-14 w-12' alt="Img" />
                                </div>
                                <div className='flex items-center flex-col ml-5 sm:ml-0'>
                                    {/* title */}
                                    <h3 className=''>
                                        Paypal
                                    </h3>
                                    {/* category */}
                                    <p className='text-slate-500 text-sm'>
                                        Income
                                    </p>
                                </div>
                            </div>
                        </td>
                        {/* for account */}
                        <td className='col-span-2 text-sm sm:text-medium'>
                            Platinum
                        </td>
                        <td className='col-span-2 sm:text-sm text-xs line-clamp-1 -ml-4 w-20 sm:w-auto sm:-ml-3 font-semibold'>
                            08 Aug 2023 5:02 AM
                        </td>
                        <td className='col-span-2 text-green-700 ml-2sm:ml-0 hover:text-green-800 font-semibold text-sm sm:text-base'>
                            + $1,2400
                        </td>
                    </tr>

                    {/* 4th row just for now */}
                    <tr className='col-span-8 grid grid-cols-8 text-start items-center border border-transparent border-b-slate-200'>
                        <td className='col-span-2'>
                            {/* Card here */}
                            <div className='flex items-center mt-2 -ml-2'>
                                <div className='w-fit hidden sm:block'>
                                    <img src="data:image/jpeg;base64,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" className='sm:w-14 w-12' alt="Img" />
                                </div>
                                <div className='flex items-center flex-col ml-5 sm:ml-0'>
                                    {/* title */}
                                    <h3 className=''>
                                        Paypal
                                    </h3>
                                    {/* category */}
                                    <p className='text-slate-500 text-sm'>
                                        Income
                                    </p>
                                </div>
                            </div>
                        </td>
                        {/* for account */}
                        <td className='col-span-2 text-sm sm:text-medium'>
                            Platinum
                        </td>
                        <td className='col-span-2 sm:text-sm text-xs line-clamp-1 -ml-4 w-20 sm:w-auto sm:-ml-3 font-semibold'>
                            08 Aug 2023 5:02 AM
                        </td>
                        <td className='col-span-2 text-green-700 ml-2sm:ml-0 hover:text-green-800 font-semibold text-sm sm:text-base'>
                            + $1,2400
                        </td>
                    </tr>

                    {/* 5th for now */}
                    <tr className='col-span-8 grid grid-cols-8 text-start items-center border border-transparent border-b-slate-200'>
                        <td className='col-span-2 '>
                            {/* Card here */}
                            <div className='flex items-center mt-2 -ml-2'>
                                <div className='w-fit sm:block hidden'>
                                    <img src="data:image/jpeg;base64,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" className='sm:w-14 w-12' alt="Img" />
                                </div>
                                <div className='flex items-center flex-col ml-5 sm:ml-0'>
                                    {/* title */}
                                    <h3 className='text-sm'>
                                        Paypal
                                    </h3>
                                    {/* category */}
                                    <p className='text-slate-500 text-sm '>
                                        Income
                                    </p>
                                </div>
                            </div>
                        </td>
                        {/* for account */}
                        <td className='col-span-2 text-sm sm:text-medium'>
                            Platinum
                        </td>
                        <td className='col-span-2 sm:text-sm text-xs line-clamp-1 -ml-4 w-20 sm:w-auto sm:-ml-3 font-semibold'>
                            08 Aug 2023 5:02 AM
                        </td>
                        <td className='col-span-2 text-green-700 ml-2sm:ml-0 hover:text-green-800 font-semibold text-sm sm:text-base'>
                            + $1,2400
                        </td>
                    </tr>


                </tbody>

            </table>
        </div>
    )
}

export default RecentTransections;