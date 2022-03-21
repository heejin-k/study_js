// var - 한 번 선언된 변수를 다시 선언할 수 있다.

var name = "Mike";
console.log(name); // Mike

var name = "jane";
console.log(name); //Jane

//var는 선언하기 전에 사용할 수 있다.
// var name; (호이스팅 ; 최상위로 끌어올려진 것 처럼 사용)
console.log(name); // undefined
var name = "Mike"; 

//const, let TDZ(temporal dead zone) 영향을 받아 할당 전엔 사용불가

let age = 30;

function showAge(){
    console.log(age);
    //let age = 20; 에러발생
}

showAge();

//스코프
const age2 = 30;

if(age2>19){
    var txt = "성인" 
}

console.log(txt); //if 문 안에서 var로 선언해서 if문 밖에서도 사용가능 (함수 스코프); 함수선언 내에서는 var도 밖에서 사용불가능 / CONST, LET 중괄호 안에서만 사용 가능 (블록 스코프)


//생성자 함수
function User(name, age){ // 첫글자는 대문자로
    this.name = name;
    this.age = age;
}

let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17); // new 연산자 사용하여 호출


function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
    }
}
let user5 = new User("Han", 40);
user5.sayName();


function Item(title,price){
    //this = {};
    this.title=title;
    this.price=price;
    this.showPrice = function() {
        console.log(`가격은 ${price}원 입니다.`);
    };
    //return this;
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방",4000);
const item3 = new Item("지갑",9000); // new를 안붙히면 그냥 함수 실행 / 결과값:undefined
//생성자 함수는 꼭 new 작성!!

console.log(item1,item2,item3);

item3.showPrice();


//Object Method , computed property

let aa = "age"

const user = {
    name : "Mike",
    [aa] : 30 // [a] <- 변수 a에 할당된 값  : computed property (계산된 프로퍼티)
}


const user_1 = {
    [1+4] : 5,
    ["안녕"+"하세요"] : "Hello"
}

/* Object Method */

//Object.assign():객체 복제

const userr = {
    name : "Mike" ,
    age : 30
};

const cloneUser = userr; //x 클론 바꾸면 원래것도 바뀜

const newUser = Object.assign({}, userr); // {} + {name : "Mike" , age:30} =
newUser.name = "Tom";
console.log(userr.name); //"mike"
newUser != userr // 클론 이름 바꿔도 원래 유저는 안바뀜

//Object.keys():키 배열 반환

const user4 = {
    name : "Mike",
    age:30,
    gender : "male",
}

Object.keys(user4); //["name", "age", "Gender"] - 배열로 반환

//Object.values() : 값 배열 반환

const userrr = {
    name : "Mike" ,
    age : 30,
    gender:"male",
}

Object.values(userrr); // ["Mike",30,"male"] - 값들을 배열로 반환 

//Object.entries():키/값 배열 반환
const useer = {
    name : "Mike",
    age:30,
    gender : "male"
}

Object.entries(useer); // ["name","Mike",],["age",30,],["gender","male"] 키와 값 배열로 묶어서 반환

//Object.fromEntries() : 키/값 배열을 객체로

const arry = 
[
    ["name","Mike"],
    ["age",30],
    ["gender","male"]
];

Object.fromEntries(arry);

/* 
{
    name : "Mike",
    age : 30,
    gender : "male",
 }

 => 배열을 객체로 반환 */

 //실습

 let n = "name";
 let a = "age";

 const user_a = {
     [n] : "Mike",
     [a] : 30,
     [1+4] : 5,
 };

 console.log(user_a); // {5:5, nae:"Mike",age:30}

 
 function makeObj(key, val) {
     return {
         [key] : val
     }
 }

 const obj = makeObj("나이", 33);
 console.log(obj); //  어떤게 키인지 불확실할때 

 
 //실습2

 const user_b = {
     name:"Mike",
     age : 30,
 };

 const uer_c = Object.assign({},user_b);

// const user_c = user_b ; 이렇게 복사하면 원래 유저도 이름 바껴서 옳지않음
//const result = Object.keys(user)
//const result = Object.values(user)
//const result = Object.entries(user)

let arr = [
    ['mon','월'],
    ["tue","화"]
]
const result = Object.fromEntries(arr)

console.log(result);
//const result = Object.fromentries






