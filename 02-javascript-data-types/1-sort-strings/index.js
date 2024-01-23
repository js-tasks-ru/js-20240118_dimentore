/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const locales = ['ru', 'en'];
const collatorAsc = new Intl.Collator(locales, { caseFirst: 'upper' });
const collatorDesc = new Intl.Collator(locales, { caseFirst: 'lower' });

const sortAsc = (str, str2) => collatorAsc.compare(str, str2);
const sortDesc = (str, str2) => collatorDesc.compare(str2, str);

export function sortStrings(arr, param = 'asc') {
    const copied = [...arr];

    return copied.sort(param === 'desc' ? sortDesc : sortAsc);
}
