import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 0,
		title: 'Car Insurance',
		amount: 17.78,
		date: new Date(2022, 2, 28),
	},
	{
		id: 1,
		title: 'House Insurance',
		amount: 25.78,
		date: new Date(2022, 4, 28),
	},
	{
		id: 2,
		title: 'Life Insurance',
		amount: 10.78,
		date: new Date(2022, 6, 28),
	},
	
	{
		id: 3,
		title: 'ATM Withdrawal',
		amount: 21.78,
		date: new Date(2022, 10, 28),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
