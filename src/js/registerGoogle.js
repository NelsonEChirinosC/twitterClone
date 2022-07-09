/*
    OPTIMIZA EL CODIGO, MUCHAS PARTES SE PUEDE OPTIMIZAR:
        1.- FILLED CONTENT CON EL KEYUP DE INPUT: LISTO
        2.- FOCUS PARA CAMBIAR EL COLOR A AZUL Y NO CAMBIAR TANTO CON LOS .style :LISTO
        3.- OPTIMIZAR la funcion simulateAPi, SE PUEDEN OPTIMIZAR BASTANTE, LA ULTIMA PARTE NO DEBERIA IR AHI: LISTO
        4.- CREAR UN OBJETO CON LOS PARRAFOS PARA LOS ERRORES (CREARLO EN OTRO ARCHIVO JS)

*/ 

/*
    Global 
*/
let userGoogleLogin;
let isPasswordSection = false;

window.onload = ()=>{
    emailInput.focus();
}

body.addEventListener('click', resetConfig)

function resetConfig(e){

    if(!e.currentTarget.classList.contains('buttons__container__toCreateAccount')){
        createAccountButton.classList.remove('active');
        createAccountList.classList.remove('active');
    }

    console.log('inResetConfig')

    if(divSpecialInputEmail.classList.contains('focused')){
        divSpecialInputEmail.classList.remove('focused')
    }

    if(createEmailPlaceholder.classList.contains('filledContent')){
        varificationCreateEmailInput();
    }
}

function varificationCreateEmailInput(){

    const createEmailValue = createEmailInput.value;

    if(buttonActualEmail.dataset.gmail != 'true'){

        

    }

}


/*
    Inputs Functionality click event
*/

inputsAll.forEach((input)=> {
    input.addEventListener('change', toogleFilledContent);
    input.addEventListener('keyup', toogleFilledContent);
})

function toogleFilledContent (e){

    e.stopPropagation();

    const elem = e.currentTarget
    console.log(e.currentTarget.id)

    switch(elem.id){

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



    }

    function condition (elementValue, placeHolder){
        if(elementValue === ''){
            placeHolder.classList.remove('filledContent');
        } else {
            placeHolder.classList.add('filledContent')
        }
    }

}

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
        passwordForm.classList.remove('move');

        // emailForm.style.display = 'block';
        emailForm.classList.remove('display__none');
        setTimeout(()=> { 
            passwordForm.style.left = '';
            emailForm.classList.add('move'); 
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
            return user.email == emailValue || user.phone == emailValue
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
                emailForm.classList.remove('move');

                // passwordForm.style.display = 'block';
                passwordForm.classList.remove('display__none');
                setTimeout(()=> {
                    emailForm.style.left = '';
                    passwordForm.classList.add('move');
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
            
            console.log('TO THE TIWTTER SECTION');
            
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

function animateCheckBox(isChecked, checkbox){

    if(isChecked){
        checkbox.style.backgroundColor = '#1a73e8';
    } else {
        checkbox.style.backgroundColor = '#fff';
    }

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
    mainTitle.innerHTML = `Crear tu cuenta de Google`;
    secondTitle.classList.add('display__none');

}

buttonToEmailSection.addEventListener('click', toEmailSection);

function toEmailSection(){

    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');

    setTimeout( () => {
        simulateApiToEmailSection();
    }, 1000 );

}

function simulateApiToEmailSection(){
    
    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');
    
    emailForm.classList.remove('display__none');
    emailForm.classList.add('move');
    mainTitlesWrapper.classList.remove('createAccountSection');
    createFormP1.classList.add('display__none');
    mainTitle.innerHTML = `Acceder`;
    secondTitle.classList.remove('display__none');

}

buttonToCreateSectionP2.addEventListener('click', toAccountSectionP2)

function toAccountSectionP2(){
    let foundError = false;
    
    



    if(foundError){return}
}

