import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2022, 11, 25)
    const expenseTitle = 'Entertainment Expense'
    const expensePrice = 220
    return (
        <div className="expense-item">
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <h2 className='expense-item__price'>${expensePrice}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem