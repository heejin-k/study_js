//call, apply, bind
//call 메서드는 모든 함수에서 사용할 수 있으며 this를 특정값으로 지정가능
const mike = {
    name:"Mike",
};

const tom = {
    name:"Tom"
};

function showThisName(){
    console.log(this.name);
}

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1999,"singer"); //mike = this , 199,singer = birthYear,occupation
console.log(mike);

update.call(tom,2002,"teacher");
console.log(tom);

//apply : 함수 매개변수를 처리하는 방법을 제외하면 call과같음 call - 매개변수 직접받음 apply - 배열로 받음

update.apply(mike,[1999,"singer"]);

const nums = [3,10,1,6,4];

const minNum = Math.min.apply(null,nums);
//=Math.min.apply(null,[3,10,1,6,4])
const maxNum = Math.max.call(null,...nums);
//=Math.min.apply(null,3,10,1,6,4)

//bind : 함수의 this값을 영구히 바꿀수 있음 ***

const updatMike=update.bind(mike);
updatMike(1980,"police");
console.log(mike);

const user = {
    name:"Mike",
    showName:function(){
        console.log(`hello,${this.name}`);
    },
};

user.showName();

let fn = user.showName;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();

//상속

const car = {
    wheels:4,
    drive(){
        console.log("drive..");
    },
};

const bmw = {
    color:"red",
    navigation:1,
};

const benz = {
    color:"black",
};

const audi = {
    color:"blue",
};

bmw.__proto__=car;
benz.__proto__=car;
audi.__proto__=car;

const x5 = {
    color:"white",
    name:'x5',
};

x5.__proto__=bmw;
//for(p in x5){
//    console.log(p);
//}

// hasOwnProperty 객체가 가지고있는것만 true

const Bmw =function(color){
    this.color=color;
};

Bmw.prototype.wheels=4;
Bmw.prototype.navigation=1;
Bmw.prototype.drive=function(){
    console.log("drive..");
};
Bmw.prototype.stop=function(){
    console.log("STOP!!");
}; // 위 63~68코드와 밑 __protp__사용 코드 대신 이렇게 구현 가능 

//위를 더 간단히 하면,,

Bmw.prototype={
    whells:4,
    drive(){
        console.log("drive..");
    },
    navigation:1,
    stop(){
        console.log("STOP!!");
    },
};

const x6 = new Bmw("red");
const x7 = new Bmw("blue"); 

x6.__proto__=car;
x7.__proto__=car;

//class

const User = function(name,age){
    this.name = name;
    this.age=age;
    //this.showname=function(){
    //    console.log(this.name);
    //};
};

User.prototype.showName = function(){
    console.log(this.name);
}; // 아래 class처럼 프로토타입으로 바꿈

const Mike = new User("Mike",30); //new없이 실행가능, undefined로 출력되어 에러 발견 어려움

// class로 바꾸면
class User2 {
    constructor(name,age){ //객체를 만들어주는 생성자 메소드
        this.name=name;
        this.age=age; //객체를 초기화하기 위한 값들
    }
    showName(){ //프로토타입에 저장
        console.log(this.name);
    }
}

const Tom = new User2("Thom",19); //new없으면 에러 발생
//class의 매소드는 for in문에서 제외

//class의 상속 extends

class Car{ //부모클래스
    constructor(color){
        this.color=color;
        this.whells =4;
    }
    drive(){
        console.log("drive..");
    }
    stop(){
        console.log("Stop!");
    }
}

class Bmw1 extends Car { //자식클래스
    park(){
        console.log("park");
    }
    stop() {
        super.stop()//super사용하면 부모메소드 사용
        console.log("OFF"); //메소드 덮어씌움 -> 오버라이딩
    }
}

const z4 = new Bmw1("blue");

//promise

const pr = new Promise((resolve, reject)=>{ //(성공,실패) -> CALLBACK함수
    //code
}); 

const Pr = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        reject("err...");
       // resolve("Ok");
    },1000);
});

console.log("시작");
Pr.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("끝");
});

//예시2

const f1 = (callback) => {
    setTimeout(function(){
        console.log("1번주문완료");
        callback();
    },1000);
};

const f2 =(callback)=>{
    setTimeout(function(){
        console.log("2번주문완료");
        callback();
    },3000);
};

const f3 =(callback)=>{
    setTimeout(function(){
        console.log("3번주문완료");
        callback();
    },2000);
};

console.log('시작');
f1(function(){
    f2(function(){
        f3(function(){
            console.log("끝");
        });
    });
}); //callback hell ,콜백지옥

//promise로 코드구현
const F1 = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("1번 주문 완료");
        },1000);
    });
};

const F2 = (message) => {
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("2번 주문 완료");
        },3000);
    });
};

const F3 = (message) => {
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("3번 주문 완료");
        },2000);
    });
};

console.log("시작");
F1()
    .then(res=>F2(res))
    .then(res=>F3(res))
    .then(res=>console.log(res))
    .catch(console.log)
    .finally(()=>{
        console.log("끝");
    }); //프로미스체이닝

//async await 사용 가독성이 더 좋음 /에러발생시 try catch 사용
console.log("시작");
async function order() {
    const result1 = await F1();
    const result2 = await F2(result1);
    const result3 = await F3(result2);
    console.log(result3);
    console.log("종료");
}    
order();

//promis.all - 한번에 실행해서 시간절약 but 하나라도 누락되면 출력안됨  
Promise.all([F1(),F2(),F3()]).then((res)=>{
    console.log(res);
});

//promis.race - all과 사용법은 동일, 하나라도 먼저끝내면 끝

//async await

async function getName(){
    return "Mike";
}

getName().then((name)=>{
    console.log(name);
});

//await

function getname(name){
    return new Prosmise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name);
        },1000);
    });
}

async function showName(){
    const result = await getName("Mike");
    console.log(result);
}

console.log('시작');
showName();


//generator 함수의 실행을 멈췄다가 재개하는 기능 ***
function* fn(){
    yield 4;
    yield 5;
    yield 6;
}

const a = fn();

//외부로 부터 숫자 입력받을 수 있음
function* Fn() {
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);

    return num1 +num2;
}

const b =Fn();

//값을 미리 만들어두지 않음
function* fn1(){
    let index = 0;
    while(true){
        yield index++;
    }
}

const c = fn1();

//다른 제너레이터 불러오기 (yield*이용)

function* gen1(){
    yield "w";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2(){
    yield "hello";
    yield* gen1(); //반복가능한 모든 객체 가능
    yield "1";
}
//제너레이터는 다른작업을 하다가 다시 돌아와서 next() 해주면 이어서 진행 가능
//redux saga에서 활발히 사용