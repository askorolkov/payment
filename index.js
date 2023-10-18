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

//слушатели событий
addPaymentButton.addEventListener('click', openCardPopup);
cardForm.addEventListener('submit', addCard);
cancelCardButton.addEventListener('click', closeCardPopup);

//добавляем начальные карточки
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
  card.querySelector('.payment__method-number').textContent = hideCardNumber(numberInput.value);
  card.querySelector('.payment__method-date').textContent = expirationInput.value;
  cardsSection.append(card);
  
  closeCardPopup();
}

//включаем валидацию всех полей формы
function checkValidation(form) {
  submitCardButton.disabled = true;
  const inputs = Array.from(form.querySelectorAll('.card__input'));
  inputs.forEach((input) => {
    input.addEventListener('input', (e)=> {
      checkInputValidity(input);
    })
  })
}

checkValidation(cardForm);

//можно вводить только цифры, backspace, del и стрелки лево-право
numberInput.addEventListener('keydown',(e)=> {
  const regexp = /4[8-9]|5[0-7]|37|39|46|^8$/
  if(!regexp.test(e.keyCode)) {
    e.preventDefault()
  }
})

//можно вводить только цифры, backspace, del и стрелки лево-право
expirationInput.addEventListener('keydown', (e)=> {
  const regexp = /4[8-9]|5[0-7]|37|39|46|191|^8$/
  if(!regexp.test(e.keyCode)) {
    e.preventDefault()
  }
})

//можно вводить только цифры, backspace, del и стрелки лево-право
cvvInput.addEventListener('keydown', (e)=> {
  const regexp = /4[8-9]|5[0-7]|37|39|46|^8$/
  if(!regexp.test(e.keyCode)) {
    e.preventDefault()
  }
})

//валидация для поля ввода
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

//меняем данные на картинке карты при вводе в поле формы
function changeCardData(input) {
  cardForm.querySelector(`#card-${input.id}`).innerText = input.value;
  if(input.id==='number') {
    cardForm.querySelector(`#card-${input.id}`).innerText = 
      input.value.substring(0,4) + ' ' + input.value.substring(4, 8)+ ' ' +input.value.substring(8, 12)+ ' ' + input.value.substring(12, 16)
  }
}

//восстанавливаем данные на картинке при закрытии формы
function restoreCardData() {
  cardForm.querySelector('#card-name').innerText = 'Vasya Pupkin'
  cardForm.querySelector('#card-expiration').innerText = '09/23'
  cardForm.querySelector('#card-number').innerText = '0000 9999 2222 3333'
}

function hideInputErrors() {
  cardForm.querySelectorAll('.validity').forEach((error) => error.classList.remove('validity_visible'))
}


