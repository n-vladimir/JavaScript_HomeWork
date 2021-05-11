//------------------------------1

const searchCandidatesByPhoneNumber = (phone) => {
    const clearNumber = (phoneString) => phoneString.replace(/\D+/g,"");
    const phoneSearch = clearNumber(phone);
    return condidateArr.filter((item) =>  clearNumber(item.phone).indexOf(phoneSearch) !== -1);
}
console.log(searchCandidatesByPhoneNumber('43'));
// [Candidate, Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
/// [Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber('43'));
/// [Candidate, Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82'));
// /// [Candidate]

//--------------------------------2
const getCandidateById = (id) => {
    const userById = condidateArr.find(item => item._id === id);
    const dateParsed = new Date(String(userById.registered).substring(0, 10));
    const year = dateParsed.getFullYear();
    const month = dateParsed.getMonth() + 1; // 4 (note zero index: Jan = 0, Dec = 11)
    const day = dateParsed.getDate();
    userById.registered = `${day}/${month}/${year}`;
    return userById
}

console.log(getCandidateById('5e216bc9a6059760578aefa4'));
// {
//    _id: '5e216bc9a6059760578aefa4',
//    name: 'Bernice Walton',
//    registred: '05/11/2015',
//    ... other properties in candidate
// }

//--------------------------------------3
// Написать функцию которая будет сортировать массив canidatesArr
// по количеству денег лежащих на балансе (смотрим свойство balance)
// в том порядке, в котором ей укажут в аргементе sortBy.
// Если параметр не был передан, то вернет массив в первоначальном состоянии.

const SORT_TYPE_DESC = 'desc';
const SORT_TYPE_ASC = 'asc';

const sortCandidatesArr = (sortBy = '') => {
    if (!sortBy) {
        return condidateArr;
    }
    const parseBalance = (balanceStr) => Number(String(balanceStr).slice(1).replace(/,/g, ''));
    return [...condidateArr].sort((a, b) => {              //---------------- sort изменяет изначальный массив
        const balanceA = parseBalance(a.balance);
        const balanceB = parseBalance(b.balance);
        return sortBy === SORT_TYPE_ASC ? balanceA - balanceB : balanceB - balanceA;
    });

   // const newArrCandidates = condidateArr.map(item => ({ ...item }));  // отвязка от ссылки

}

console.log(sortCandidatesArr(SORT_TYPE_ASC), sortCandidatesArr(SORT_TYPE_DESC), sortCandidatesArr());
// отсортирует по-возростанию и вернет отсортированный массив

sortCandidatesArr(SORT_TYPE_DESC)
// отсортирует по-убыванию и вернет отсортированный массив

sortCandidatesArr()
// не будет сортировать, а просто вернет первоначальный массив

//-------------------------------------------4

// new Set([1, 1]);  ----TODO

const sortedByField = (fieldName) => { // eyeColor / gender / company и т.д.
    const result = {};
    const ifNotExistsCreate = (property) => { // property - blue / brown / green | female \ male , и т.д.
        if (!result[property]) {
            result[property] = [];
        }
    }
    for (const candidate of condidateArr) {
        ifNotExistsCreate(candidate[fieldName]); // создать ключ для result если такого еще нет (blue / brown / green) и т.д.
        result[candidate[fieldName]].push(candidate); // добавить кандидата
    }
    return result;
}
console.log(sortedByField('eyeColor'), sortedByField('gender'), sortedByField('company'))