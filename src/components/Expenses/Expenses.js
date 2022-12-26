import { useState } from 'react'
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"

const Expenses = props => {
    const [year, setYear] = useState('2020')
    const yearSelectHandler = year => {
        setYear(year)
    }
    return (
        <div>
            <ExpensesFilter selectedYear={year} onYearSelectHandler={yearSelectHandler} />
            <Card className='expenses'>
                {props.items.map(expense => 
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div>

    )
}

export default Expenses