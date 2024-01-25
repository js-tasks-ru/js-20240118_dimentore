/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export const createGetter = (path) => {
    return getter = (object) => {
        let value = object;
        const properties = path.split('.');

        for (let property of properties) {
            value = value[property];

            if (value === undefined) {
                return undefined;
            }
        }

        return value;
    }
};
