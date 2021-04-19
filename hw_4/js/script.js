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











