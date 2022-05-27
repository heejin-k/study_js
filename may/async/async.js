//async & await
//clear style of useing promise

//1. async
function fetchUser() {
    return new Promise((resolve, reject) => {
        //do network reqeust in 10 secs...
        resolve('ellie');
    });
}

async function fetchUser() {
    //do network reqeust in 10 secs...
    resolve('ellie');
};

const user = fetchUser();
user.then(console.log);
console.log(user);

//2.await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return '사과';
}

async function getBanana() {
    await delay(3000);
    return '바나나';
}

//프로미스 도 중첩 체이닝하면 콜백지옥과 비슷 
function pickFruits() {
    return getApple()
        .then(apple => {
            return getBanana().then(banana => `${apple}+${banana}`);
        });
}
//async로 바꾸기
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple}+${banana}`;
}

//병렬적으로
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise();
    const banana = await bananaPromise();
    return `${apple}+${banana}`;
}

pickFruits().then(console.log);

//3. useful promise APIs

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + ')
        );//병렬적으로 모아준다
}

pickAllFruits().then(console.log);

//둘중에 먼저 따는 하나만 출력하고싶다
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);