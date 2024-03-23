let expenses = [];
let totalamount = 0;

const categorySelect = document.getElementById('category-select');
const AmountInput = document.getElementById('amount-input');
const InfoInput = document.getElementById('info');
const DateInput = document.getElementById('date-input');
const Addbtn = document.getElementById('add-button');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

Addbtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const info = InfoInput.value;
    const amount = Number(AmountInput.value);
    const date = DateInput.value;

    if (category === null || category === 'select') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (info === null) {
        alert('Please enter a valid amount info');
        return;
    }
    if (date == null) {
        alert('Please select a date');
        return;
    }
    expenses.push({category, amount, info, date});
    if (category === 'Income') {
        totalamount += amount;
    }
    if (category === 'Expense') {
        totalamount -= amount;
    }
    totalAmountCell.textContent = totalamount;

    const newRow = expenseTableBody.insertRow();

    const categorycell = newRow.insertCell();
    const amountcell = newRow.insertCell();
    const infocell = newRow.insertCell();
    const datecell = newRow.insertCell();
    const deletecell = newRow.insertCell();
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('del-button');
    delBtn.addEventListener('click', function(){
        const index = expenses.indexOf(expense);
        if (index !== -1) {
            if (expense.category === 'Income') {
                totalamount -= expense.amount;
            }
            if (expense.category === 'Expense') {
                totalamount += expense.amount;
            }
            totalAmountCell.textContent = totalamount;
            expenses.splice(index, 1);
            expenseTableBody.removeChild(newRow);
        }
    });
    const expense = expenses[expenses.length - 1];
    categorycell.textContent = expense.category;
    amountcell.textContent = expense.amount;
    infocell.textContent = expense.info;
    datecell.textContent = expense.date;
    deletecell.appendChild(delBtn);
});

for (const expense of expenses) {
    if (expense.category === 'Income') {
        totalamount += expense.amount;
    }
    if (expense.category === 'Expense') {
        totalamount -= expense.amount;
    }
    totalAmountCell.textContent = totalamount;

    const newRow = expenseTableBody.insertRow();
    const categorycell = newRow.insertCell();
    const amountcell = newRow.insertCell();
    const infocell = newRow.insertCell();
    const datecell = newRow.insertCell();
    const deletecell = newRow.insertCell();
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('del-button');
    delBtn.addEventListener('click', function(){
        const index = expenses.indexOf(expense);
        if (index !== -1) {
            if (expense.category === 'Income') {
                totalamount -= expense.amount;
            }
            if (expense.category === 'Expense') {
                totalamount += expense.amount;
            }
            totalAmountCell.textContent = totalamount;
            expenses.splice(index, 1);
            expenseTableBody.removeChild(newRow);
        }
    });
    const expense = expenses[expenses.length - 1];
    categorycell.textContent = expense.category;
    amountcell.textContent = expense.amount;
    infocell.textContent = expense.info;
    datecell.textContent = expense.date;
    deletecell.appendChild(delBtn);
}
