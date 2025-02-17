
import React from 'react'
import IncomeCard from '../components/Income components/IncomeCard';
import Navbar from '../components/Navbar';
import BudgetFormContainer from '../components/budgetComponents/BudgetFormContainer';
import FinancialChart from '../components/charts/FinancialChart';

const BudgetPlanner = () => {
  return (
    <div className='w-full h-full px-4 pt-4'>
      <Navbar highding={'Set your budget with ease.'} para={'Welcome to your Budget management Page.'} />

      <div className='grid grid-cols-12 grid-rows-4 w-full h-full gap-2'>
        {/* 2 cards section here */}
        <div className='col-span-8 gap-2 row-span-2 grid grid-cols-4'>
          <IncomeCard isBudget={true} />
          <IncomeCard isBudget={true} />
        </div>

        {/* A form showing up here. Uper half showing to create category with sub-category and Lower half to set Budget for the categories and sub-categories. */}
        <div className='col-span-4 min-h-full row-span-2 border border-purple-400 bg-purple-200 rounded-lg overflow-hidden'>
          <BudgetFormContainer />
        </div>

        {/* A container showing the bar chart may be decide later what's best to show here */}
        <div className='h-[315px] col-span-8 row-span-2 overflow-hidden border border-purple-400 rounded-lg p-2'>
          <h2>
            Budget History
          </h2>
          <FinancialChart />
        </div>

        {/* A container showing the history that when you have created the the income and other things same to Income planner */}
        <div>

        </div>

        {/* A container to show the pie chart similar to Income Pie */}
        <div>

        </div>

      </div>

    </div>
  )
}

export default BudgetPlanner;