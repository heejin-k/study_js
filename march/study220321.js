//심볼 : 유일성 보장, 전체 코드중 딱 하나

const a = Symbol(); //new붙이지 않음, 유일한 식별자 만들때 사용
const b = Symbol();

console.log(a)
Symbol()
console.log(b)
Symbol()
a===b; //false
a==b; //false

const id = Symbol("id");
const id2 = Symbol("id");

console.log(id === id2); //false
console.log(id == id2); //false

// property key : 심볼형

const id3 = Symbol("id");
const user = {
    name : "mike",
    age : 30,
    [id3] : "myid"
}

console.log(user);
console.log(user[id3]);

const result = Object.keys(user);
console.log(result); 
const result1 = Object.values(user);
console.log(result1);
const result2 = Object.entries(user);
console.log(result2);
//=> key가 symbol형인 proerty는 건너 뛴다.

//Symbol.for() : 전역심볼 
/*하나의 심볼만 보장받을 수 있음 없으면 만들고 있으면 가져오기 때문, 
심볼함수는 매번 다른 값을 생성하지만 
symbol.for메소드는 하나를 생성한 뒤 키를 통해 같은 symbol을 공유*/

const id_a = Symbol.for("id");
const id_b = Symbol.for("id");

id_a === id_b; //true
console.log(id_a === id_b);

Symbol.keyFor(id_a); // id
const resultt = console.log(Symbol.keyFor(id_a)); //이름 알고싶을때

//description
const ida = Symbol("id입니다")
ida.description; //"id입니다"

//숨겨진 symbol key 보는 법
Object.getOwnPropertySymbols(user); 
console.log(Object.getOwnPropertySymbols(user));
Reflect.ownKeys(user); // 심볼포함 모든 객체
console.log(Reflect.ownKeys(user));

//ex) 다른개발자가 만들어 놓은 객체
const test_user = {
    name : "Mike",
    age: 30,
};

//내가 작업
//user.showName = function(){};
const showName = Symbol("show name");
user[showName] = function() {
    console.log(this.name);
};

user[showName]();

//사용자가 접속하면 보는 메세지
for (let key in test_user) {
    console.log(`His ${key} is ${test_user[key]}.`)
}

//toString() : 10진수 -> 2진수, 16진수

let num = 10;
num.toString(); //"10"
num.toString(); //"1010"

let num2 = 255;
num2.toString(16); // "ff"

//Math
Math.PI
//Math.ceil():올림
let num3 = 5.2;
let num4 = 5.9;
Math.ceil(num3); //6
Math.ceil(num4); //6

Math.floor(num3); //5
Math.floor(num4); //5

Math.round(num3); //5
Math.round(num4); //6

//소수점 자릿수
let userRate = 30.1234;
userRate.toFixed(2); //"30.12"
userRate.toFixed(0); //"30"
userRate.toFixed(6); //"30.123400"
//주의 : 문자로 반환하기때문에 숫자로 바꿔야함
userRate.toFixed(2); //"30.12"
Number(userRate.toFixed(2)); //30.12

//isNaN()
let x = Number("x");
x==NaN //false
x===NaN //false
NaN==NaN //false

isNaN(x) //true
isNaN(3) //false

//parselnt() 문자를 숫자로 반환 number와 다른점은 문자가 있어도 작동함
let margin = "10px";

parseInt(margin); //10
Number(margin); // NaN

let redColor = "f3";
parseInt(redColor); // NaN 숫자가 처음에 시작하지않으면 NaN반환
parseInt(redColor,16); //243 두번째 문자열을 16진수로 반환
parseInt("11",2) //3 문자열 11을 숫자로 바꾸고 2진수->10진수 
console.log(parseInt("11",2));
console.log(parseInt("20",16));
//parseFloat()
let padding = '18.5%';
parseInt(padding); //18
parseFloat(padding); //18.5 부동소수점 반환

Math.random(); //0~1사이 랜덤숫자
//1~100사이 랜덤숫자
Math.floor(Math.random()*100)+1 //버림했을때 0나올수도있으니까 최소값 1 더함
Math.min();
Math.max();
Math.abs(); //절댓값
Math.pow(n,m); //제곱 n의m승
Math.sqrt(); //제곱근
