import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {

    const saveExpenseHandler= savedExpense => {
        const expenseData = {
            ...savedExpense,
            _id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseHandler={saveExpenseHandler}/>
    </div>
}

export default NewExpense