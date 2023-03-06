const form = document.getElementById('myForm');
const errorMessages = new Map();

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the email, password and submit password inputs
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitPasswordInput = document.getElementById('submit-password');
  

  // Check if the email and password fields are empty
  if (emailInput.value.trim() === '') {
    createErrorMessage(emailInput, 'Email cannot be blank');
    highlightInput(emailInput);
    document.getElementById("email-icon-red").style.display = "block";
  } else {
    removeErrorMessage(emailInput);
    document.getElementById("email-icon-red").style.display = "none";
    document.getElementById("email-icon-green").style.display = "block";
  }
  if (passwordInput.value.trim() === '') {
    createErrorMessage(passwordInput, 'Password cannot be blank');
    highlightInput(passwordInput);
 
  } else {
    removeErrorMessage(passwordInput);
    const emailIconRed = document.getElementById("username-icon-red").style.display = "block";z``
   
  }
  if (submitPasswordInput.value.trim() === '') {
    createErrorMessage(submitPasswordInput, 'Submit password cannot be blank');
    highlightInput(submitPasswordInput);
   
  } else {
    removeErrorMessage(submitPasswordInput);
    const emailIconRed = document.getElementById("username-icon-red").style.display = "block";
  }
});

function createErrorMessage(inputElement, message) {
  if (!errorMessages.has(inputElement)) {
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    inputElement.after(errorMessage);
    errorMessages.set(inputElement, errorMessage);
  }
}

function removeErrorMessage(inputElement) {
  if (errorMessages.has(inputElement)) {
    const errorMessage = errorMessages.get(inputElement);
    errorMessage.remove();
    errorMessages.delete(inputElement);
  }
}

function highlightInput(inputElement) {
  inputElement.style.border = '2px solid red';
  inputElement.style.boxShadow = '0 0 5px red';
  
  // Remove the border and shadow when the input is changed
  inputElement.addEventListener('input', () => {
    inputElement.style.border = '';
    inputElement.style.boxShadow = '';
    removeErrorMessage(inputElement);
  });
}