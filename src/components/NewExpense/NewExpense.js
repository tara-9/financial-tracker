import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseHandler= savedExpense => {
        const expenseData = {
            ...savedExpense,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
        finishEditingHandler()
      
    }
    const startEditingHandler = () => setIsEditing(true)
    const finishEditingHandler = () => setIsEditing(false)

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseHandler={saveExpenseHandler} onCancel={finishEditingHandler} />}
    </div>
}

export default NewExpense