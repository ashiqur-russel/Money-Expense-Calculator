document.getElementById("calculation").addEventListener("click", () => {
  getIncomeAmount();

  const foodExpense = getInputElementById("food");
  const rentExpense = getInputElementById("rent");
  const clothesExpenese = getInputElementById("clothes");
  if (isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpenese)) {
    alert("Please Enter value");
    return false;
  }
  const totalExpense = foodExpense + rentExpense + clothesExpenese;
  const previousTotalExpense = getTextElementById("total-expense");
  const newTotalExpense = previousTotalExpense + totalExpense;
  document.getElementById("total-expense").innerText = newTotalExpense;
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

function getTextElementById(elemntId) {
  const textElement = document.getElementById(elemntId);
  const textElementString = textElement.innerText;
  const textElementNumber = parseFloat(textElementString);
  return textElementNumber;
}
