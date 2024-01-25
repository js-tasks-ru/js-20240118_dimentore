/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export const invertObj = (obj) => {
    const invertObject = {};

    if (!obj) {
        return undefined;
    }

    Object.entries(obj).forEach(([key, value]) => {
        invertObject[value] = key
    });

    return invertObject;
}
