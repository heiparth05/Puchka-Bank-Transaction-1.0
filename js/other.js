////////// set deposit amount and all about deposit//////////

document
.getElementById("deposit-btn")
.addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");

  const newDepositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText);

  // update deposit total amount //

  const depositTotal = document.getElementById("deposit-total");

  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);

  const newDepositTotal = newDepositAmount + previousDepositAmount;

  depositTotal.innerText = newDepositTotal;

  // Update Current Account Balance //

  const balanceTotal = document.getElementById("balance-total");

  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);

  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  balanceTotal.innerText = newBalanceTotal;

  depositInput.value = "";
});

////////// set withdraw amount and all about withdraw//////////

document
.getElementById("withdraw-btn")
.addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");

  const withdrawAmountText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawAmountText);

  // Update withdraw total amount //

  const withdrawTotal = document.getElementById("withdraw-total");

  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawText);

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotal.innerText = newWithdrawTotal;

  // Update Current Account Balance //

  const balanceTotal = document.getElementById("balance-total");

  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotal.innerText = newBalanceTotal;

  withdrawInput.value = "";
});