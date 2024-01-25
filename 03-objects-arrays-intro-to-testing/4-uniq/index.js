/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export const uniq = (arr) => {
    const set = new Set(arr);
    const uniqArray = [...set];

    return uniqArray;
}
