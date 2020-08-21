import Inputmask from "inputmask";

export function cardNumber() {

    let cardNumber = document.querySelector("#card-number");
    let visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    let mastercard = /^(?:5[1-5][0-9]{14})$/;
    let cardImg = document.querySelector(".card-type");


    Inputmask({"mask":"9999 9999 9999 9999"}).mask(cardNumber);

    cardNumber.addEventListener('input',()=>{
        if(visa.test(cardNumber.inputmask.unmaskedvalue())){
            cardImg.src = './images/visa.svg'
        }
        else if(mastercard.test(cardNumber.inputmask.unmaskedvalue())){
            cardImg.src = './images/Bitmap.svg'
        }
        else {
            cardImg.src = ''
        }
    })


}