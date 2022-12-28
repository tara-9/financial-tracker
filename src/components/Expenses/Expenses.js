import { useState } from 'react'
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import ExpensesList from './ExpensesList'

const Expenses = props => {
    const [year, setYear] = useState('2020')
    const yearSelectHandler = year => {
        setYear(year)
    }
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === year)
    return (
        <div>
            <ExpensesFilter selectedYear={year} onYearSelectHandler={yearSelectHandler} />
            <Card className='expenses'>
                <ExpensesList items = {filteredExpenses} />
            </Card>
        </div>

    )
}

export default Expenses