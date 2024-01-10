/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const sorted = [...arr];

    switch (param) {
        case 'asc':
            return sorted.sort((str, str2) => str.localeCompare(str2, 'ru-RU', { caseFirst: 'upper' }));
        case 'desc':
            return sorted.sort((str, str2) => str2.localeCompare(str, { caseFirst: 'upper' }));
    }
}
