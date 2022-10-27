import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	const [switchState, setSwitchState] = useState(false);

	const addNewExpenseHandler = () => {
		setSwitchState(true);
	};

	const cancelHandler = () => {
		setSwitchState(false);
	};

	return (
		<div className="new-expense">
			{!switchState && (
				<button className="addNewExpenseBtn" onClick={addNewExpenseHandler}>
					Add New Expense
				</button>
			)}
			{switchState && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					cancelHandler={cancelHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
