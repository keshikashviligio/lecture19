
const signupForm = document.querySelector('#user-signup-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');

const usernameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');

function validateUsername(){
  if(!username.validity.valid){
    username.classList.add('has-error');
    if(username.validity.tooShort){
      usernameError.innerText = 'Username must be 4 length or more';
    } else {
      usernameError.innerText = 'Username is required.';
    }
    return false;
  } else {
    username.classList.remove('has-error');
    username.classList.add('has-success');
    usernameError.innerText = '';
    return true;
  }
}

function validateEmail(){
  if(!email.validity.valid){
    email.classList.add('has-error');
    if(email.validity.typeMismatch){
      emailError.innerText = 'Please enter valid email.';
    } else {
      emailError.innerText = 'Email is required.';
    }
    return false;
  } else {
    email.classList.remove('has-error');
    email.classList.add('has-success');
    emailError.innerText = '';
    return true;
  }
}

username.addEventListener('input', () => {
  validateUsername();
});

email.addEventListener('input', () => {
  validateEmail();
});

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const isValidUsername = validateUsername();
  const isValidEmail = validateEmail();

  if(isValidUsername && isValidEmail){
    const usernameValue = username.value;
    const emailValue = email.value;
    console.log('We can send information to server.', {username: usernameValue, email: emailValue});
    dynamicModalShow('#user-notification');
  } else {
    dynamicModalShow('#payment-success');
  }
});


// Error handling
const el = document.querySelector('#asdasdasd');
// console.log('Before error');

try {
  console.log('Try');
  el.addEventListener('click', e => {
    console.log(e);
  });
  console.log('Try end');
} catch (error){
  console.log('Error ocured', error);
}

// console.log('After error');

// Modals
const modalEl = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');

// modalCloseBtn.addEventListener('click', () => {
//   closeModal();
// });

// function showModal(){
//     modalEl.classList.add('open');
// }
//
// function closeModal() {
//   modalEl.classList.remove('open');
// }

function dynamicModalShow(modalSelector){
  const modal = document.querySelector(modalSelector);
  if(modal){
    modal.classList.add('open');
    const modalCloseBtn = modal.querySelector('.modal-close')
    modalCloseBtn.addEventListener('click', () => {
      dynamicModalClose(modalSelector);
    });
  }
}

function dynamicModalClose(modalSelector) {
  const modal = document.querySelector(modalSelector);
  if(modal){
    modal.classList.remove('open');
  }
}
