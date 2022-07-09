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

const divSpecialInputEmail = document.querySelector('.create__input__special');
const [errorModal, errorPasswordModal] = Array.from(document.querySelectorAll('.error__input'));
const spanSpecialInputEmail = document.querySelector('.create__input__specialSpan');
const spanCreateEmailGmail = document.querySelector('.createEmail__gmailText')

// Placeholders Inputs
const placerHoldersInputs = Array.from(document.querySelectorAll('.inputs__form__placeholder'));
const accessEmailPlaceholder = document.querySelector('.accessEmailPlaceholder');
const accessPasswordPlaceholder = document.querySelector('.accessPasswordPlaceholder');

const createNamePlaceholder = document.querySelector('.createName__placeholder');
const createLastNamePlaceholder = document.querySelector('.createLastName__placeholder');
const createEmailPlaceholder = document.querySelector('.createEmail__placeholder');
const createPasswordPlaceholder = document.querySelector('.createPassword__placeholder');
const createConfirmPlaceholder = document.querySelector('.createConfirm__placeholder');


const mainClassWrapper = document.querySelector('.main');
const mainLoadingBar = document.querySelector('.main__loading__bar');
const mainTitlesWrapper = document.querySelector('.main__titles');
const mainTitle = document.querySelector(".main__titles__principalTitle");
const secondTitle = document.querySelector('.main__titles__secundaryTitle');

//// Forms
//Forms
const emailForm = document.querySelector('.form__email');
const passwordForm = document.querySelector('.form__password');
const createFormP1 = document.querySelector('.main__create__form');

//Inputs
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password__input');
const createNameInput = document.querySelector('#create__name__input');
const createLastNameInput = document.querySelector('#create__lastName__input');
const createEmailInput = document.querySelector('#create__email__input');
const createPasswordInput = document.querySelector('#create__password__input');
const createConfirmInput = document.querySelector('#create__confirm__input');

const inputsAll = Array.from(document.querySelectorAll('.inputs'));


//Checkbox
const passwordCheckBox = document.querySelector('#showPassword__checkbox');
const createShowPasswordCheckbox = document.querySelector('#create__showPassword__checkbox');


//Buttons
const buttonTitle = document.querySelector('.button__titles__password');
const spanButtonTitle = document.querySelector('#registerGoogle__emailUser');
const createAccountButton = document.querySelector('.button__createAccount');
const buttonActualEmail = document.querySelector('.create__button__useActualEmail')

const buttonToEmailSection = document.querySelector('.button__toEmailSection');
const [buttonToPasswordSection, buttonToTwitterSection, buttonToCreateSectionP2 ] = Array.from(document.querySelectorAll('.button__next'));
const buttonsToCreateAccountSection = Array.from(document.querySelectorAll('.buttons__container__toCreateAccount,.buttons__container__toCreateAccount li'));


// List
const createAccountList = document.querySelector('.buttons__container__toCreateAccount');



