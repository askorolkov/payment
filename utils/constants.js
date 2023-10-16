export const cardTemplate = document.querySelector('#cards')
export const cardsSection = document.querySelector('.payment__cards')
export const cardForm = document.querySelector('.card__add')
export const cardPopup = document.querySelector('.card')
export const paymentRadios = document.querySelectorAll('.payment__check')
export const paymentMethods = document.querySelectorAll('.payment__method')

//buttons
export const addPaymentButton = document.querySelector('.payment__add')
export const submitPaymentButton = document.querySelector('.payment__submit')
export const cancelCardButton = document.querySelector('.card__cancel')
export const submitCardButton = document.querySelector('.card__submit')

//card inputs
export const nameInput = cardForm.querySelector('#name')
export const numberInput = cardForm.querySelector('#number')
export const expirationInput = cardForm.querySelector('#expiration')
export const cvvInput = cardForm.querySelector('#cvv')

// export const validationMessages = {
//   'numberMessage':'Введите 16-значный номер карты, допускаются только цифры',
//   'cvvMessage': 'Введите 3-значный cvv код, допускаются только цифры',
//   'expirationMessage': 'Введите дату формата ММ/ГГ',
//   'nameMessage': 'Введите имя владельца карты, не менее 2 символов'
// }

export const initialCards = [
  {'number':1111222233334444,
  'expires':'09/27'},
  {'number': 5555666677778888,
  'expires': '04/23'}
];

