import Inputmask from "inputmask";

export function cardDate() {
    let cardDate = document.querySelector("#card-date");
    Inputmask({
        alias: 'datetime',
        autoUnmask: true,
        clearMaskOnLostFocus: true,
        inputFormat: 'mm/yy',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        min: "09/20",
        max: "08/40"
    }).mask(cardDate);
 
}
