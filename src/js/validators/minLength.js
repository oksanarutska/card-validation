export const minLength = min => {

    return {
        validate: value => {
            return {
                error: value.length < min,
                message: '*Поле не полное'
            }
        }
    }
}
