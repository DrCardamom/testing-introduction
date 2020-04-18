const { createElement, checkAndGenerate } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  // // the below means 'if both of input fields are empty, dont make a li element'
  // if (
  //   !validateInput(newUserNameInput.value, true, false) ||
  //   !validateInput(newUserAgeInput.value, false, true)
  // ) {
  //   return;
  // }
  //
  // //But if at least one of them is filled, make a li element with the data
  // const outputText = generateText(
  //   newUserNameInput.value,
  //   newUserAgeInput.value
  // );

  // Instead of above, you can do
  if(!checkAndGenerate) {
    return;
  }
  const outputText = checkAndGenerate(
    newUserNameInput.value,
    newUserAgeInput.value
  );

  const userList = document.querySelector('.user-list');
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

// Start the app!
initApp();
