const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const submitBtn = document.querySelector("#btn-submit");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

const clearInput = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

const presentAlert = () => {
    const alert = document.createElement('ion-alert')
    alert.message = "Please enter valid reason and amount!",
    alert.header = "Invalid inputs",
    alert.buttons = ["OK"]

    document.body.appendChild(alert)
    return alert.present()
}

submitBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredAmount.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    presentAlert();
    return;
  }

  const newItem = document.createElement("ion-item");
  newItem.textContent = `${enteredReason}: $${enteredAmount}`;

  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = `$${totalExpenses}`;

  clearInput();
});

cancelBtn.addEventListener("click", clearInput);
