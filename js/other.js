////////// RULE-000001 set deposit amount and all about deposit//////////


// document
// .getElementById("deposit-btn")
// .addEventListener("click", function () {
//   const depositInput = document.getElementById("deposit-input");

//   const newDepositAmountText = depositInput.value;
//   const newDepositAmount = parseFloat(newDepositAmountText);

//   // update deposit total amount  

//   const depositTotal = document.getElementById("deposit-total");

//   const previousDepositText = depositTotal.innerText;
//   const previousDepositAmount = parseFloat(previousDepositText);

//   const newDepositTotal = newDepositAmount + previousDepositAmount;

//   depositTotal.innerText = newDepositTotal;

//   // Update Current Account Balance //

//   const balanceTotal = document.getElementById("balance-total");

//   const previousBalanceText = balanceTotal.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceText);

//   const newBalanceTotal = previousBalanceTotal + newDepositAmount;

//   balanceTotal.innerText = newBalanceTotal;

//   depositInput.value = "";
// });

// ////////// set withdraw amount and all about withdraw//////////

// document
// .getElementById("withdraw-btn")
// .addEventListener("click", function () {
//   const withdrawInput = document.getElementById("withdraw-input");

//   const withdrawAmountText = withdrawInput.value;
//   const newWithdrawAmount = parseFloat(withdrawAmountText);

//   // Update withdraw total amount //

//   const withdrawTotal = document.getElementById("withdraw-total");

//   const previousWithdrawText = withdrawTotal.innerText;
//   const previousWithdrawTotal = parseFloat(previousWithdrawText);

//   const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

//   withdrawTotal.innerText = newWithdrawTotal;

//   // Update Current Account Balance //

//   const balanceTotal = document.getElementById("balance-total");

//   const previousBalanceText = balanceTotal.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceText);

//   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

//   balanceTotal.innerText = newBalanceTotal;

//   withdrawInput.value = "";
// });



////////// RULE-000002 using function start here//////////



// 02 04
function getInputValue (inputId){

  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  inputField.value = "";
  return amountValue;
}


// 06 08 
function updateTotalField (totalFieldId,amount){

  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = amount + previousTotal;
}


// 10 12
function updateBalance (amount, isAdd){

  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);

  if (isAdd == true){
    balanceTotal.innerText = previousBalanceTotal + amount;
  }
  else{
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

//////////// set deposit amount and all about deposit//////////


// 01
document
.getElementById("deposit-btn")
.addEventListener("click", function () {

  const newDepositAmount = getInputValue("deposit-input");

  if (newDepositAmount > 0){

    // 05
    // update deposit total amount //
  
    updateTotalField ("deposit-total",newDepositAmount);
  
    // 09
    // Update Current Account Balance //
  
    updateBalance(newDepositAmount, true);
  
  }
});

////////// set withdraw amount and all about withdraw//////////


// 03
document
.getElementById("withdraw-btn")
.addEventListener("click", function () {

  const newWithdrawAmount = getInputValue ("withdraw-input");

  if (newWithdrawAmount > 0){

    // 07
    // Update withdraw total amount //
  
    updateTotalField("withdraw-total", newWithdrawAmount);
  
    // 11
    // Update Current Account Balance //
  
    updateBalance(newWithdrawAmount, false);
  }
});