//------------1
let Employee = function (obj) {
    for(let key in obj) {
        this[key] = obj[key]
    }

    //-----------------7

    Object.defineProperty(this, 'fullInfo', {
        get: function () {
            let res = '';
            for (let key in obj) {
                res += `${key} ${obj[key]}, `
            }
            return res;
        },
        set: function () {
            for (let key in obj) {
                if (key in this) {
                    this[key] = obj[key]
                }
            }
        }
    })
}

let employee = new Employee(emplyeeArr[0]);
console.log(employee);
console.log('6*: ' + employee.fullInfo);

employee.fullInfo = {name: 'Vova', salary: 9011, email: 'ghost@gmail.com',};
console.log(employee);

//------------2

Employee.prototype.getFullName = function () {
    return `${this.name} ${this.surname}`
}
console.log(employee.getFullName())

//-----------3
const createEmployesFromArr2 = (arr) => {
    let arrAllEmployee = [];
    for(let value of arr) {
        arrAllEmployee[arrAllEmployee.length] = new Employee(value)
    }
    return arrAllEmployee;
}
const emplyeeConstructorArr2 = createEmployesFromArr(emplyeeArr)
console.log(emplyeeConstructorArr2)

//------------4
const getFullNamesFromArr2 = (arr) => {
    let arrFullNames = [];
    for(let key of arr) {
        arrFullNames[arrFullNames.length] = key.getFullName();
    }
    return arrFullNames
}
console.log(getFullNamesFromArr2(emplyeeConstructorArr2));

//-----------------5

const getMiddleSalary2 = (arr) => {
    let sum = 0;
    for(let key in arr) {
        sum += arr[key].salary
    }
    let middleSal =  sum / arr.length;
    if ((middleSal ^ 0) !== middleSal) {
        return middleSal | 0;
    } else if ((middleSal ^ 0) === middleSal) {
        return middleSal;
    }
}
console.log(getMiddleSalary2(emplyeeConstructorArr2));

//------------------6

const getRandomEmployee2 = (arr) => {
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let countRandom = getRandom(0, (arr.length -1));
    return arr[countRandom];

};
console.log(getRandomEmployee2(emplyeeConstructArr));




