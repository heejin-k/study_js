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
Bmw.prototype.drive=function(){
    console.log("drive..");
}; // 위 63~68코드와 밑 __protp__사용 코드 대신 이렇게 구현 가능 

const x6 = new Bmw("red");
const x7 = new Bmw("blue");

x6.__proto__=car;
x7.__proto__=car;



