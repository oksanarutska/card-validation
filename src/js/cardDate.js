import Inputmask from "inputmask";
import moment from "moment";

export function cardDate() {
    let cardDate = document.querySelector("#card-date");
    Inputmask({
        alias: 'datetime',
        autoUnmask: true,
        clearMaskOnLostFocus: true,
        inputFormat: 'mm/yy',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        min: moment().add(1, 'M').format('MM/YY'),
        max: moment().add(20, 'Y').format('MM/YY')
    }).mask(cardDate);
 
}
