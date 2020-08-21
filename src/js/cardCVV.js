import Inputmask from "inputmask";

export function cardCVV() {
    let cardCVV = document.querySelector("#card-cvv");
    Inputmask({
        "mask": "999",
        placeholder:""
    }).mask(cardCVV);
}