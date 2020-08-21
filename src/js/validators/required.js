export let required = {
        validate: value => {
                return {
                        error: !value,
                        message: '*Обязательное поле'
                };
        }
}