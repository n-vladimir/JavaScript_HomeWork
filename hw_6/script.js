//-------------1
const removeUser = (nameArr, numUser) => nameArr.splice(numUser, 1);

const arr = ['Vasya', 'Petya', 'Alexey'];
removeUser(arr, 1);
console.log(arr); // ['Vasya', 'Alexey']

//------------2
const getAllKeys = nameObj => Object.keys(nameObj);

const obj = { name: 'Vasya', age: 1, id: 0,};
console.log(getAllKeys(obj)); // ["name", "age"]

//-----------3
const getAllValues = nameObj => Object.values(nameObj);

console.log(getAllValues(obj));

//----------4
const insertIntoArr = (nameObj, id) =>{
     // const index = condidateArr.findIndex(item => item._id == id);   // для работы с condidateArr
     return arr4.splice(id - 1, 0, nameObj)                             // как в примере
} ;

const obj4 = {
    id: 3,
    name: 'Vasya'
};

const secondObj4 = {
    id: 4,
    name: 'Katya'
};

const arr4 = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

insertIntoArr(obj4, 2);
console.log(arr4);
/// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

insertIntoArr(secondObj4, 1);
console.log(arr4);
/// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

//----------5
class Condidate {
    constructor(condidate){
        for (let key in condidate) {
            this[key] = condidate[key]
        }
    }
    get state() {
        return condidate['address'].split(', ').slice(2,3).join()
    }


}
const condidate = new Condidate(condidateArr[0]);
console.log(condidate.state);

//----------6

const getCompanyNames = (arr) => {
    const newArr = [];
    arr.forEach((item,index,array) => {
            newArr.push(array[index]['company'])
    });
    return newArr.reduce(function (res, item) {
        res.indexOf(item) < 0 ? res.push(item) : null;
        return res
    },[])

};
console.log(getCompanyNames(condidateArr));

//---------7

const getUsersByYear = ((year) => {
    const newArrId = [];
    const userByYear = condidateArr.filter(item => item.registered.substring(0,4) == year);
    userByYear.forEach((item,index,array) => newArrId.push(array[index]['_id']));
    return newArrId
});

console.log(getUsersByYear(2017));

//---------8

const getCondidatesByUnreadMsg = (msg => condidateArr.filter(item => +item.greeting.replace(/\D+/g,"") === msg));

console.log(getCondidatesByUnreadMsg(8));

//--------9

const getCondidatesByGender = (gender => condidateArr.filter(item => item.gender === gender));

console.log(getCondidatesByGender('male'));

//--------10

Array.prototype.cJoin = function(callback) {
    let str = '';
      for(let i = 0; i < this.length; i++) {
          (i < this.length - 1) ? str += this[i] + callback : str += this[i];
      }
      return str

};
console.log(['A','B','C'].cJoin('-'));

Array.prototype.cReduce = function(fun, res) { //----------TODO
    let i = 0;
    if(arguments.length < 2){
        i = 1;
        res = this[0];
    }


    for(; i < this.length; i++){
        res = fun(res, this[i], this)
    }
    return res
};

console.log([1,2,3,4,5].cReduce((fun, res) => res += fun));

