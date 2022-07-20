/*
    This js is share in all the html created necessary
*/ 

// Globals Variables
let userTwitterLogin = {};

// This function animate the checkbox

function animateCheckBox(isChecked, checkbox){

    if(isChecked){
        checkbox.style.backgroundColor = '#1a73e8';
    } else {
        checkbox.style.backgroundColor = '#fff';
    }

}

// this function validate a simple phone number

function verifationPhoneNumberError({section, input, inputError = input , modal }){

    let errorCreatePhone;

    if(section === 'registerGoogle'){
        errorCreatePhone = errorMessageGoogle.registerGoogle.createUserGoogle.phoneAndDate.phone;

    } 

    if(section === 'createTwitter'){

        errorCreatePhone = errorMessageTwitter.createAccount.phone;
    }


    if(input.value.length < 5 && input.value != ''){

        modal.classList.add('active');
        inputError.classList.add('error');

        modal.innerHTML = errorCreatePhone.invalidNumber;

        return true
    }

    return false
}

// These functions  validate the email input varification 

function verificationOtherEmailError({section='google' ,span = null, modal, input, inputError = input , optional = false}){

    let errorMsg;

    if(optional && input.value == ''){
        return false
    }

    if(section === 'google'){
        errorMsg = errorMessageGoogle.registerGoogle.createUserGoogle.emailAndPassword.email;

    }

    if(section === 'createTwitter'){
        errorMsg = errorMessageTwitter.createAccount.email;
    }

    const email = input.value.trim();

    //// @ Error
    const regexSymbol = /@/g;
    const notSymbolOrVarius = email.match(regexSymbol);

    // not found @
    if(notSymbolOrVarius == null){
        console.log(inputError)
        activeError({span, modal, input: inputError});
        modal.innerHTML = errorMsg.notSymbol;
        
        return true
    }

    // Varius @
    if(notSymbolOrVarius.length > 1){
        activeError({span, modal, input: inputError});
        modal.innerHTML = errorMsg.notOneSymbol;

        return true
    }

    //// not User
    const regexUser = /.@/gi;
    const foundUser = regexUser.test(email);

    if(!foundUser){
        activeError({span, modal, input: inputError});
        modal.innerHTML = errorMsg.notNameUser;

        return true
    }
    
    //// not dominion
    const regexDominion = /\.com$/i;
    const foundDominion = regexDominion.test(email);
    
    if(!foundDominion){
        activeError({span, modal, input: inputError});
        modal.innerHTML = errorMsg.notDominion;
        
        return true
    }

    //Not spacing 
    const regexSpace = /(\s)/g
    const foundSpace = regexSpace.test(email);

    if(foundSpace){
        activeError({span, modal, input: inputError});
        modal.innerHTML = errorMsg.notValidEmail;
        
        return true
    }

    
    return false
    
}

function activeError({span, modal, input}){
    if(span != null){
        span.classList.add('display__none');
    }
    modal.classList.add('active');
    input.classList.add('error');
}


// This function add and remove the class filled content to the plaeholders needed

function toogleFilledContent (e){

    e.stopPropagation();

    const elem = e.currentTarget

    console.log(elem.id)

    switch(elem.id){

        /*
            Index Login Twitter Inputs
        */

        case 'loginInput':
            condition(loginTwitterInput.value.trim(), indexLoginInputPlaceholder);
            break

        case 'indexPasswordLogin':

            const passwordValue = loginTwitterPasswordInput.value.trim();

            if(passwordValue == ''){
                indexTwitterLogInButton.disabled = true;
            } else {
                indexTwitterLogInButton.disabled = false;
            }

            condition(passwordValue, indexPasswordLoginPlaceholder);
            break
        /*
        
            Index Twiiter Inputs
        */
        case 'indexNameInput':
            const nameInputValue = createTwitterNameInput.value.trim();

            indexChaCountSpan.innerHTML = nameInputValue.length;

            condition(nameInputValue, indexInputNamePlaceholder);
            break

        case 'indexEmailOrPhoneInput':
            condition(createTwitterEmailOrPhoneInput.value.trim(), indexEmailOrPhonePlaceholder);
            break

        case 'indexPasswordInputStep5':
            condition(createTwitterPasswordInputStep5.value.trim(), indexPasswordPlaceholderStep5);
            break

        /*
            Register Google Inputs
        */

        case 'email-input':
            condition(emailInput.value.trim(),accessEmailPlaceholder);
            break;

        case 'password__input' :
            condition(passwordInput.value.trim(), accessPasswordPlaceholder);
            break;

        case 'create__name__input':
            condition(createNameInput.value.trim(), createNamePlaceholder);
            break;

        case 'create__lastName__input':
            condition(createLastNameInput.value.trim(), createLastNamePlaceholder);
            break;

        case 'create__email__input':
            condition(createEmailInput.value.trim(), createEmailPlaceholder);
            break;

        case 'create__password__input':
            condition(createPasswordInput.value.trim(), createPasswordPlaceholder);
            break;

        case 'create__confirm__input':
            condition(createConfirmInput.value.trim(), createConfirmPlaceholder);
            break;

        case 'create__phone__input':
            condition(createPhoneInput.value.trim(), createPhonePlaceholder);
            break;

        case 'create__recuperationEmail__input':
            condition(createRecuperationEmailInput.value.trim(), createRecuperationEmailPlaceholder);
            break;

        case 'create__dayBirth__input':
            condition(createDayBirthInput.value.trim(), createDayOfBirthPlaceholder);
            break;

        case 'create__yearBirth__input':
            condition(createYearBirthInput.value.trim(), createYearOfBirthPlaceholder);
            break;

        case 'create__nameGenre__input':
            condition(createNameGenreInput.value.trim(), createNameGenrePlaceholder);
            break;

    }

    function condition (elementValue, placeHolder){
        if(elementValue === ''){
            placeHolder.classList.remove('filledContent');
        } else {
            placeHolder.classList.add('filledContent')
        }
    }

}
