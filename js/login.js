// step-1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
  console.log('submit');

// step-2: get the email address inside the email input field
// always remember to use .value to get text from an input field
  const emailField =document.getElementById('user-email');
  const email = emailField.value;
  // step-3:get password
  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;
  
  //DANGER: Do NOT VERIFY email password on the client side
  // step-4: Verify and email .com
  if(email==='sontan@baap.com' && password === 'secret'){
    window.location.href = 'bank.html'
  }
  else{
    alert('Invalid password or email.')
  }
  
})