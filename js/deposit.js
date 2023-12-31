// step-1: add event listener or event handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){

  // step-2: get the deposit amount from the input field
  // for input field use .value to the value inside the input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-3:get the current deposit total
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString)

  // step-4:Add numbers to set the total deposit
  const currentDepositTotal= previousDepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalElement.innerText= currentDepositTotal;
  

  // step-5: get balance total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;


  // step-7:clear the deposit field 
  depositField.value = '';
})