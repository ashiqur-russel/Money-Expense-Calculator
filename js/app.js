document.getElementById("calculation").addEventListener("click", () => {
  const income = getIncomeAmount();

  //Change expense field
  const totalExpense = calculateExpense();
  const previousTotalExpense = getTextElementById("total-expense");
  const newTotalExpense = previousTotalExpense + totalExpense;
  document.getElementById("total-expense").innerText = newTotalExpense;

  //Balance update
  const updateBalance = income - totalExpense;
  document.getElementById("balance").innerText = updateBalance;
});

function getIncomeAmount() {
  const incomeInputField = getInputElementById("income");
  if (isNaN(incomeInputField)) {
    alert("Please Enter Income value");
    return 0;
  } else if (incomeInputField === "" || incomeInputField < 0) {
    alert("Please Enter a correct value");
    document.getElementById("income").value = "";

    return 0;
  }
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
    return 0;
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

document.getElementById("btn-savings").addEventListener("click", () => {
  const savings = calculateSavings();
  document.getElementById("saving").innerText = savings;
  const balanceField = getTextElementById("balance");
  const remainingBalance = balanceField - savings;
  document.getElementById("remain-balance").innerText = remainingBalance;
});

function calculateSavings() {
  const savingElementField = getInputElementById("savings");
  console.log(savingElementField);
  if (isNaN(savingElementField)) {
    alert("Please enter correct input");
    return 0;
  } else if (savingElementField < 0) {
    alert("Please enter positive number");
    return 0;
  }
  const savingPercentage = savingElementField / 100;
  const income = getIncomeAmount();

  const savingAmountPercantage = income * savingPercentage;
  return savingAmountPercantage;
}

function updateBalance() {}
