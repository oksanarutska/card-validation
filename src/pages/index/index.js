import Inputmask from "inputmask";
import {
    required
} from '../../js/validators/required';
import {
    cardNumber
} from '../../js/cardNumber';
import {
    cardDate
} from '../../js/cardDate';
import {
    cardCVV
} from '../../js/cardCVV';
import {
    Moon,
    moon
} from '../../js/validators/moon';
import {
    minLength
} from "../../js/validators/minLength";


window.addEventListener('load', () => {
    let loader = document.querySelector(".loader-wrapper");
    let submitButton = document.querySelector('.button-submit');

    submitButton.addEventListener('click', () => {
        const hasErrors = validateForm();

        if (hasErrors) {
            return;
        }
        
        loader.classList.add("active");
        setTimeout(() => {
            loader.classList.remove("active");
            setTimeout(() => {
                alert("Спасибо!")
            }, 300)
        }, 2000)

    });

    cardNumber();
    cardDate();
    cardCVV();
})

function validateForm() {
    let $fields = [...document.querySelectorAll('.form')];
    let $cardNumber = document.querySelector("#card-number");
    let $cardCVV = document.querySelector("#card-cvv");
    let $cardDate = document.querySelector("#card-date");

    const cardValue = $cardNumber.inputmask.unmaskedvalue();
    const cardCvv = $cardCVV.inputmask.unmaskedvalue();
    const cardDate = $cardDate.inputmask.unmaskedvalue()
        //unmasking is not working....
        .replace(/[ym]/g, '')

    let cardError = [required, minLength(16), moon]
        .map(x => x.validate(cardValue))
        .find(x => x.error)

    let cvvError = [required, minLength(3)]
        .map(x => x.validate(cardCvv))
        .find(x => x.error)

    let dateError = [required, minLength(5)]
        .map(x => x.validate(cardDate))
        .find(x => x.error)

    if (cardError) {
        addError($cardNumber.parentElement, cardError)
    } else {
        removeError($cardNumber.parentElement);
    }

    if (cvvError) {
        addError($cardCVV.parentElement, cvvError)
    } else {
        removeError($cardCVV.parentElement)
    }
    if (dateError) {
        addError($cardDate.parentElement, dateError)
    } else {
        removeError($cardDate.parentElement)
    }

    return dateError || cvvError || cardError;
}

function addError(field, error) {
    field.classList.add("error");
    field.querySelector(".error-message").innerHTML = error.message;
}

function removeError(field) {
    field.classList.remove("error");
    field.querySelector(".error-message").innerHTML = '';
}