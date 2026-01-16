
function generatePass(length ,uppercase, lowercase ,symbols,numbers){

    const lowercaseChar = "abcdefghijklmnoprstuvwxyz" ;
    const uppercaseChar = "ABCDEFGHIJKLMNOPQSTUVWXYZ" ;
    const symbolsChar = "!@#$%&*(){}_+-=" ;
    const numberChar = "0123456789";

    let allowChar = "" ;
    let pass = "" ;
    allowChar += lowercase ? lowercaseChar:"";
    allowChar += uppercase ? uppercaseChar:"";
    allowChar += symbols ? symbolsChar:"";
    allowChar += numbers ? numberChar:"";
    

    if(length<=0){
        return " password length must be atleast 1 character "
    }
    if(allowChar.length === 0){
        return " select atleast 1 set of characters"
    }

    for(let i = 0 ;i<length ; i++){
        const randomIndx = Math.floor(Math.random()*allowChar.length) ;
        pass += allowChar[randomIndx] ;
    }


    return pass;
}


const passLength = 12 ;
const uppercase = true ;
const lowercase = true ;
const symbols = true ;
const numbers = true ;

const password = generatePass(passLength,
                            uppercase,
                            lowercase,
                            symbols,
                            numbers) ;
console.log(`Generated Password : ${password}`) ;


