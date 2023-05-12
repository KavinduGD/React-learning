import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditinghandler = () => {
    setIsEditing(true);
  };

  const stopEditinghandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense ">
      {!isEditing && (
        <button onClick={startEditinghandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditinghandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
