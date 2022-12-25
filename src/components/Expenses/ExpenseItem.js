import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


const ExpenseItem = props => {
    
    const [title, setTitle] = useState(props.title)

    const onClickHandler = () => {
        setTitle('Updated')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <h2 className='expense-item__price'>${props.amount}</h2>
                <button onClick={onClickHandler}>Update Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem