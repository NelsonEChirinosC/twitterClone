/*
    GENERAL VARIABLES
*/

const body = document.querySelector('body');

/*
    INDEX VARIABLES    
*/

// Black Wrapper 
const wrapperBlack = document.querySelector('.wrapperBlack');


// Labels 
const indexInputLabelAll = Array.from(document.querySelectorAll('.index__inputLabel'));
const indexModalNameInputLabel = document.querySelector('.indexModal__nameInput');
const indexModalEmailOrPhoneInputLabel = document.querySelector('.indexModal__emailOrPhoneInput');


// Sections Modals
const indexModalStepOneSection = document.querySelector('.modal__step1');
const indexModalStepTwoSection = document.querySelector('.modal__step2');


//Spans
const indexChaCountSpan = document.querySelector('.chaCount');
const indexChangePhoneOrEmailSpan = document.querySelector('.indexModal__form__emailOrPhone');
const indexSelectArrow = document.querySelector('.indexSelect__arrow');



//Modals
const modalPopUpIndex = document.querySelector('.modalPopUp__index');
const modalPopUpCloseModal = document.querySelector('.modalPopUp__closeModal');
const modalGoStepOne = document.querySelector('.go__step1');


// Error Span
const [error__NameInputIndex, error__EoPInputIndex] = document.querySelectorAll('.error__inputIndex');

//Placeholder
const indexInputNamePlaceholder = document.querySelector('.index__inputName__placeholder');
const indexEmailOrPhonePlaceholder = document.querySelector('.index__emailOrPhone__placeholder');


// Inputs
const indexInputAll = Array.from(document.querySelectorAll('.indexInput'));
const indexInputAllStep1 = Array.from(document.querySelectorAll('.modal__step1 .indexInput'));
const createTwitterNameInput = document.querySelector('#indexNameInput');
const createTwitterEmailOrPhoneInput = document.querySelector('#indexEmailOrPhoneInput');



//Selects
const indexSelectsAll = Array.from(document.querySelectorAll('.indexModal__form__dateWrapper .indexSelect__date'));
const indexSelectDay = document.querySelector('#indexSelectDay');
const indexSelectMonth = document.querySelector('#indexSelectMonth');
const indexSelectYear = document.querySelector('#indexSelectYear');

// Buttons

// Navigations Buttons
const googleButtonIndex = document.querySelector('.button__google');
const appleButtonIndex = document.querySelector('.button__apple');
const buttonCreateTwitterIndex = document.querySelector('.button__createTwitter');
const indexNextStep1Button = document.querySelector('.button__nextStep1');

// Checkbox
const indexStepTwoCheckbox = document.querySelector('#index__step2__checkbox');


/*
    REGISTER APPLE VARIABLES
*/

// Divs
const principalHeaderAppleIDDiv = document.querySelector('.principal__header__appleID');
const wrapperOnDiv = document.querySelector('.wrapperOn');
const firstInput = document.querySelector('.firstInput > .insiderInput');
const secondInput = document.querySelector('.secondInput > .insiderInput');

//Span
const headerAppleIDInfo = document.querySelector('.header__appleID__info');


// Label
const mainInputLabelWrapper = document.querySelector('.firstInput');
const mainInputLabelWrapper2 = document.querySelector('.secondInput');

//Forms
const mainInputForm = document.querySelector('.main__input__form');


//Inputs
const appleInputsAll = Array.from(document.querySelectorAll('.main__input__appleInput'));
const appleIdInput = document.querySelector('#appleIdInput');
const applePasswordInput = document.querySelector('#applePasswordInput');

// Buttons
const headerAppleIDShowSesionButton = document.querySelector('.header__appleID__showSesionButton');
const [buttonNextId, buttonNextPassword] = document.querySelectorAll('.input__next');


/*
    REGISTER GOOGLE VARIABLES
*/

// Tags
const mainRegisterGoogle = document.querySelector('main');

// Div
const divSpecialInputEmail = document.querySelector('.create__input__special');
const divAvailableEmail = document.querySelector('.availableEmail');
const divCustomGenre = document.querySelector('.formP2__customGenre');

// Images 
const mediaLaptopForCreateAccountImg = document.querySelector('.mediaLaptop__forCreateAccount__img');

//Figcaption
const mediaLaptopForCreateAccountText = document.querySelector('.mediaLaptop__forCreateAccount__text');



// Error modal
const [errorModal, 
    errorPasswordModal, 
    errorCreateNameAndLastModal, 
    errorCreateEmailModal, 
    errorCreatePasswordAndConfirmModal, 
    errorCreatePhoneModal ,
    errorCreateRecuperationModal, 
    errorCreateDateOfBirthModal,
    errorCreateGenreModal,
    errorCreateNameGenreModal,
    errorCreateReferAsModal
    ] = Array.from(document.querySelectorAll('.error__input'));

//Span
const createPasswordSpan = document.querySelector('.create__password__span');
const createInputRecuperationSpan = document.querySelector('.create__input__recuperationSpan');
const spanSpecialInputEmail = document.querySelector('.create__input__specialSpan');
const spanCreateEmailGmail = document.querySelector('.createEmail__gmailText');
const createSectionSecondTitleSpan = document.querySelector('.createAccountSection__secundaryTitle > span');
const createDayOfBirthSpan = document.querySelector('.create__dayOFBirth__span');

// const createInputSpecialSpan = document.querySelector('.create__input__specialSpan');


const createAccountSectionEmailUser = document.querySelector('.createAccountSection__emailUser');

const Allerrors = Array.from(document.querySelectorAll('.error__input'));


// Placeholders Inputs
const placerHoldersInputs = Array.from(document.querySelectorAll('.inputs__form__placeholder'));
const accessEmailPlaceholder = document.querySelector('.accessEmailPlaceholder');
const accessPasswordPlaceholder = document.querySelector('.accessPasswordPlaceholder');

const createNamePlaceholder = document.querySelector('.createName__placeholder');
const createLastNamePlaceholder = document.querySelector('.createLastName__placeholder');
const createEmailPlaceholder = document.querySelector('.createEmail__placeholder');
const createPasswordPlaceholder = document.querySelector('.createPassword__placeholder');
const createConfirmPlaceholder = document.querySelector('.createConfirm__placeholder');
const createPhonePlaceholder = document.querySelector('.createPhone__placeholder');
const createRecuperationEmailPlaceholder = document.querySelector('.createRecuperationEmail__placeholder');
const createDayOfBirthPlaceholder = document.querySelector('.createDayOfBirth__placeholder');
const createYearOfBirthPlaceholder = document.querySelector('.createYearOfBirth__placeholder');
const createNameGenrePlaceholder = document.querySelector('.createNameGenre__placeholder');



const mainClassWrapper = document.querySelector('.main');
const mainLoadingBar = document.querySelector('.main__loading__bar');
const mainTitlesWrapper = document.querySelector('.main__titles');
const mainTitle = document.querySelector(".main__titles__principalTitle");
const secondTitle = document.querySelector('.main__titles__secundaryTitle');
const createSectionSecondTitle = document.querySelector('.createAccountSection__secundaryTitle');



//// Forms
//Forms
const emailForm = document.querySelector('.form__email');
const passwordForm = document.querySelector('.form__password');
const createFormP1 = document.querySelector('.main__create__formP1');
const createFormP2 = document.querySelector('.main__create__formP2');

//Inputs
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password__input');
const createNameInput = document.querySelector('#create__name__input');
const createLastNameInput = document.querySelector('#create__lastName__input');
const createEmailInput = document.querySelector('#create__email__input');
const createPasswordInput = document.querySelector('#create__password__input');
const createConfirmInput = document.querySelector('#create__confirm__input');
const createPhoneInput = document.querySelector('#create__phone__input');
const createRecuperationEmailInput = document.querySelector('#create__recuperationEmail__input');
const createDayBirthInput = document.querySelector('#create__dayBirth__input');
const createYearBirthInput = document.querySelector('#create__yearBirth__input');
const createNameGenreInput = document.querySelector('#create__nameGenre__input');

//Select
const createGenreSelect = document.querySelector('#create__genre__select');
const createMonthsSelect = document.querySelector('#create__months__select');
const createReferAsInput = document.querySelector('#create__referAs__input');

// Special Div
const createInputSpecial = document.querySelector('.create__input__special');


const inputsAll = Array.from(document.querySelectorAll('.inputs'));


//Checkbox
const passwordCheckBox = document.querySelector('#showPassword__checkbox');
const createShowPasswordCheckbox = document.querySelector('#create__showPassword__checkbox');


//Buttons
const buttonTitle = document.querySelector('.button__titles__password');
const spanButtonTitle = document.querySelector('#registerGoogle__emailUser');
const createAccountButton = document.querySelector('.button__createAccount');
const buttonActualEmail = document.querySelector('.create__button__useActualEmail');
const countryPhoneButton = document.querySelector('.country__phone__button')

const buttonToEmailSection = document.querySelector('.button__toEmailSection');
const buttonToCreateAccountSectionP1 = document.querySelector('.button__toCreateAccountSectionP1');

const [buttonToPasswordSection, buttonToTwitterSection, buttonToCreateSectionP2, buttonToCreateAccount ] = Array.from(document.querySelectorAll('.button__next'));
const buttonsToCreateAccountSection = Array.from(document.querySelectorAll('.buttons__container__toCreateAccount,.buttons__container__toCreateAccount li'));


// List
const createAccountList = document.querySelector('.buttons__container__toCreateAccount');
const availableEmailListLi = Array.from(document.querySelectorAll('.availableEmail__list li')); 
const countryPhoneList = document.querySelector('.country__phone__list');

const countryPhoneListLi = document.querySelectorAll('.country__phone__list li');

// Options
const createOptionsSelect = Array.from(document.querySelectorAll('.option__toDelete'));

//Footer
const createAccountFooterGoogle = document.querySelector('.footer__google');



