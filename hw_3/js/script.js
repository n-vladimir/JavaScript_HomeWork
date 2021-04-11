// ----------task 1 Создать функцию - конструктор,
// которая будет иметь внутри все свойства обьекта emplyee
// из массива emplyeeArr;
class Emplyee {
    constructor({id, name, surname, salary, workExperience, isPrivileges, gender}) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.workExperience = workExperience;
        this.isPrivileges = isPrivileges;
        this.gender = gender;

    }
    get fullInfo() {
        return `id: ${this.id} name: ${this.name} surname: ${this.surname}`
    }
    set fullInfo({name, salary}) {
        this.name = name;
        this.salary = salary
    }
}
const employeeObj = new Emplyee(emplyeeArr[0]);
console.log(employeeObj);

// ----------task 2
// Добавить функции - конструктору метод (помним про prototype):
// getFullName который вернет полное имя начиная с фамилии в виде
// строки
Emplyee.prototype.getFullName = function () {
        return this.surname + ' ' + this.name;
};
console.log(employeeObj.getFullName());

// ----------task 3
// Создать новый массив на основе emplyeeArr в котором будут
// содержаться те же обьекты, но созданные функцией - конструктором
// Emploee. Новый массив должен содержать имя emplyeeConstructArr.
let createEmployesFromArr = (arr) => {
    return arr
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr);

// ----------task 4
// Создать функцию которая вернет массив со всеми полными именами
// каждого employee, содержащегося в emplyeeConstructArr;
const getFullNamesFromArr = (arr) => {
    let newArrName = [];
    for (let key in arr) {
        newArrName[newArrName.length] = arr[key].name + ' ' + arr[key].surname
    }
    return newArrName;
};
console.log(getFullNamesFromArr(emplyeeConstructArr));

// ----------task 5
// Создать функцию которая вернет среднее значение зарплаты всех employee
const getMiddleSalary = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].salary;
    }
    let middleSal =  sum / arr.length;
    if ((middleSal ^ 0) !== middleSal) {
        return middleSal | 0;
    } else if ((middleSal ^ 0) === middleSal) {
        return middleSal;
    }
};
console.log(getMiddleSalary(emplyeeConstructArr));

// ----------task 6
// Создать функцию которая выберет наугад работника из массива
// emplyeeConstructArr. Вы должны учитывать в функции длинну массива,
// так как если работников 7, а рандомное число будет равно больше 7,
// то результат будет undefined. Вы можете использовать обьявленную
// функцию в сомой же себе. Подсказка Math.random
const getRandomEmployee = (arr) => {
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let countRandom = getRandom(0, (arr.length -1));
    return arr[countRandom];

};
console.log(getRandomEmployee(emplyeeConstructArr));

// ----------task 7
const employeeObj2 = new Emplyee(emplyeeArr[0]);
console.log(employeeObj2);


console.log('6*: ' + employeeObj2.fullInfo);

employeeObj2.fullInfo = {name: 'Vova', salary: 9011, email: 'ghost@gmail.com',};
console.log(employeeObj2);