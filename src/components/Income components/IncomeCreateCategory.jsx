
import React from 'react'

const IncomeCreateCategory = () => {
  return (
    <div className=' rounded-md max-sm:col-span-6 max-sm:h-52 cursor-pointer shadow-lg shadow-purple-950/5 duration-200 ease-in-out col-span-2 p-2  border border-purple-400 bg-white space-y-2'>
      <div className='flex flex-col px-4 gap-3 max-sm:gap-6'>
        <h1 className='text-[14px] font-medium text-purple-950 max-sm:mt-4'>
          Create Category
        </h1>
        <input type="text" className='ring ring-purple-300 px-2 rounded-lg h-8 text-sm focus:ring-purple-700' placeholder='Category Name ' />
        <button className='bg-purple-600 hover:bg-purple-700 duration-200 py-2 text-white border-2 cursor-pointer border-purple-100 rounded-lg font-semibold'>Create</button>
      </div>
    </div>
  )
}

export default IncomeCreateCategory;