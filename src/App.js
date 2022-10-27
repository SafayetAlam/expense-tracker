import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 0,
		title: 'Car Insurance',
		amount: 7.78,
		date: new Date(2020, 5, 28),
	},
	{
		id: 1,
		title: 'House Insurance',
		amount: 97.78,
		date: new Date(2021, 8, 28),
	},
	{
		id: 2,
		title: 'Life Insurance',
		amount: 47.78,
		date: new Date(2022, 3, 28),
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
