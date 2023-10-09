import {
  cardTemplate,
  cardsSection, 
  cardForm,
  cardPopup,
  paymentRadios,
  paymentMethods,
  addPaymentButton,
  submitPaymentButton,
  cancelCardButton,
  submitCardButton,
  nameInput,
  numberInput,
  expirationInput,
  cvvInput,
  initialCards,
} from "./utils/constants.js";

//event listeners
addPaymentButton.addEventListener('click', openCardPopup);
cardForm.addEventListener('submit', addCard);
cancelCardButton.addEventListener('click', closeCardPopup);

//add initial cards
for (let i in initialCards) {
  const card = cardTemplate.content.cloneNode(true); 
  const hiddenNumber = hideCardNumber(initialCards[i].number)
  card.querySelector('.payment__method-number').textContent = hiddenNumber;
  card.querySelector('.payment__method-date').textContent = initialCards[i].expires;
  if(i==0) {
    card.querySelector('#default').classList.add('payment__method-default')
    card.querySelector('.payment__check').checked = true;
  }
  cardsSection.append(card);
}

function openCardPopup() {
  cardPopup.classList.add('card_visible');
}

function closeCardPopup() {
  cardPopup.classList.remove('card_visible');
  hideInputErrors();
  restoreCardData();
  cardForm.reset();
}

function hideCardNumber(num) {
  return 'XXXX XXXX XXXX '+num.toString().slice(12)
}

function addCard(e) {
  e.preventDefault()
  const card = cardTemplate.content.cloneNode(true);  
  card.querySelector('.payment__method-number').textContent = numberInput.value;
  card.querySelector('.payment__method-date').textContent = expirationInput.value;
  cardsSection.append(card);
  
  closeCardPopup();
}

function checkValidation(form) {
  submitCardButton.disabled = true;
  const inputs = Array.from(form.querySelectorAll('.card__input'));
  inputs.forEach((input) => {
    input.addEventListener('input', ()=> {
      checkInputValidity(input);
    })
  })
}

checkValidation(cardForm);

function checkInputValidity(input) {
  const error = cardForm.querySelector(`.${input.id}-error`)    
  if(!input.validity.valid) {   
    error.innerText = input.validationMessage;
    error.classList.add('validity_visible');
  } else {
    error.classList.remove('validity_visible')
  }
  if(cardForm.checkValidity()) {
    submitCardButton.disabled = false;
  }
  if(input.id !== 'cvv'){
    changeCardData(input)
  }
}

function changeCardData(input) {
  cardForm.querySelector(`#card-${input.id}`).innerText = input.value;
}

function restoreCardData() {
  cardForm.querySelector('#card-name').innerText = 'Vasya Pupkin'
  cardForm.querySelector('#card-expiration').innerText = '09/23'
  cardForm.querySelector('#card-number').innerText = '0000 9999 2222 3333'
}

function hideInputErrors() {
  cardForm.querySelectorAll('.validity').forEach((error) => error.classList.remove('validity_visible'))
}


