/*
    GENERAL VARIABLES
*/

const body = document.querySelector('body');

/*
    INDEX VARIABLES    
*/

const googleButtonIndex = document.querySelector('.button__google');
 

/*
    REGISTER GOOGLE VARIABLES
*/

const [errorModal, errorPasswordModal] = Array.from(document.querySelectorAll('.error__input'));
const [placeholderTextInput, placeholderPasswordInput] = Array.from(document.querySelectorAll('.inputs__form__placeholder'));
const mainClassWrapper = document.querySelector('.main');
const mainLoadingBar = document.querySelector('.main__loading__bar');
const mainTitle = document.querySelector(".main__titles__principalTitle");
const secondTitle = document.querySelector('.main__titles__secundaryTitle');

// Forms
const emailInput = document.querySelector('#email-input');
const emailForm = document.querySelector('.form__email');
const passwordForm = document.querySelector('.form__password');
const passwordInput = document.querySelector('#password__input');
const passwordCheckBox = document.querySelector('#showPassword__checkbox');


//Buttons
const buttonTitle = document.querySelector('.button__titles__password');
const spanButtonTitle = document.querySelector('#registerGoogle__emailUser');
const createAccountButton = document.querySelector('.button__createAccount');
const nextButton = Array.from(document.querySelectorAll('.button__next'));


// List
const createAccountList = document.querySelector('.buttons__container__toCreateAccount');



