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

let userTwitter = {};

body.addEventListener('click', resetConfig)

function resetConfig(e){

    resetInputIndexLabel();
    resetInputValue();
    
}

function resetInputValue(){

    indexInputAll.forEach(input => {
        if(input.value.trim() == ''){
            input.value = '';
        }
    })


}

function resetInputIndexLabel(){
    indexInputLabelAll.forEach((label) =>{
        label.classList.remove('focused');
    });
}

/* 
    Navigations Buttons
*/

googleButtonIndex.addEventListener('click', openGoogleRegister);

function openGoogleRegister(){
    window.open("./page/registerGoogle.html", "", "width=502px, height=550px")
}

appleButtonIndex.addEventListener('click', openAppleRegister);

function openAppleRegister(){
    window.open('./page/registerApple.html',"","width=700px,height=707px");
}

buttonCreateTwitterIndex.addEventListener('click', openModalCreateTwitter);

function openModalCreateTwitter(){

    body.classList.add('overFlowHidden');
    wrapperBlack.classList.remove('display__none');
    modalPopUpIndex.classList.remove('display__none');

}

modalPopUpCloseModal.addEventListener('click', closeModal);

function closeModal(){

    body.classList.remove('overFlowHidden');
    wrapperBlack.classList.add('display__none');
    modalPopUpIndex.classList.add('display__none');

}


indexNextStep1Button.addEventListener('click', goToStepTwo);

function goToStepTwo(){

    userTwitter.name = createTwitterNameInput.value.trim();
    if(indexChangePhoneOrEmailSpan.dataset.type == 'phone'){
        userTwitter.phone = createTwitterEmailOrPhoneInput.value;
    }

    if(indexChangePhoneOrEmailSpan.dataset.type == 'email'){
        userTwitter.email = createTwitterEmailOrPhoneInput.value.trim();
    }

    userTwitter.dateOfBirth = {
        day: indexSelectDay.value,
        month: indexSelectMonth.value,
        year: indexSelectYear.value,
    }

    indexModalStepOneSection.classList.add('display__none');
    indexModalStepTwoSection.classList.remove('display__none');
    
}

modalGoStepOne.addEventListener('click', goToStepOne);

function goToStepOne(){

    indexModalStepOneSection.classList.remove('display__none');
    indexModalStepTwoSection.classList.add('display__none');
    
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
    console.log({label})
    label.addEventListener('click', focusLabel)
});

function focusLabel(e){
    
    e.stopPropagation();
    e.preventDefault();

    resetInputIndexLabel();

    const labelElement = e.currentTarget;
    const input = labelElement.querySelector('.indexInput');
    
    if(!input.classList.contains('indexSelect__date')){
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
    input.addEventListener('change', enableButton)
    input.addEventListener('keyup', enableButton)
})

function enableButton(){

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
        return indexInputLabelAll.every(label=> {
            return !label.classList.contains('error');
        });


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

indexSelectArrow.addEventListener('click', activeSelect);

function activeSelect(e){

    const parentElem = e.currentTarget.parentNode;
    const actualSelect = parentElem.querySelector('select');

    actualSelect.click();

}

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

    if(monthSelect == 'default'){
        maxDay = 31
    } else {
        maxDay = months[monthSelect].maxDay
    }
    
    if(indexSelectDay.value == 'default' || indexSelectDay.value > maxDay){
        indexSelectDay.innerHTML = '<option value="default" ></option>';
        indexSelectDay.value = 'default';
    
        for(let i = 1; i <= maxDay; i++){
            indexSelectDay.innerHTML += `<option value="${i}" > ${i} </option>`;
        }
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

                enableButton();
    
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

                enableButton();
    
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

indexStepTwoCheckbox.addEventListener('click', ()=> { animateCheckBox(indexStepTwoCheckbox.checked, indexStepTwoCheckbox) } );

