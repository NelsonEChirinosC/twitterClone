/*
    Global 
*/
let userGoogleLogin;
let newUser = {};
let isPasswordSection = false;

window.onload = ()=>{
    emailForm.classList.remove('display__none');
    emailInput.focus();
}

function randomNumber(min,max){

    return Math.floor((Math.random() * max) + min)

}

body.addEventListener('click', resetConfig)

function resetConfig(e){

    if(!e.currentTarget.classList.contains('buttons__container__toCreateAccount')){
        createAccountButton.classList.remove('active');
        createAccountList.classList.remove('active');
    }

    if(divSpecialInputEmail.classList.contains('focused')){
        divSpecialInputEmail.classList.remove('focused')
    }

    if(createEmailPlaceholder.classList.contains('filledContent')){
        verificationCreateEmailInput({});
    }

    if(createRecuperationEmailPlaceholder.classList.contains('filledContent')){
        if(createRecuperationEmailInput.value.trim() != ''){
            verificationOtherEmailError({ span: createInputRecuperationSpan, modal:  errorCreateRecuperationModal, input: createRecuperationEmailInput});
        }
    }

    if(createPhonePlaceholder.classList.contains('filledContent')){

        const errorCreatePhone = errorMessageGoogle.registerGoogle.createUserGoogle.phoneAndDate.phone;

        if(createPhoneInput.value.length < 5){

            errorCreatePhoneModal.classList.add('active');
            createPhoneInput.classList.add('error')

            errorCreatePhoneModal.innerHTML = errorCreatePhone.invalidNumber;

        }

    }

    if(countryPhoneList.classList.contains('active')){
        countryPhoneButton.classList.remove('focused');
        countryPhoneList.classList.remove('active');
    }



}

function verificationCreateEmailInput({foundError}){

    let emailUser;
    const createEmailValue = createEmailInput.value;
    const errorCreateEmailMsg = errorMessageGoogle.registerGoogle.createUserGoogle.emailAndPassword.email;
    
    spanSpecialInputEmail.classList.remove('display__none');
    errorCreateEmailModal.classList.remove('active');
    createInputSpecial.classList.remove('error');

    if(!foundError){
        if(createEmailValue == ''){
            activeError({span: spanSpecialInputEmail, modal: errorCreateEmailModal, input: createInputSpecial});
            errorCreateEmailModal.innerHTML = errorCreateEmailMsg.empty;

            foundError = true;

            return foundError
        } 
    }
    
    if(buttonActualEmail.dataset.gmail == 'true'){
        // Con @gmail.com
        
        
        
        // Length Error
        if(createEmailValue.length < 6 || createEmailValue.length > 30 ){
            activeError({span: spanSpecialInputEmail, modal: errorCreateEmailModal, input: createInputSpecial});
            errorCreateEmailModal.innerHTML = errorCreateEmailMsg.longFail;
            
            foundError = true
            
            return foundError
        }
        
        // Character Error
        const regexInvalidCharacter = /[^a-z0-9]/gi;
        const isInvalid = regexInvalidCharacter.test(createEmailValue); 
        
        if(isInvalid){
            activeError({span: spanSpecialInputEmail, modal: errorCreateEmailModal, input: createInputSpecial});
            errorCreateEmailModal.innerHTML = errorCreateEmailMsg.invalidCharacter;
            
            foundError = true
            
            return foundError
        }

        emailUser = `${createEmailValue}@gmail.com`; 

    } else {

        const foundError = false;
        
        // Sin @gmail
        
        verificationOtherEmailError( {span: spanSpecialInputEmail, modal: errorCreateEmailModal, input: createEmailInput, inputError: createInputSpecial});

        if(foundError) {return foundError}

        emailUser = createEmailValue.toLowerCase();
    }

    //// Alredy in the database

    const emailsInDataBase = usersGoogle.map((user) => user.email);
    const isEmailInDataBase = isEmailInDataBaseFunc(emailUser)

    if(isEmailInDataBase){
        activeError({span: spanSpecialInputEmail, modal: errorCreateEmailModal, input: createInputSpecial});
        errorCreateEmailModal.innerHTML = errorCreateEmailMsg.alredyExits;

        foundError = true

        // Suggest available user only with @gmail
        if(buttonActualEmail.dataset.gmail == 'true'){

            let option0, option1, option2;
            const nameValue = replaceInvalidCha(createNameInput.value.trim()).toLowerCase();
            const lastNameValue = replaceInvalidCha(createLastNameInput.value.trim()).toLowerCase();

            if(nameValue != '' && lastNameValue != ''){

                option0 = nameValue + lastNameValue;
                option1 = lastNameValue + nameValue;
                option2 = nameValue + lastNameValue + randomNumber(1,100);

                showOptionEmail(option0, option1,option2);
            } else if(nameValue != '' && lastNameValue == ''){

                option0 = nameValue + randomNumber(1,100);
                option1 = nameValue + randomNumber(1,100);
                option2 = nameValue + randomNumber(1,100);

                showOptionEmail(option0, option1,option2);

            } else if(nameValue == '' && lastNameValue !=''){

                option0 = lastNameValue + randomNumber(1,100);
                option1 = lastNameValue + randomNumber(1,100);
                option2 = lastNameValue + randomNumber(1,100);

                showOptionEmail(option0, option1,option2);

            }

        }

        return foundError

    }

    function isEmailInDataBaseFunc(emailValue){
        const result = emailsInDataBase.some((email)=> {
            return email.toLowerCase() == emailValue.toLowerCase();
        });

        return result;
    }

    function replaceInvalidCha(str){

        const regexInvalidCha = /[^a-z0-9]/gi;

        str = str.replace(regexInvalidCha, '');

        return str
    }

    function showOptionEmail(option0, option1,option2){

        if(!isEmailInDataBaseFunc(option0 + '@gmail')){
            availableEmailListLi[0].innerHTML = option0
            availableEmailListLi[0].addEventListener('click', () => {putOption(option0)});
        };
        if(!isEmailInDataBaseFunc(option1 + '@gmail')){
            availableEmailListLi[1].innerHTML = option1;
            availableEmailListLi[1].addEventListener('click', () => {putOption(option1)});
        };
        if(!isEmailInDataBaseFunc(option2 + '@gmail')){
            availableEmailListLi[2].innerHTML = option2;
            availableEmailListLi[2].addEventListener('click', () => {putOption(option2)});
        };

        spanSpecialInputEmail.classList.add('display__none');
        divAvailableEmail.classList.remove('display__none');
    }

    function putOption(option){

        createEmailInput.value = option;

        spanSpecialInputEmail.classList.remove('display__none');
        divAvailableEmail.classList.add('display__none');
        spanSpecialInputEmail.classList.remove('display__none');
        errorCreateEmailModal.classList.remove('active');
        createInputSpecial.classList.remove('error');

    }

}

/*
Inputs Functionality click event
*/

inputsAll.forEach((input)=> {
    input.addEventListener('change', toogleFilledContent);
    input.addEventListener('keyup', toogleFilledContent);
})

/*

    class main__titles buttons funcionality

*/

buttonTitle.addEventListener('click', backEmailSection);

function backEmailSection(){
    
    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');

    passwordInput.value = '';
    errorModal.classList.remove('active');
    errorPasswordModal.classList.remove('active');
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');

    setTimeout( ()=> {
        emailInput.focus();
        simulateApiToEmailSection();
        
    }, 500);

}

function simulateApiToEmailSection(){

    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');

    mainTitle.innerHTML = 'Acceder';
    secondTitle.classList.add('active');
    buttonTitle.classList.remove('active');

    passwordForm.style.left = '-500px';
    setTimeout(()=> {
        // passwordForm.style.display = 'none';
        passwordForm.classList.add('display__none');
        passwordForm.classList.remove('actualView');
        // emailForm.style.display = 'block';
        emailForm.classList.remove('display__none');
        setTimeout(()=> { 
            passwordForm.style.left = '';
            emailForm.classList.add('actualView'); 
        }, 10);
    }, 200);

}

/*
    class buttons__container buttons funcionalities
*/

// button__createAccount

createAccountButton.addEventListener('click', showAccountList);

function showAccountList(e){
    e.stopPropagation();
    const button = e.currentTarget;

    if(!button.classList.contains('active')){
        button.classList.add('active');
        createAccountList.classList.add('active');
    } else {
        button.classList.remove('active');
        createAccountList.classList.remove('active');
    }
}

// Nexts Buttons

buttonToPasswordSection.addEventListener('click', toPasswordSection);

function toPasswordSection(){

    const emailValue = emailInput.value;

    emailInput.focus();
    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');
    
    setTimeout( () => {
        simulateApiToPasswordSection(emailValue);
    }, 1000 );
}

function simulateApiToPasswordSection(emailValue){

    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');

    const accessErrorEmailMsg = errorMessageGoogle.registerGoogle.accessSection.emailSection;

    if(emailValue.trim() === ''){
        errorModal.innerHTML = accessErrorEmailMsg.empty;

        errorModal.classList.add('active');
        emailInput.classList.add('error');
        emailInput.focus();

    } else {

        const isInDataBase = usersGoogle.some((user)=> {
            return user.email == emailValue.toLowerCase() || user.phone == emailValue
        });


        if(!isInDataBase){
            errorModal.innerHTML = accessErrorEmailMsg.notFound;
    
            errorModal.classList.add('active');
            emailInput.classList.add('error');
            emailInput.focus();
        } else {

            isPasswordSection = true;

            userGoogleLogin = usersGoogle.find((user) => {
                return user.email == emailValue || user.phone == emailValue
            });

            mainTitle.innerHTML = 'Te damos la bienvenida';
            secondTitle.classList.remove('active');
            buttonTitle.classList.add('active');

            spanButtonTitle.innerHTML = userGoogleLogin.email;

            emailForm.style.left = '-500px';
            setTimeout(()=> {
                // emailForm.style.display = 'none';
                emailForm.classList.add('display__none');
                emailForm.classList.remove('actualView');

                // passwordForm.style.display = 'block';
                passwordForm.classList.remove('display__none');
                setTimeout(()=> {
                    emailForm.style.left = '';
                    passwordForm.classList.add('actualView');
                    passwordInput.focus(); 
                }, 10);
            }, 200);
        }

    }

}

buttonToTwitterSection.addEventListener('click', toTwitterSection);

function toTwitterSection(){

    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');
    
    setTimeout( () => {
        simulateApiToTwitterSection();
    }, 500 );
}

function simulateApiToTwitterSection (){
        
    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');

    const passwordValue = passwordInput.value;
    const accessErrorPasswordMsg = errorMessageGoogle.registerGoogle.accessSection.passwordSection;

    if(passwordValue.trim() === ''){
        errorPasswordModal.innerHTML = accessErrorPasswordMsg.empty;

        errorPasswordModal.classList.add('active');
        passwordInput.classList.add('error');
        passwordInput.focus();

    } else {

        if(!(userGoogleLogin.password == passwordValue)){
            errorPasswordModal.innerHTML = accessErrorPasswordMsg.notFound;
    
            errorPasswordModal.classList.add('active');
            passwordInput.classList.add('error');
            passwordInput.focus();
        } else {
            
            alert('WELCOME TO TWITTER')
            emailInput.value = '';
            passwordInput.value = '';
            window.close();
        }

    }
}

/*
    Checkbox funcionality
*/ 

// Show Password Email Section
passwordCheckBox.addEventListener('click', showPassword);

function showPassword(){
    let isChecked = passwordCheckBox.checked;

    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

    animateCheckBox(isChecked, passwordCheckBox);

}

// Show Password Create Section Phase 1
createShowPasswordCheckbox.addEventListener('click', createShowPassword);

function createShowPassword(){
    let isChecked = createShowPasswordCheckbox.checked;

    if(createPasswordInput.type === 'password' && createConfirmInput.type ==='password'){
        createPasswordInput.type = 'text';
        createConfirmInput.type = 'text';
    } else {
        createPasswordInput.type = 'password';
        createConfirmInput.type = 'password';
    }

    animateCheckBox(isChecked, createShowPasswordCheckbox)

}

/*
    Create Account Section
*/ 

createEmailInput.addEventListener('click', focusSpecialInput);

function focusSpecialInput(e){

    e.stopPropagation();

    const activeElement = document.activeElement;

    if(createEmailInput.id == activeElement.id){
        divSpecialInputEmail.classList.add('focused')
    }    

}

// Create Section Phase1 - button actual email

buttonActualEmail.addEventListener('click', changeEmailInput);

function changeEmailInput(e){

    e.stopPropagation();

    if(buttonActualEmail.dataset.gmail == 'true'){

        buttonActualEmail.innerHTML = 'Crea una nueva dirección de Gmail en su lugar';
        spanSpecialInputEmail.innerHTML = 'Deberás confirmar que este correo electrónico es tuyo.';
        createEmailPlaceholder.innerHTML = 'Tu dirección de correo electrónico';

        spanCreateEmailGmail.classList.add('display__none');
        divSpecialInputEmail.classList.add('focused');
        createEmailInput.classList.add('withOutGoogle');

        buttonActualEmail.dataset.gmail = 'false';
        createEmailInput.focus();

    } else {

        buttonActualEmail.innerHTML = 'Prefiero usar mi dirección de correo electrónico actual ';
        spanSpecialInputEmail.innerHTML = 'Puedes usar letras, números y signos de puntuación ';
        createEmailPlaceholder.innerHTML = 'Nombre de usuario';

        spanCreateEmailGmail.classList.remove('display__none');
        divSpecialInputEmail.classList.add('focused');
        createEmailInput.classList.remove('withOutGoogle');
        buttonActualEmail.dataset.gmail = 'true';
        createEmailInput.focus();

    }
}

// Navigation Functions

buttonsToCreateAccountSection.forEach((li)=> {
    li.addEventListener('click', toAccountSectionP1)
});

function toAccountSectionP1(){

    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');

    setTimeout( () => {
        simulateApiToAccountSectionP1();
    }, 1000 );

    
}

function simulateApiToAccountSectionP1(){

    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');
    
    
    emailForm.classList.add('display__none');
    emailForm.classList.remove('move');
    mainTitlesWrapper.classList.add('createAccountSection');
    createFormP1.classList.remove('display__none');
    // createFormP1.classList.add('actualView');
    mainTitle.innerHTML = `Crear tu cuenta de Google`;
    secondTitle.classList.remove('active');
    mainRegisterGoogle.classList.add('inCreateAccount');
    createAccountFooterGoogle.classList.add('createAccount');

}

buttonToEmailSection.addEventListener('click', toEmailSection);

function toEmailSection(){

    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');

    setTimeout( () => {
        simulateApiToEmailSectionFromP1();
    }, 1000 );

}

function simulateApiToEmailSectionFromP1(){
    
    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');
    
    emailForm.classList.remove('display__none');
    emailForm.classList.add('actualView');
    mainTitlesWrapper.classList.remove('createAccountSection');
    createFormP1.classList.add('display__none');
    mainTitle.innerHTML = `Acceder`;
    mainRegisterGoogle.classList.remove('inCreateAccount');
    createAccountFooterGoogle.classList.remove('createAccount');
    // secondTitle.classList.remove('display__none');
    resetPhase1InputsValues();
    emailInput.focus()

}

buttonToCreateSectionP2.addEventListener('click', toAccountSectionP2)

function toAccountSectionP2(){

    

   // Swipe to the Phase 2 Section
    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');

    setTimeout( () => {
        simulateApiToAccountSectionP2();
    }, 1000 );
    
    
}

function simulateApiToAccountSectionP2(){

    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');

    // Verification Error

    let foundError = false;
    const errorCreateEmailMsg = errorMessageGoogle.registerGoogle.createUserGoogle.emailAndPassword;
    
    foundError = verificationCreateEmailInput({foundError});

    if(createNameInput.value == ''){
        errorCreateNameAndLastModal.classList.add('active');
        createNameInput.classList.add('error');

        errorCreateNameAndLastModal.innerHTML = errorCreateEmailMsg.name.empty;

        foundError = true;
    }

    if(createLastNameInput.value == ''){
        errorCreateNameAndLastModal.classList.add('active');
        createLastNameInput.classList.add('error');

        errorCreateNameAndLastModal.innerHTML = errorCreateEmailMsg.lastName.empty;

        foundError = true;
    }

    if(createNameInput.value == '' && createLastNameInput.value == ''){

        errorCreateNameAndLastModal.classList.add('active');
        createNameInput.classList.add('error');
        createLastNameInput.classList.add('error');

        errorCreateNameAndLastModal.innerHTML = errorCreateEmailMsg.nameAndLastName.empty;

        foundError = true;

    }

    let passwordValue = createPasswordInput.value;
    let confirmValue = createConfirmInput.value;

    if( passwordValue == '' && confirmValue == '' || 
        passwordValue == '' && confirmValue != ''){

        showPasswordError();

        errorCreatePasswordAndConfirmModal.innerHTML = errorCreateEmailMsg.password.empty;

        foundError = true;

    } else if(passwordValue.length < 8 || passwordValue.length > 20){

        showPasswordError();

        errorCreatePasswordAndConfirmModal.innerHTML = errorCreateEmailMsg.password.invalidLong;

        foundError = true;

    } else if(passwordValue != '' && confirmValue == ''){

        showPasswordError();

        errorCreatePasswordAndConfirmModal.innerHTML = errorCreateEmailMsg.password.notConfirmed;

        foundError = true;

    } else if(passwordValue != confirmValue){

        showPasswordError();

        errorCreatePasswordAndConfirmModal.innerHTML = errorCreateEmailMsg.password.notCoincidence;

        foundError = true;

    }



    if(foundError){return}

    // Add User info to dataBase

    newUser.name = createNameInput.value;
    newUser.lastName = createLastNameInput.value;
    if(buttonActualEmail.dataset.gmail == 'true'){
        newUser.email = createEmailInput.value + '@gmail.com';
    } else {
        newUser.email = createEmailInput.value;
    }
    newUser.password = passwordValue;


    function showPasswordError(){
        
        errorCreatePasswordAndConfirmModal.classList.add('active');
        createPasswordInput.classList.add('error');
        createConfirmInput.classList.add('error');
        createPasswordSpan.classList.add('display__none');

    }
    
    createFormP1.classList.remove('actualView');
    createFormP1.classList.add('left');
    createSectionSecondTitle.classList.remove('display__none');
    console.log(newUser.email);
    mainTitle.innerHTML = "Bienvenido a Google";
    mediaLaptopForCreateAccountImg.src = 'https://ssl.gstatic.com/accounts/signup/glif/personal.svg';
    mediaLaptopForCreateAccountText.innerHTML = 'Tu información personal es privada y está protegida';
    //    secondTitle.classList.remove('active');
    createAccountSectionEmailUser.innerHTML = newUser.email;
    
    setTimeout(()=> {
                 // emailForm.style.display = 'none';
                 createFormP1.classList.add('display__none');
                 // emailForm.classList.remove('move');
    
                 // passwordForm.style.display = 'block';
                 createFormP2.classList.remove('display__none');
                 setTimeout(()=> {
                     createFormP2.classList.add('actualView');
                     // passwordInput.focus(); 
                 }, 10);
             }, 200);

}

buttonToCreateAccountSectionP1.addEventListener('click', backToAccountSectionP1);

function backToAccountSectionP1(){

    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');
    
    setTimeout( () => {
        simulateApiBackToAccountSectionP1();
    }, 500 );

}

function simulateApiBackToAccountSectionP1(){

    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');

    createFormP1.classList.add('actualView');
    createFormP1.classList.remove('left');
    createSectionSecondTitle.classList.add('display__none');
    mainTitle.innerHTML = "Crear tu cuenta de Google";
    mediaLaptopForCreateAccountImg.src = 'https://ssl.gstatic.com/accounts/signup/glif/account.svg';
    mediaLaptopForCreateAccountText.innerHTML = 'Una cuenta. Todos los servicios de Google a tu disposición.';

    resetPhase2Inputs();

    // secondTitle.classList.remove('active');
   
    setTimeout(()=> {
                // emailForm.style.display = 'none';
                createFormP2.classList.add('display__none');
                // emailForm.classList.remove('move');

                 // passwordForm.style.display = 'block';
                createFormP1.classList.remove('display__none');
                setTimeout(()=> {
                    createFormP1.classList.add('actualView');
                    // passwordInput.focus(); 
                }, 10);
            }, 200);

}

function resetPhase1InputsValues(){
    // Reset  values

    createNameInput.value = '';
    createLastNameInput.value = '';
    createEmailInput.value = '';
    createPasswordInput.value = '';
    createConfirmInput.value ='';

    console.log(createFormP1PlaceholdersAll)
    createFormP1PlaceholdersAll.forEach(placeholder => {
        console.log(placeholder)
        placeholder.classList.remove('filledContent')
    });

}

function resetPhase2Inputs(){
    //// Reset the errors and values
    //Phone
    createPhoneInput.value = '';
    createPhoneInput.classList.remove('error');
    errorCreatePhoneModal.classList.remove('active');
    
    // Recuperation Email
    createRecuperationEmailInput.value = '';
    createRecuperationEmailInput.classList.remove('error');
    errorCreateRecuperationModal.classList.remove('active');
    
    // Date
    errorCreateDateOfBirthModal.classList.remove('active');
    
    createDayBirthInput.value = '';
    createDayBirthInput.classList.remove('error');

    createMonthsSelect.value = 'default';
    createMonthsSelect.classList.remove('error');
    createOptionsSelect[0].classList.remove('display__none');

    createYearBirthInput.value = '';
    createYearBirthInput.classList.remove('error');

    // Genre Select
    createGenreSelect.value = 'default';
    createGenreSelect.classList.remove('error');
    errorCreateGenreModal.classList.remove('active');
    createOptionsSelect[1].classList.remove('display__none');

    // Genre Name
    createNameGenreInput.value = '';
    createNameGenreInput.classList.remove('error');
    errorCreateNameGenreModal.classList.remove('active');

    //Genre refer
    createReferAsInput.value = 'default';
    createReferAsInput.classList.remove('error');
    createOptionsSelect[2].classList.remove('display__none');

    createFormP2PlaceholdersAll.forEach(placeholder => {
        placeholder.classList.remove('filledContent')
    });

}



//// Buttons Funcionality

countryPhoneButton.addEventListener('click', showCountryPhoneList);

function showCountryPhoneList(e){

    e.stopPropagation();
    
    if(!countryPhoneList.classList.contains('active')){
        createPhoneInput.focus();
        countryPhoneButton.classList.add('focused');
        countryPhoneList.classList.add('active');

    } else {
        countryPhoneButton.classList.remove('focused');
        countryPhoneList.classList.remove('active');
    }



}

countryPhoneListLi.forEach((li)=>{
    li.addEventListener('click', (e)=> {selectCountryPhone(e)});
});

function selectCountryPhone(e){

    e.stopPropagation();

    const imgSelected = e.currentTarget.querySelector('img');
    console.log(imgSelected.alt) 

    countryPhoneButton.innerHTML = `
            <img class="${imgSelected.classList.value}" src="${imgSelected.src}" al="${imgSelected.alt}" /> 
            <i class="fa-solid fa-caret-down"></i>
    `;

    createPhoneInput.focus();
    countryPhoneButton.classList.remove('focused');
    countryPhoneList.classList.remove('active');

}

// Create Account 

buttonToCreateAccount.addEventListener('click', createAccount);

function createAccount(){

    let foundError = false;
    let arrayErrors = [];
    const errorMsgPhoneDate = errorMessageGoogle.registerGoogle.createUserGoogle.phoneAndDate;

    arrayErrors.push(verifationPhoneNumberError({section: 'registerGoogle', input: createPhoneInput, modal: errorCreatePhoneModal }));
    arrayErrors.push(verificationOtherEmailError({span: createInputRecuperationSpan, modal:  errorCreateRecuperationModal, input: createRecuperationEmailInput, optional: true}));
    arrayErrors.push(verificationDateOfBirthError(errorMsgPhoneDate));
    arrayErrors.push(verificationGenreError(errorMsgPhoneDate));

    if(!divCustomGenre.classList.contains('display__none')){

        arrayErrors.push(verificationNameGenreError(errorMsgPhoneDate));
        arrayErrors.push(verificationReferAsError(errorMsgPhoneDate));

    }

    foundError = arrayErrors.some((bool) => bool == true);

    if(foundError){return}

    // Add User Info to DataBase

    newUser.phone = createPhoneInput.value || '';
    newUser.emailRecuperation = createRecuperationEmailInput.value || '';
    newUser.dateOfBirth = {
        day: createDayBirthInput.value,
        month: createMonthsSelect.value,
        year: createYearBirthInput.value
    }

    // newUser.dateOfBirth.day = createDayBirthInput.value;
    // newUser.dateOfBirth.month = createMonthsSelect.value;
    // newUser.dateOfBirth.year = createYearBirthInput.value;

    if(createGenreSelect.value == 'custom'){
        newUser.genre = createNameGenreInput.value;
    } else {
        newUser.genre = createGenreSelect.value;
    }

    usersGoogle.push(newUser);

    newUser = {};

    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');

    setTimeout( () => {
        simulateApiToEmailSectionFromP2();
    }, 1000 );
    

}

function simulateApiToEmailSectionFromP2(){

    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');

    emailForm.classList.remove('display__none');
    emailForm.classList.add('actualView');
    mainTitlesWrapper.classList.remove('createAccountSection');
    createFormP1.classList.remove('left');
    createFormP2.classList.add('display__none');
    createFormP2.classList.remove('actualView');
    createSectionSecondTitle.classList.add('display__none');
    mainTitle.innerHTML = `Acceder`;
    mediaLaptopForCreateAccountImg.src = 'https://ssl.gstatic.com/accounts/signup/glif/account.svg';
    mediaLaptopForCreateAccountText.innerHTML = 'Una cuenta. Todos los servicios de Google a tu disposición.';
    mainRegisterGoogle.classList.add('inCreateAccount');
    createAccountFooterGoogle.classList.remove('createAccount');
    resetPhase1InputsValues();
    resetPhase2Inputs();
    // secondTitle.classList.remove('display__none');
    emailInput.focus()

}

function verificationNameGenreError(errorMsg){

    if(createNameGenreInput.value.trim() == ''){
        createNameGenreInput.classList.add('error');
        errorCreateNameGenreModal.classList.add('active');

        errorCreateNameGenreModal.innerHTML = errorMsg.genre.emptyNameGenre;

        return true
    }

    return false
}

function verificationDateOfBirthError(errorMsg){

    let foundError = false;
    // const errorMsgBirth = errorMessageGoogle.registerGoogle.createUserGoogle.phoneAndDate.date;
    const day = parseInt(createDayBirthInput.value);
    const month = createMonthsSelect.value;
    const year = parseInt(createYearBirthInput.value);

    const monthMaxDay = months[month].maxDay;

    console.log(day, month, year)
    
    
    if(day > monthMaxDay){
        
        createDayBirthInput.classList.add('error');
        showError();
        
        foundError = true;
        
    }
    
    if(month == 'default'){
        
        createMonthsSelect.classList.add('error');
        showError();

        foundError = true;

    }

    if(year >= actualYear){

        createYearBirthInput.classList.add('error');
        showError();

        foundError = true;

    }

    if(isNaN(day) || month == 'default' || isNaN(year)){

        if(isNaN(day)){
            createDayBirthInput.classList.add('error');
        }

        if(month == 'default'){
            createMonthsSelect.classList.add('error');
        }

        if(isNaN(year)){
            createYearBirthInput.classList.add('error');
        }

        showError();

        errorCreateDateOfBirthModal.innerHTML = errorMsg.date.empty;
        
    }

    return foundError

    

    function showError(){
        createDayOfBirthSpan.classList.add('display__none');
        errorCreateDateOfBirthModal.classList.add('active');

        errorCreateDateOfBirthModal.innerHTML = errorMsg.date.invalidDate;

    }

    

}

function verificationGenreError(errorMsg){
    let foundError = false;

    console.log(createGenreSelect.value)
    if(createGenreSelect.value == 'default'){
        createGenreSelect.classList.add('error');
        errorCreateGenreModal.classList.add('active');

        errorCreateGenreModal.innerHTML = errorMsg.genre.empty;

        foundError = true;

    }


    return foundError

}

function verificationReferAsError(errorMsg){

    if(createReferAsInput.value == 'default'){

        createReferAsInput.classList.add('error');
        errorCreateReferAsModal.classList.add('active');

        errorCreateReferAsModal.innerHTML = errorMsg.pronoun.empty;

        return true
    }

    return false
}

//// Selects Funcionality

// Delete Option
createMonthsSelect.addEventListener('click', (e) => {deleteOption(e)});
createGenreSelect.addEventListener('click', (e) => {deleteOption(e)});
createReferAsInput.addEventListener('click', (e) => {deleteOption(e)});

function deleteOption(e){
    const select = e.currentTarget;


    if(select.id == 'create__months__select'){
        createOptionsSelect[0].classList.add('display__none');
    } else if (select.id == 'create__genre__select'){
        createOptionsSelect[1].classList.add('display__none');
    }else if(select.id == 'create__referAs__input'){
        createOptionsSelect[2].classList.add('display__none');
    }

}



// Genre select

createGenreSelect.addEventListener('change', showGenreOptions);

function showGenreOptions(){

    if(createGenreSelect.value == 'custom'){
        divCustomGenre.classList.remove('display__none');
    } else {
        divCustomGenre.classList.add('display__none');
    }

    

}

