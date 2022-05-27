'use strict';

//promise is a javascript object for asynchronous operation
//체크 1.상태 2.정보 제공자와 소비자의 두가지 다른 견해 이해
//state : pending -> fulfilled or rejected
//producer vs consumer

//1. producer

//when new promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files) 
    console.log('doing something...');
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

//2. consumers: then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    }); // 무조건 출력

//3.promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling 
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error!${hen} => 알`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg}=>계란후라이`), 1000);
    });

getHen() //
    .then(getEgg)
    .catch(error => {
        return '🧡';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);