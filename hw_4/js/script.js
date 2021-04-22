//------------------1
class Student {
    constructor(enrollee) {
        this.id = Student.id++;
        this.name = enrollee['name'];
        this.surname = enrollee['surname'];
        this.ratingPoint = enrollee['ratingPoint'];
        this.schoolPoint = enrollee['schoolPoint'];
        this.isSelfPayment = null;
        Student.listOfStudents.push(this);
        this.studentList();
        this.selfPayment();
    }
    static id = 1;
    static listOfStudents = [];

    studentList() {
        Student.listOfStudents.sort(function (a,b) {
            return(b['ratingPoint'] - a['ratingPoint'] || b['schoolPoint'] - a['schoolPoint'])
        })
    };
    selfPayment() {
        for(let key in Student.listOfStudents) {
            if (key < 5 && Student.listOfStudents[key].ratingPoint >= 800) {
                Student.listOfStudents[key].isSelfPayment = false;
            } else {
                Student.listOfStudents[key].isSelfPayment = true;
            }}

    }

}
new Student({
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
})
new Student( {
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1061,
    course: 2,
})
new Student({
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 1131,
    schoolPoint: 200,
    course: 3,
},)
new Student({
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},)
new Student({
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},)
new Student({
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},)
new Student({
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},)
new Student({
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 1150,
    schoolPoint: 1500,
    course: 3,
},)

console.log(Student.listOfStudents);

//-------------------2
class CustomString {
    constructor() {

    }
    reverse (string) {
        // if (isNaN(string) == true) {
        if ((typeof string) == 'string') {
                let str = ''
                for(let i = string.length - 1; i >= 0; i--){
                    str +=string[i]
                }
                return str
            } else {
            console.warn('Значения должно быть строкой')
        }
    }
    ucFirst (string) {
       if (isNaN(string) == true) {
           let str = ''
           for(let i = 0; i < 1; i++) {
               str += string[i].toUpperCase()
           }
           for(let i = 1; i < string.length; i++) {
               str += string[i]
           }
           return str
       }  else {
           console.warn('Значения должно быть строкой')
       }
    }
    ucWords (string) {
        if (isNaN(string) == true) {
            let str = '';
            let arr = string.split(' ');
            for(let value of arr) {
            for(let i = 0; i < value.length; i++) {
                if (i == 0) {
                    str += ' ' + value[i].toUpperCase();
                    continue;
                }
                str += value[i]
            }
            }
            return str
        }  else {
            console.warn('Значение должно быть строкой')
        }
    }


}
let myString = new CustomString();

console.log(myString.reverse('Hello'))
console.log(myString.reverse(3333))
console.log(myString.ucFirst('vasya'))
console.log(myString.ucWords('vasya hello string upper'))

//-------------3

class Validator {
    constructor() {
        this.checkIsEmail;
        this.checkIsDomain;
        this.checkIsDate;
        this.checkIsPhone;

    }
    checkIsEmail(str) {
        let arr = str.split('@')
        if(arr.length !== 2) return false
        if(arr[0].length < 3) return false
        if(arr[1].length < 3) return false
        return true;
    }
    checkIsDomain(str) {
        let arr = str.split('.')
        let domain = arr[arr.length - 1]
        if(domain !== 'com') return false
        return true
    }
    checkIsDate(str) {
        let arr = str.split('.')
        let age = new Date().getFullYear() - arr[arr.length - 1];
        if(arr.length !== 3) return false
        if(arr[0] > 31 || arr[0] < 1) return false
        if(arr[1] > 12 || arr[1] < 1) return false
        if(age > 100 || age <= -1) return false
        return true
    }
    checkIsPhone(str) {
        let arr = str.split(' ')
        let arrNum = arr[2].split('-')
        if(arr[0] !== '+38') return false
        if(arr[1].length !== 5) return false
        if(arr[2].length !== 9) return false
        if(arrNum.length !== 3) return false
        return true
    }
}

let validator = new Validator();

console.log(validator.checkIsEmail('vasya.pupkin@gmail.com')); // true
console.log(validator.checkIsDomain('google.com')); // true
console.log(validator.checkIsDate('10.01.2021')); // true
console.log(validator.checkIsPhone('+38 (066) 937-99-92')); // если код страны Украинский










