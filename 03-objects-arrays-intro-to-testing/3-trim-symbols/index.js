/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export const trimSymbols = (string, size) => {
    let result = '';
    let currentChars = '';

    if (size === undefined) {
        return string;
    }

    for (let index = 0; index < string.length; index++) {
        let currentChar = (string[index] === currentChars[0] ? currentChars : '')

        currentChars = string[index] + currentChar;

        if (currentChars.length <= size) {
            result += string[index]
        }
    }

    return result;
}
