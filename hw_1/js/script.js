// 1
for (let i = 1; i <= 10; i++) {
    // console.log(i);
    if (i % 3 == 0) {
        console.log('FizBuz');
        continue;
    }
    if (i % 2 == 0) {
        console.log('Fiz');
    }
    if (i % 2 != 0) {
        console.log('Buz');
    }

}
// 2
// Написать логику нахождения факториала числа 10.
// Формула нахождения факториала числа 7
// 7! = 7⋅6⋅5⋅4⋅3⋅2⋅1 = 5040

let numFuctorial = 10;
// let numFuctorial = prompt('Введите значение:' );

function sFuctorialRecursia(numFuctorial) {
    if (numFuctorial < 0) {
        return 0;
    } else if (numFuctorial == 0) {
        return 1;
    } else {
        return numFuctorial * sFuctorialRecursia(numFuctorial - 1);
    }
}
console.log(`${numFuctorial}! = ${sFuctorialRecursia(numFuctorial)}`);

function sFuctorialFor(numFuctorial) {
    if (numFuctorial < 0) {
        return 0;
    } else if ( numFuctorial == 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = numFuctorial; i > 0; i--) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(`${numFuctorial}! = ${sFuctorialFor(numFuctorial)}`);

// 3
// В пачке бумаги 500 листов. За неделю в офисе расходуется 1200 листов.
// Какое наименьшее количество пачек бумаги нужно купить в офис на 8 недель?
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let res = 0;
let rWeekPack = consumptionPerWeek / sheetsInReamPaper;
let minPackNeed = rWeekPack * weeksAmount;
let ostD = minPackNeed % 1;
    if(minPackNeed % 1 === 0) {
        res = minPackNeed;
    } else {
        res = (minPackNeed - ostD) + 1;
    }


console.log(`min pack need: ${res}`);

// 4*
// Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры.
// Этажей у нас 9, квартир на этаже по 3
// const roomsOnFloor = 3;
// const floors = 9;
// const roomNumber = 100;
// function calcNumRoomOnPorchAndFloors() {
//     let porch = Math.ceil(roomNumber / (floors * roomsOnFloor));
//     let floor = roomNumber / roomsOnFloor;
//     floor -= (porch -1) * floors;
//     return console.log(` Квартира №: ${roomNumber} Подъезд ${porch} Этаж ${floor}`);
//     // let roomOnPorch = floors * roomsOnFloor;
//     // if(roomNumber % roomOnPorch != 0) {
//     //     let porch = ((roomNumber / roomOnPorch) - ((roomNumber / roomOnPorch).toFixed()));
//     //     return console.log(porch);
//     // }
// }

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 108;
function calcNumRoomOnPorchAndFloors() {
    const roomOnPorch = roomsOnFloor * floors;
    let zeroPorch = roomNumber % roomOnPorch;
    let porch = ((roomNumber - zeroPorch) / roomOnPorch) + 1;
    let ostFloor = (zeroPorch % roomsOnFloor);
        if(ostFloor < 3){
           var floor = ((zeroPorch - ostFloor) / roomsOnFloor) + 1;
        }
        if(ostFloor % 3 == 0){
          var floor = (zeroPorch / roomsOnFloor);
            if (floor == 0) {
                var floor = floors;
            }
        }
        return console.log(`Подъезд: ${porch} Этаж: ${floor}`)
}
calcNumRoomOnPorchAndFloors();


//     5**
const medianNumber = 8;
let i = 0;
let j = 0;


for (let i = 0; i <= medianNumber - 1; i++) {
    let line = '';
    let star = '';
    for(j = 0; j < medianNumber - i - 1; j++) {
        line += '-';
    }
    for(j = 0; j < 2 * i + 1; j++) {
        star += '#';
    }
    console.log((line + star + line) + '  //' + (i + 1));
}