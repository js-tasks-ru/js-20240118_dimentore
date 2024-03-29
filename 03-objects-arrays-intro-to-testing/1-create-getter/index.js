/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export const createGetter = (path) => {
    const properties = path.split('.');

    return function(object) {
        let value = object;

        for (let property of properties) {
            value = value[property];

            if (value === undefined) {
                return;
            }
        }

        return value;
    }
};
