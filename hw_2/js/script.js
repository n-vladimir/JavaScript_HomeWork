// 1
// Дан объект с городами и странами.
// Вывести масив значения в котором будут строки преобразованные
// в данный формат: <Столица> - это <Страна>.
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};
const result = [];
for (let key in citiesAndCountries) {
    const item = key +' - это ' + citiesAndCountries[key];
    result.push(item);
}
console.log(result);
// const result = ['Киев - это Украина', 'Нью-Йорк - это США', ... и т.д.]
//----------------------------2
// Создать функцию которая выведет многомерный массив A.
// Данный массив содержит в себе список других массивов B.
// Массивы B должны содержать по 3 значения.
// Максимальное значение (в примере это переменная amount)
// должно делится на 3 нацело.
//

function getArray(amount){
    amount = prompt('Введите число кратное 3: ');
    let arrUnit = [];
    let arrUnitItem = [];

    if (amount % 3 != 0) {
         return getArray(amount);
    } else {
        for (let i = 1; i <= amount; i++) {
            if(i % 3 == 0) {
                arrUnitItem.push(i);
                arrUnit.push(arrUnitItem);
                arrUnitItem = [];
            } else {
                arrUnitItem.push(i)
            }
        }
        return console.log(arrUnit)
    }
}
getArray();

// ------------------------------3
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',  'Sunday'],
};
function getNameOfDay(lang, day) {
    return console.log(namesOfDays[lang][--day]);
}
getNameOfDay('ru', 7);

// ------------------------------4
let arr = [10, 800, 3453000, 8010, -11, 11.11, 'nnn'];

function minNumArr(arr) {
    let newArr = [],
        minOne = Infinity,
        minTwo = Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0 && (arr[i] ^ 0) == arr[i]) {
            newArr.push(arr[i])
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i] < minOne) {
            minTwo = minOne;
            minOne = newArr[i];
        } else if (newArr[i] < minTwo) {
            minTwo = newArr[i];
        }
    }
    return console.log(minOne + minTwo);
}
minNumArr(arr);

//-----------------5
function binaryNum(arr) {
    let num = arr.length - 1,
        sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]*Math.pow(2, num);
        num--;
    }
    console.log('Testing: [' + arr + '] ==> ' + sum)
}
binaryNum([0, 0, 0, 1])
binaryNum([0, 0, 1, 0])
binaryNum([0, 1, 0, 1])
binaryNum([0, 1, 1, 0])
binaryNum([1, 1, 1, 1])
binaryNum([1, 0, 0, 1])
binaryNum([0, 0, 1, 0])
binaryNum([1, 0, 1, 1])

binaryNum([1, 0, 0, 0, 1])
binaryNum([1, 0, 0, 1, 0])
binaryNum([1, 0, 1, 0, 1])
binaryNum([1, 1, 1, 1, 0, 1])