import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Date</div>
            <div className='expense-item__description'>
                <h2>Hotel</h2>
                <h2 className='expense-item__price'>33.56$</h2>
            </div>
        </div>
    )
}

export default ExpenseItem