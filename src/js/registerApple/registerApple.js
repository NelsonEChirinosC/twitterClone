
/*
    Global 
*/

window.onload = ()=>{
    mainInputLabelWrapper.classList.add('focused');
    firstInput.classList.add('focused');
    appleIdInput.focus();
}

body.addEventListener('click', resetConfig);

function resetConfig(e){

    if(!e.currentTarget.classList.contains('firstInput')){
        mainInputLabelWrapper.classList.remove('focused');
        firstInput.classList.remove('focused');
    }
    
    if(!e.currentTarget.classList.contains('secondInput')){
        mainInputLabelWrapper2.classList.remove('focused');
        secondInput.classList.remove('focused');
    }

}

/*
    Header Secition
*/ 

headerAppleIDShowSesionButton.addEventListener('click', showInfo);

function showInfo(){

    if(!principalHeaderAppleIDDiv.classList.contains('show')){
        principalHeaderAppleIDDiv.classList.add('show');
        wrapperOnDiv.classList.add('show');

        setTimeout(()=>{
            headerAppleIDInfo.classList.add('show');
        }, 500);
        
        setTimeout(()=> {
            wrapperOnDiv.classList.add('opacity');
        },10)

    } else {

        headerAppleIDInfo.classList.remove('show');
        wrapperOnDiv.classList.remove('opacity');

        setTimeout(()=>{
            principalHeaderAppleIDDiv.classList.remove('show');
        }, 500);

        setTimeout(()=>{
            wrapperOnDiv.classList.remove('show');
        }, 1000);
    }
}


/*

    Main Section

*/

appleIdInput.addEventListener('click', showFocusChange);
applePasswordInput.addEventListener('click', showFocusChange);


function showFocusChange(e){

    e.stopPropagation();

    console.log(e.currentTarget.parentNode);
    const parentNode = e.currentTarget.parentNode;

    parentNode.classList.add('focused');
    parentNode.querySelector('.insiderInput').classList.add('focused');

    if(parentNode.classList.contains('firstInput')){
        mainInputLabelWrapper2.classList.remove('focused');
        secondInput.classList.remove('focused');
    } else if (parentNode.classList.contains('secondInput')){
        mainInputLabelWrapper.classList.remove('focused');
        firstInput.classList.remove('focused');
    }

}

appleInputsAll.forEach((input) => {
    input.addEventListener('change', addFilledContent);
    input.addEventListener('keyup', addFilledContent);
});

function addFilledContent(e){

    e.stopPropagation();

    const element = e.currentTarget;

    if(element.id == 'appleIdInput'){

        if(element.value.trim() == ''){
            firstInput.classList.remove('filledContent');
            buttonNextId.disabled = true;

            // Reset the password input
            mainInputLabelWrapper2.classList.add('display__none');
            mainInputForm.classList.remove('showPassword');
            buttonNextId.classList.remove('display__none');
            mainInputLabelWrapper2.classList.remove('focused');
            secondInput.classList.remove('focused');

        } else {
            firstInput.classList.add('filledContent');
            buttonNextId.disabled = false;
        }

    }

    if(element.id == 'applePasswordInput'){

        if(element.value.trim() == ''){
            secondInput.classList.remove('filledContent');
            buttonNextPassword.disabled = true;
        } else {
            secondInput.classList.add('filledContent');
            buttonNextPassword.disabled = false;
        }

    }
    

}

buttonNextId.addEventListener('click', toPasswordInput);

function toPasswordInput(e){

    e.stopPropagation();
    mainInputLabelWrapper2.classList.remove('display__none');
    mainInputForm.classList.add('showPassword');


    mainInputLabelWrapper2.classList.add('focused');
    secondInput.classList.add('focused');
    mainInputLabelWrapper.classList.remove('focused');
    firstInput.classList.remove('focused');

    buttonNextId.classList.add('display__none');

    setTimeout(()=> {applePasswordInput.focus();}, 1000);

}