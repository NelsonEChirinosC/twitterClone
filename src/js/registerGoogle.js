/*
    Global Funcionality
*/
let userGoogleLogin;
let isPasswordSection = false;
let passFocus = false;
let isFromNext = false;

window.onload = ()=>{
    emailInput.focus();
}

body.addEventListener('click', resetConfig)

function resetConfig(e){

    if(!e.currentTarget.classList.contains('buttons__container__toCreateAccount')){
        createAccountButton.classList.remove('active');
        createAccountList.classList.remove('active');
    }

    resetPlaceholder();

    passFocus = false;
}

function resetPlaceholder(){

    if
        ( 
        emailInput.value.trim() == '' && !isPasswordSection || 
        passwordInput.value.trim() == '' && isPasswordSection
        )
        {   
        placeholderTextInput.classList.remove('filledContent');
        placeholderTextInput.style.color = '';
        placeholderPasswordInput.classList.remove('filledContent');
        placeholderPasswordInput.style.color = '';


    } else if
        (
        emailInput.value.trim() != '' && !isPasswordSection ||
        passwordInput.value.trim() != '' && isPasswordSection
        ){
            
            console.log(emailInput.value.trim() != '' && !isPasswordSection)
            console.log(passwordInput.value.trim() != '' && isPasswordSection)

            placeholderPasswordInput.classList.add('filledContent');
            placeholderTextInput.classList.add('filledContent');

            if(!passFocus && !errorPasswordModal.classList.contains('active')){
                placeholderTextInput.style.color = '#555'
                placeholderPasswordInput.style.color = '#555';
            }
    }
}

/*
    Inputs Functionality click event
*/

emailInput.addEventListener('click', toFocus);
passwordInput.addEventListener('click', toFocus);

function toFocus(){

    passFocus = true;

    if(!isPasswordSection && !emailInput.classList.contains('error')){

        placeholderTextInput.style.color = '#3073e8';

    } else if (isPasswordSection && !passwordInput.classList.contains('error')){
        
        placeholderPasswordInput.style.color = '#3073e8';
        
    }

}

document.querySelectorAll('.buttons__container__toCreateAccount,.buttons__container__toCreateAccount li').forEach((li)=> {
    li.addEventListener('click', (e) => e.stopPropagation())
})

/*
    Error modals e-mail Funcionality
*/

/*

    class main__titles buttons funcionality

*/

buttonTitle.addEventListener('click', backEmailSection);

function backEmailSection(){

    
    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');
    passwordInput.value = '';
    errorPasswordModal.classList.remove('active');
    passwordInput.classList.remove('error');
    setTimeout( ()=> {
        simulateApi({});
        resetPlaceholder();
        emailInput.focus();
    }, 1000);

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

// button__next

nextButton.forEach(nextButton => {
    nextButton.addEventListener('click', nextFunc);
}); 

function nextFunc(){

    const emailValue = emailInput.value;
    isFromNext = true;

    emailInput.focus();
    mainLoadingBar.classList.add('active');
    mainClassWrapper.classList.add('main__loading');

    setTimeout( () => {
        simulateApi({emailValue:emailValue});
        resetPlaceholder();
    }, 1000 )

}

function simulateApi ({emailValue}){
        
    mainLoadingBar.classList.remove('active');
    mainClassWrapper.classList.remove('main__loading');

    placeholderTextInput.style.color = '';
    placeholderPasswordInput.style.color = '';

    if(isPasswordSection && isFromNext){

        const passwordValue = passwordInput.value;

        if(passwordValue.trim() === ''){
            errorPasswordModal.innerHTML = `
            <i class="fa-solid fa-circle-exclamation"></i>  
            <p> Ingresa una contraseña </p>
            `;
    
            placeholderPasswordInput.classList.remove('filledContent');
            errorPasswordModal.classList.add('active');
            passwordInput.classList.add('error');
            passwordInput.focus();
    
        } else {
    
            if(!(userGoogleLogin.password == passwordValue)){
                errorPasswordModal.innerHTML = `
                <i class="fa-solid fa-circle-exclamation"></i> 
                <p>La contraseña es incorrecta. Vuelve a intentarlo o haz clic en "¿Olvidaste la contraseña?" para restablecerla.</p>
                `;
        
                errorPasswordModal.classList.add('active');
                placeholderPasswordInput.classList.add('filledContent');
                passwordInput.classList.add('error');
                passwordInput.focus();
            } else {
                
                console.log('TO THE TIWTTER SECTION');
                
            }
    
        }
        

        isFromNext = false;
        return
    }

    if(!isPasswordSection){

        if(emailValue.trim() === ''){
            errorModal.innerHTML = `
            <i class="fa-solid fa-circle-exclamation"></i> 
            <p> Ingresa un correo electronico o numero de telefono </p>
            `;
    
            placeholderTextInput.classList.remove('filledContent');
            errorModal.classList.add('active');
            emailInput.classList.add('error');
            emailInput.focus();
    
        } else {
    
            const isInDataBase = usersGoogle.some((user)=> {
                return user.email == emailValue || user.phone == emailValue
            });
    
    
            console.log(isInDataBase)
    
            if(!isInDataBase){
                errorModal.innerHTML = `
                <i class="fa-solid fa-circle-exclamation"></i> 
                <p> No pudimos encontrar tu Cuenta Google </p>
                `;
        
                errorModal.classList.add('active');
                emailInput.classList.add('error');
                placeholderTextInput.classList.add('filledContent');
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
                    emailForm.style.display = 'none';
                    emailForm.classList.remove('move');

                    passwordForm.style.display = 'block';
                    setTimeout(()=> {
                        emailForm.style.left = '';
                        passwordForm.classList.add('move');
                        passwordInput.focus(); 
                    }, 10);
                }, 200);


                // Commnet this part when finish the other section
                // errorModal.classList.remove('active');
                // emailInput.classList.remove('error');
                // placeholderTextInput.style.color = '#1a73e8';
                // placeholderTextInput.classList.add('filledContent');
                // console.log('Guardado en simulador de base de datos', {userGoogleLogin});
                ////////////////////////////////////////////////////////////////////////
            }
    
        }
    } else {
        
        console.log('Back to the other section');

        mainTitle.innerHTML = 'Acceder';
        secondTitle.classList.add('active');
        buttonTitle.classList.remove('active');

        passwordForm.style.left = '-500px';
        setTimeout(()=> {
            passwordForm.style.display = 'none';
            passwordForm.classList.remove('move');

            emailForm.style.display = 'block';
            setTimeout(()=> { 
                passwordForm.style.left = '';
                emailForm.classList.add('move'); 
            }, 10);
        }, 200);

        isPasswordSection = false;

    }

    isFromNext = false;
}

/*
    class form__pasword checkbox funcionality
*/ 

passwordCheckBox.addEventListener('click', showPassword);

function showPassword(){
    let isChecked = passwordCheckBox.checked;
    
    console.log('Valor de check: ',isChecked);
    console.log(' ');

    if(passwordInput.type === 'password'){
        
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

    if(isChecked){
        passwordCheckBox.style.backgroundColor = '#1a73e8';
    } else {
        passwordCheckBox.style.backgroundColor = '#fff';
    }

}

console.log('Este es el error modal: ')
console.log(errorModal);
console.log('Este es el error modal password:')
console.log(errorPasswordModal)