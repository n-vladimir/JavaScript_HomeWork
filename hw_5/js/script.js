//-----------------1
const sumFun = () => {
    let res = 0;
    return (a) => {
        return res += a
    }
}
let count = sumFun();
console.group('----1----')
console.log(count(3));
console.log(count(5));
console.log(count(228));
console.groupEnd()
//-----------------2

let arrFun = () => {
    let arr = [];

    return function (val) {
        if(val !== undefined) {
            arr.push(val)
            console.log(arr)
        } else {
            arr = [];
            console.log(arr)
        }
    }

}
let getUpdatedArr = arrFun();
console.group('----2----')
getUpdatedArr(3);
getUpdatedArr(3);
getUpdatedArr(3);
getUpdatedArr({name: 'Vasya'})
getUpdatedArr();
getUpdatedArr(3);
getUpdatedArr(3);
console.groupEnd()

//---------------3
let intervalTimeFun = () => {
    let time = 0;

    return () => {
        if(time == 0){
            time = new Date().getTime()
            return 'Enable'
        } else {
            let res = (new Date().getTime() - time) / 1000
            if(res < 60) {
                if(res % 1 !== 0) return parseInt(res)
            } else {
                    time = new Date().getTime()
            }
        }
    }
}
let getTime = intervalTimeFun();

//-------------4
const timer = (time) => {
    let min = parseInt(time / 60)
    let sec = time % 60
    setTimeout(() => {
        if (time > 0) {
        if(min !== 0 || sec !== 0) {
            let strMin = `${min}`;
            let strSec = `${sec}`;
            console.log(((strMin.length == 1) ? `0${min}` : min) + ':' + ((strSec.length == 1) ? `0${sec}` : sec));
            timer(time - 1);
        }} else console.log('Timer End')
    }, 1000)

}

console.log(timer(120));



