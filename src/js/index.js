//// Fill in inital information

// Select
let selectDayContent = '<option value="default" ></option>';
let selectYearContent = '<option value="default" ></option>';

for(let i = 1; i <=31; i++){

    selectDayContent += ` <option value="${i}" > ${i} </option>`;

}

for(let i = 2022; i >=1902; i--){

    selectYearContent += ` <option value="${i}" > ${i} </option>`;

}



indexSelectDay.innerHTML =`${selectDayContent}`;
indexSelectYear.innerHTML = selectYearContent;

/*

    // Global 

*/

// let userTwitter = {};

// // BORRAR
// userTwitter.name = 'Nelson Chirinos';
// userTwitter.phone = '04144188697';
// userTwitter.email = 'ezequieln@gmail.com';
// userTwitter.dateOfBirth = {
//     day: '17',
//     month: 'october',
//     year: '2007',
// };
///////////////////////////////////////////////////////


body.addEventListener('click', resetConfig);

function resetConfig(e){

    console.log('RESET CONFIG');
    resetInputIndexLabel();
    resetInputValue();
    
};

function resetInputValue(){

    indexInputAll.forEach(input => {
        
        if(input.value.trim() == ''){
            input.value = '';
        }
    })


};

function resetInputIndexLabel(){
    indexInputLabelAll.forEach((label) =>{
        label.classList.remove('focused');
    });
};

/* 
    Navigations Buttons
*/

googleButtonIndexAll.forEach(googleButton => {
    googleButton.addEventListener('click', openGoogleRegister);
})

function openGoogleRegister(){
    window.open("./src/page/registerGoogle.html", "", "width=502px, height=550px")
};

appleButtonIndexAll.forEach(appleButton => {
    appleButton.addEventListener('click', openAppleRegister);
})


function openAppleRegister(){
    window.open('./src/page/registerApple.html',"","width=700px,height=707px");
};

buttonCreateTwitterIndex.addEventListener('click', openModalCreateTwitter);

function openModalCreateTwitter(){

    body.classList.add('overFlowHidden');
    wrapperBlack.classList.remove('display__none');
    modalPopUpIndex.classList.remove('display__none');
    indexModalStepOneSection.classList.remove('display__none');

};

buttonLoginSesion.addEventListener('click', openLoginSection);

function openLoginSection(){

    body.classList.add('overFlowHidden');
    wrapperBlack.classList.remove('display__none');
    modalPopUpIndex.classList.remove('display__none');
    indexModalLoginUserSection.classList.remove('display__none');

}

// Step 1:

modalPopUpCloseModalAll.forEach(close=>{
    
    close.addEventListener('click', closeModal);
})


function closeModal(){

    body.classList.remove('overFlowHidden');
    wrapperBlack.classList.add('display__none');
    modalPopUpIndex.classList.add('display__none');
    indexModalStepOneSection.classList.add('display__none');
    indexModalLoginUserSection.classList.add('display__none');
    indexModalPasswordLoginSection.classList.add('display__none');

    createTwitterNameInput.value ='';
    createTwitterEmailOrPhoneInput.value = '';
    loginTwitterInput.value = '';
    loginTwitterPasswordInput.value = '';

    indexSelectDay.value = 'default';
    indexSelectMonth.value = 'default';
    indexSelectYear.value = 'default';

    resetInputIndexLabel();
    indexInputLabelAll.forEach((label) =>{
        let placeholder = label.querySelector('.index__input__placeholder');
        if(!label.classList.contains('index__inputLabel__step3')){
            placeholder.classList.remove('filledContent');
        }
    });

    userTwitterLogin = {};

};

indexNextStep1Button.addEventListener('click', goToStepTwo);

function goToStepTwo(){

    userTwitterLogin.name = createTwitterNameInput.value.trim();

    if(indexChangePhoneOrEmailSpan.dataset.type == 'phone'){
        userTwitterLogin.phone = createTwitterEmailOrPhoneInput.value;
    }

    if(indexChangePhoneOrEmailSpan.dataset.type == 'email'){
        userTwitterLogin.email = createTwitterEmailOrPhoneInput.value.trim();
    }

    userTwitterLogin.dateOfBirth = {
        day: indexSelectDay.value,
        month: indexSelectMonth.value,
        year: indexSelectYear.value,
    }

    indexModalStepOneSection.classList.add('display__none');
    indexModalStepTwoSection.classList.remove('display__none');
    
};

// Step 2:

modalBackStepOne.addEventListener('click', backToStepOne);

function backToStepOne(){

    indexModalStepOneSection.classList.remove('display__none');
    indexModalStepTwoSection.classList.add('display__none');
    
};

indexNextStep2Button.addEventListener('click', goToStepThree);

function goToStepThree(){

    const {name, email, phone} = userTwitterLogin
    const {day, month, year} = userTwitterLogin.dateOfBirth

    createTwitterNameInputStep3.value = name;

    if(indexChangePhoneOrEmailSpan.dataset.type == 'phone'){
        indexEmailOrPhonePlaceholderStep3.classList.remove('leftTranslate');
        indexEmailOrPhonePlaceholderStep3.innerHTML = 'Teléfono';
        createTwitterEmailOrPhoneInputStep3.value = phone;
    }

    if(indexChangePhoneOrEmailSpan.dataset.type == 'email'){

        indexEmailOrPhonePlaceholderStep3.classList.add('leftTranslate');
        indexEmailOrPhonePlaceholderStep3.innerHTML = 'Correo electrónico';
        createTwitterEmailOrPhoneInputStep3.value = email;
    }

    createTwitterDateInputStep3.value = 'epa';
    createTwitterDateInputStep3.value = `${day} ${shortMonth(month)} ${year}`;

    function shortMonth(month){
        
        let shortMonth = month.slice(0,3);
        
        return shortMonth + '.' 
    }

    indexModalStepTwoSection.classList.add('display__none');
    indexModalStepThreeSection.classList.remove('display__none');

}

// Step 3:

modalBackStepTwo.addEventListener('click', backToStepTwo);

function backToStepTwo(){
    indexModalStepTwoSection.classList.remove('display__none');
    indexModalStepThreeSection.classList.add('display__none');
}

indexNextStep3Button.addEventListener('click', goToStepFour);

function goToStepFour(e){
    
    e.stopPropagation()

    indexModalStepFourSection.classList.remove('display__none');
    indexModalStepThreeSection.classList.add('display__none');
    indexModalCodeInputLabel.classList.add('focused');
    createTwitterCodeInputStep4.focus();

}

indexInputLabelStep3All.forEach((label)=> {
    label.addEventListener('click', editInputOnStepOne);
});

function editInputOnStepOne(e){

    e.stopPropagation();
    e.preventDefault();

    const label = e.currentTarget;

    indexModalStepThreeSection.classList.add('display__none');
    indexModalStepOneSection.classList.remove('display__none');

    switch(label.id){
        
        case 'labelNameStep3':
            indexModalNameInputLabel.classList.add('focused');
            indexModalNameInputLabel.focus();
            break
        case 'labelEopStep3':
            indexModalEmailOrPhoneInputLabel.classList.add('focused');
            indexModalEmailOrPhoneInputLabel.focus();
            break
        case 'labelDateStep3':
            indexSelectMonthLabel.classList.add('focused');
            indexSelectMonth.focus();
            break
        

    }

}

// Step 4:

modalBackStepThree.addEventListener('click', backToStepThree);

function backToStepThree(){

    indexModalStepFourSection.classList.add('display__none');
    indexModalStepThreeSection.classList.remove('display__none');
}

indexNextStep4Button.addEventListener('click', goToStepFive);

function goToStepFive(){
    indexModalStepFiveSection.classList.remove('display__none');
    indexModalStepFourSection.classList.add('display__none');

}

// Step 5:

modalBackStepFour.addEventListener('click', backToStepFour);

function backToStepFour(){

    indexModalStepFiveSection.classList.add('display__none');
    indexModalStepFourSection.classList.remove('display__none');

    createTwitterPasswordInputStep5.value = '';

}

indexNextStep5Button.addEventListener('click', goToDetailsInfoTwitter);

function goToDetailsInfoTwitter(){

    userTwitterLogin.password = createTwitterPasswordInputStep5.value;

    // Push the new user into the data base
    usersTwitter.push(userTwitterLogin);
    userTwitterLogin = {};

    alert('Account Created')
    closeModal();


}


// Login

indexNextLoginButton.addEventListener('click', goToLoginPassword);

function goToLoginPassword(){

    if(loginTwitterInput.value.trim() == ''){
        userTwitterLogin = undefined;
        showMsgLogin();
        return 
    }
    
    userTwitterLogin = usersTwitter.find((user)=> {
        
        let inputLoginValue = loginTwitterInput.value.trim();
        let inputUserNameValue;
    
        const regexNumber = /^0\d*$/g;
        const regexUserName = /^@/g

        if(!isNaN(inputLoginValue) && inputLoginValue.length > 5){

            if(regexNumber.test(inputLoginValue)){
                inputLoginValue = `+58${inputLoginValue.slice(1,)}`;

            } else {
                inputLoginValue = `+58${inputLoginValue}`;
                
            }

        }

        if(!regexUserName.test(inputLoginValue)){
            inputUserNameValue = `@${inputLoginValue}`;
        } else {
            inputUserNameValue = inputLoginValue;
        }

        return user.email == inputLoginValue || user.phone == inputLoginValue || user.userName == inputUserNameValue;
    })

    if(userTwitterLogin == undefined){
        showMsgLogin();
        return
    } else {

        indexModalLoginUserSection.classList.add('display__none');
        indexModalPasswordLoginSection.classList.remove('display__none');

        if(userTwitterLogin.userName != undefined){
            indexUserNameLoginInput.value = userTwitterLogin.userName.slice(1,);
        }

    }

    function showMsgLogin(){
        messageModalUserLogin.classList.remove('display__none');

        setTimeout(()=> {
            messageModalUserLogin.classList.add('display__none');
        }, 5000)
    }
}

indexTwitterLogInButton.addEventListener('click', logInTwitter);

function logInTwitter(){

    if(userTwitterLogin.password != loginTwitterPasswordInput.value.trim()){

        messageModalUserPasswordLogin.classList.remove('display__none');

        setTimeout(()=> {
            messageModalUserPasswordLogin.classList.add('display__none');
        }, 5000)

        

    }
    alert('WELCOME TO TWITTER')
}

/*
    ////////////////////////////    STEP 1 /////////////////////////////////
*/

/*
    Span Events

*/

// Change the email or phone

indexChangePhoneOrEmailSpan.addEventListener('click', changeIndexInputEoP);

function changeIndexInputEoP(){

    if(indexChangePhoneOrEmailSpan.dataset.type === 'phone'){

        indexChangePhoneOrEmailSpan.dataset.type = 'email';
        indexEmailOrPhonePlaceholder.classList.add('leftTranslate');

        indexChangePhoneOrEmailSpan.innerHTML = 'Usar teléfono';
        indexEmailOrPhonePlaceholder.innerHTML = 'Correo electrónico';

        createTwitterEmailOrPhoneInput.type = 'text';

    } else if (indexChangePhoneOrEmailSpan.dataset.type === 'email'){

        indexChangePhoneOrEmailSpan.dataset.type = 'phone'
        indexEmailOrPhonePlaceholder.classList.remove('leftTranslate');

        indexChangePhoneOrEmailSpan.innerHTML = 'Usar Correo';
        indexEmailOrPhonePlaceholder.innerHTML = 'Teléfono';

        createTwitterEmailOrPhoneInput.type = 'number'

    }

}


/*
    Labels Events

*/

console.log(`All the inputs label: ${indexInputLabelAll}`)

indexInputLabelAll.forEach((label)=>{
    if(!label.classList.contains('index__inputLabel__step3')){
        label.addEventListener('click', focusLabel)
    }
});

function focusLabel(e){
    
    e.stopPropagation();
    e.preventDefault();

    resetInputIndexLabel();

    const labelElement = e.currentTarget;
    const input = labelElement.querySelector('.indexInput');
    
    if(
        !input.classList.contains('indexSelect__date') && 
        !labelElement.classList.contains('index__inputLabel__step3') && 
        !labelElement.classList.contains('index__loginUserName')
        ){
    
            input.focus();
            labelElement.classList.add('focused');
    }

}

/*
    Inputs
*/

indexInputAll.forEach((input)=>{
    input.addEventListener('change', toogleFilledContent)
    input.addEventListener('keyup', toogleFilledContent)
});

indexInputAllStep1.forEach((input)=>{
    input.addEventListener('change', enableButtonStep1)
    input.addEventListener('keyup', enableButtonStep1)
})

function enableButtonStep1(){

    let canBeEnable = indexInputAllStep1.every((input)=>{

        // let result = true;

        // Chacking for not value in inputs
        if(input.type == 'text' || input.type == 'number'){
            if(input.value.trim() == ''){
                return false;
            }
        }

        if(input.type =='number'){
            if(input.value.length < 5){
                return false
            }
        }
        
        if(input.classList.contains('indexSelect__date')){
            if(input.value == 'default'){
                return false;
            }
        }

        // Cheking for errors
        return !indexModalEmailOrPhoneInputLabel.classList.contains('error')


    });

    if(canBeEnable){
        indexNextStep1Button.disabled = false;
    } else {
        indexNextStep1Button.disabled = true;
    }

}

/*
    Selects
*/

// Arrow Span in Select 

// @@@@@@@@@@@@@@@@@@@@@@@@@ NOT WORKING  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@22
indexSelectArrow.addEventListener('click', activeSelect);

function activeSelect(e){

    e.stopPropagation();

    console.log('epaaaaaaa');

    const parentElem = e.currentTarget.parentNode;
    const actualSelect = parentElem.querySelector('select');
    console.log(actualSelect)
    actualSelect.click();
    // actualSelect.dispatchEvent(e);

}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// All Select

indexSelectsAll.forEach(select=>{
    select.addEventListener('click', focusLabelSelect);
})

function focusLabelSelect(e){

    e.stopPropagation();
    resetInputIndexLabel();

    const label = e.currentTarget.parentNode;

    label.classList.add('focused');

}

// Select

indexSelectMonth.addEventListener('change', changeDays);

function changeDays(){

    const monthSelect = indexSelectMonth.value;
    let maxDay;
    const dayValue = indexSelectDay.value;
    
    if(monthSelect == 'default'){
        maxDay = 31
    } else {
        maxDay = months[monthSelect].maxDay
    }
    
    indexSelectDay.innerHTML = '<option value="default" ></option>';
    
    for(let i = 1; i <= maxDay; i++){
        indexSelectDay.innerHTML += `<option value="${i}" > ${i} </option>`;
    }
    
    if(indexSelectDay.value > maxDay){
        indexSelectDay.value = 'default';
    } else {
        indexSelectDay.value = dayValue;
    }
}


/*
    Error notifications
*/

//Input Name Index

createTwitterNameInput.addEventListener('keyup', showNameError);
let fillInputName = false;

function showNameError(){

    const errorMsgTwitter = errorMessageTwitter.createAccount;

    if(createTwitterNameInput.value != ''){
        fillInputName = true;
    }

    if(fillInputName && createTwitterNameInput.value == ''){
        indexModalNameInputLabel.classList.add('error');
        error__NameInputIndex.classList.add('active');
        error__NameInputIndex.innerHTML = errorMsgTwitter.name.empty;
    }

}

createTwitterEmailOrPhoneInput.addEventListener('keyup', showEoPError );

let timeOutError;

function showEoPError(){
    
    let result;
    
    if(timeOutError != undefined) clearTimeout(timeOutError);



    if(createTwitterEmailOrPhoneInput.value.trim() != ''){
        
        if(indexChangePhoneOrEmailSpan.dataset.type == 'phone'){
            timeOutError = setTimeout(()=> {
                
                result = verifationPhoneNumberError({
                    section: 'createTwitter', 
                    input: createTwitterEmailOrPhoneInput,
                    inputError: indexModalEmailOrPhoneInputLabel,
                    modal: error__EoPInputIndex
                })

                enableButtonStep1();

    
            }, 500)
            
        } else

        if(indexChangePhoneOrEmailSpan.dataset.type == 'email'){
            timeOutError = setTimeout(()=> {
                
                result = verificationOtherEmailError({
                    section: 'createTwitter', 
                    input: createTwitterEmailOrPhoneInput,
                    inputError: indexModalEmailOrPhoneInputLabel,
                    modal: error__EoPInputIndex
                })

                enableButtonStep1();
    
            }, 500)
        }

        if(!result){
            indexModalEmailOrPhoneInputLabel.classList.remove('error');
            error__EoPInputIndex.classList.remove('active');

        }

    } else {
        indexModalEmailOrPhoneInputLabel.classList.remove('error');
        error__EoPInputIndex.classList.remove('active');

    }
}


/*
    ////////////////////////////    STEP 2 /////////////////////////////////
*/

animateCheckBox(indexStepTwoCheckbox.checked, indexStepTwoCheckbox)

indexStepTwoCheckbox.addEventListener('click', ()=> { animateCheckBox(indexStepTwoCheckbox.checked, indexStepTwoCheckbox) } );


/*
    ////////////////////////////    STEP 3 /////////////////////////////////
*/

indexShowPasswordEyeAll.forEach((eye)=>{
    eye.addEventListener('click', tooglePasswordVisibility);

})

function tooglePasswordVisibility(e){

    let wrapperEye = e.currentTarget;
    let parentWrapper = wrapperEye.parentNode;

    console.log(wrapperEye)

    let openEye = wrapperEye.querySelector('.open__eye'); 
    let closeEye = wrapperEye.querySelector('.close__eye'); 
    let input = parentWrapper.querySelector('input');

    if(wrapperEye.dataset.show == 'false'){

        wrapperEye.dataset.show = 'true';
        openEye.classList.add('display__none');
        closeEye.classList.remove('display__none');

        input.type = 'text';

    } else if (wrapperEye.dataset.show == 'true'){

        wrapperEye.dataset.show = 'false';
        openEye.classList.remove('display__none');
        closeEye.classList.add('display__none');

        input.type = 'password';

    }

}

/*
    ////////////////////////////    STEP 5 /////////////////////////////////
*/


createTwitterPasswordInputStep5.addEventListener('keyup', showErrorPasswordStep5);

function showErrorPasswordStep5(){

    let error;
    const passwordValue = createTwitterPasswordInputStep5.value.trim();
    const errorMsg = errorMessageTwitter.createAccount.password;
    
    if(timeOutError != undefined) clearTimeout(timeOutError);

    if( passwordValue != ''){
        
        timeOutError = setTimeout(()=> {

            
            error = verificationPassword(passwordValue)
            
            if(!error){
                indexModalPasswordInputLabel.classList.remove('error');
                error__PasswordInputIndex.classList.remove('active');

                indexNextStep5Button.disabled = false;
    
            } else {

                indexModalPasswordInputLabel.classList.add('error');
                error__PasswordInputIndex.classList.add('active');

                error__PasswordInputIndex.innerHTML = errorMsg.invalidInput;
                indexNextStep5Button.disabled = true;
            }
        }, 500)


    } else {
        indexModalPasswordInputLabel.classList.remove('error');
        error__PasswordInputIndex.classList.remove('active');
        indexNextStep5Button.disabled = true;
    }

}

function verificationPassword(password){

    if(password.length < 8){
        return true
    }

    return false
}


