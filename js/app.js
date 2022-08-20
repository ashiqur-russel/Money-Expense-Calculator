document.getElementById("calculation").addEventListener("click", () => {
  const income = getIncomeAmount();
  console.log(income);

  //Change expense field
  const totalExpense = calculateExpense();
  console.log(totalExpense);
  const previousTotalExpense = getTextElementById("total-expense");
  const newTotalExpense = previousTotalExpense + totalExpense;
  document.getElementById("total-expense").innerText = newTotalExpense;

  //Balance update
  const updateBalance = income - totalExpense;
  document.getElementById("balance").innerText = updateBalance;
});

function getIncomeAmount() {
  const incomeInputField = getInputElementById("income");
  return incomeInputField;
}

function getInputElementById(elemntId) {
  const inputField = document.getElementById(elemntId);
  const inPutFieldStringValue = inputField.value;
  const inputFieldValue = parseFloat(inPutFieldStringValue);

  return inputFieldValue;
}

function calculateExpense() {
  //Calculate expense
  const foodExpense = getInputElementById("food");
  const rentExpense = getInputElementById("rent");
  const clothesExpenese = getInputElementById("clothes");
  if (isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpenese)) {
    alert("Please Enter value");
    return false;
  }
  const totalExpense = foodExpense + rentExpense + clothesExpenese;

  return totalExpense;
}

function getTextElementById(elemntId) {
  const textElement = document.getElementById(elemntId);
  const textElementString = textElement.innerText;
  const textElementNumber = parseFloat(textElementString);
  return textElementNumber;
}

function updateBalance(income, expense) {
  const incomeBalance = income;
  const expenseBalance = expense;
  const newBalance = incomeBalance - expenseBalance;
  console.log(newBalance);
}
