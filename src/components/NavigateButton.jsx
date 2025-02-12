
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const NavigateButton = ({ Icon, selected, title, setSelected, index }) => {

    const [isIncludePaths, setIsIncludePaths] = useState(false);

    const path = window.location.pathname;

    // Array of paths for the Buttons to redirect
    const link = [
        '',
        '/',
        '/income-planner',
        '/budget-planner',
        '/expense-planner',
        '/reports-analysis',
        '/notifications'
    ];

    useEffect(() => {
        //checking if the path is included in the array or not 
        const isIncludedPath = link.some((singleLink) => singleLink === path);
        setIsIncludePaths(isIncludedPath);
    }, [path]);

    return (
        <Link to={`${link[index]}`} onClick={() => { setSelected(index) }} className={`flex gap-2  ${selected === index ? "bg-[#EDF3FA] font-semibold text-[#134074]" : "bg-transparent opacity-80 hover:opacity-100"} items-center outline-none focus:outline-none w-full hover:bg-slate-200 duration-200 cursor-pointer px-4 py-[4px] rounded-md`}>
            {
                Icon
            }
            <span className='text-[17px] text-nowrap'>
                {
                    title
                }
            </span>
        </Link>
    )
}

export default NavigateButton