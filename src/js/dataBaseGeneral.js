const actualDate = new Date();
const actualYear = actualDate.getFullYear();
const isLeapYear = false;

if(actualYear % 4 == 0 && actualYear % 100 != 0 && actualYear % 400 == 0){
    isLeapYear = true;
}

const months = {
    january:{
        maxDay: 31
    },
    february:{
        maxDay: isLeapYear ? 29 : 28
    },
    march:{
        maxDay: 31
    },
    april:{
        maxDay: 30
    },
    may:{
        maxDay: 31
    },
    june:{
        maxDay: 31
    },
    july:{
        maxDay: 31
    },
    august:{
        maxDay: 31
    },
    september:{
        maxDay: 30
    },
    october:{
        maxDay: 31
    },
    november:{
        maxDay: 30
    },
    december:{
        maxDay: 31
    },
    default:{
        maxDay: null
    }
}
