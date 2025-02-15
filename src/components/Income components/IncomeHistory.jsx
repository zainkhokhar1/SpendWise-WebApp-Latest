
import React from 'react'

const IncomeHistory = () => {

  const incomeData = [
    { category: "Freelancing", date: "2025-01-05", amount: 500 },
    { category: "Salary", date: "2025-01-01", amount: 1500 },
    { category: "Rent", date: "2025-01-10", amount: 300 },
    { category: "Investment", date: "2025-01-15", amount: 700 },
    { category: "Freelancing", date: "2025-02-03", amount: 600 },
    { category: "Business", date: "2025-02-07", amount: 1200 },
    { category: "Loan Return", date: "2025-02-12", amount: 250 },
    { category: "Gift", date: "2025-02-20", amount: 400 },
    { category: "Part-Time Job", date: "2025-03-05", amount: 800 },
    { category: "Freelancing", date: "2025-03-10", amount: 550 }
  ];



  // get data from the backend in the form of array of objects each object consisting of the name category created at and amount
  return (
    <div>

      {/* navbar  */}
      <div className='flex flex-col items-center justify-around my-2 w-full overflow-y-auto pb-1'>

        <div className='bg-purple-50 flex justify-between px-2 items-center min-sm:w-11/12 w-full rounded-full py-2 mx-auto border border-purple-400'>
          <span className='min-sm:text-[14px] text-[12px] font-medium'>
            Name
          </span>
          <span className='min-sm:text-[14px] text-[12px] font-medium min-md:ml-24'>
            creation date
          </span>
          <span className='min-sm:text-[14px] text-[12px] font-medium'>
            Amount added (PKR)
          </span>
        </div>

        {/* contaienr to show all the data */}
        <div className='flex flex-col items-center w-full h-72 overflow-y-auto mb-1'>

          {
            incomeData.map((oneData) => {
              return <div className='grid grid-cols-6 items-center justify-between w-full min-sm:w-11/12 px-2 py-2 mx-auto'>
                <div className='col-span-2 text-start'>
                  {
                    oneData.category
                  }
                </div>
                <div className='col-span-2 text-center'>
                  {
                    oneData.date
                  }
                </div>
                <div className='col-span-2 text-center'>
                  {
                    oneData.amount
                  }/-
                </div>
                <div className='h-[0.5px] w-full col-span-6 mt-2 bg-purple-500'></div>
              </div>
            })
          }
        </div>

      </div>
    </div>
  )
}

export default IncomeHistory;