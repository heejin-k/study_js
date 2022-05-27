'use strict';

//javascropt is synchronous(동기적임)
//호스팅 된 이후로부터 하나하나씩 동기적으로 실행된다.
//호이스팅? var변수와 함수선언들이 자동적으로 제일 위로 올라가는 것. 
//async 비동기적으로 언제 코드가 실행될지 예측 불가

console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
//지정한시간이 지나면 콜백함수 호출 
console.log('3');

//synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));
//Asynchronous callback

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


//callback hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') || (id == 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
UserStorage.loginUser(
    id,
    password,
    user => {
        UserStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${user.name},you have a ${user.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);