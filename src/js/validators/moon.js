export const moon = {
    validate: value => {
        let sum = 0;

        for (let i = 0; i < value.length; i++) {
            let cardNum = parseInt(value[i]);

            if ((value.length - i) % 2 === 0) {
                cardNum = cardNum * 2;

                if (cardNum > 9) {
                    cardNum = cardNum - 9;
                }
            }

            sum += cardNum;
        }

        return {
            error: sum % 10 !== 0,
            message: "*Неверный номер"
        };
    }
}