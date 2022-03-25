//배열정렬 arr.sort();
let arr = [1,5,4,2,3]; // [27,18,2,4] 이런경우 함수를 사용해야함
function fn(a,b){
    return a-b;
}
arr.sort(fn);
console.log(arr);

//arr.reduce(); 배열의 모든수 합치기
/*
인수로 함수를 받음
(누적 계산값, 현재값)=>{retrun 계산값};
*/
const result = arr.reduce((prev,cur)=>{
    return prev+cur;
},0)
console.log(result);

let userList = [
    {name:"Mike",age:30},
    {name:"Tom",age:10},
    {name:"Jane",age:27},
    {name:"Sue",age:26},
    {name:"Harry",age:42},
    {name:"Steve",age:60},
];

let result1 = userList.reduce((prev,cur)=>{
    if(cur.age>19){
        prev.push(cur.name);
    }
    return prev;
},[]);

console.log(result1);

//arr.reducerighter()  동일한데 우측부터

//베열구조분해
let users = ["Mike","Tom","Jane"];
let [user1, user2,user3]=users;
// = let user1 = users[0]; let user2 = users[1]; let users3 = users[2];

let [a,b,c]=[1,2]; 
// let [a=3,b=4,c=5]=[1,2]; 기본값 할당 

//객체 구조 분해

let user = {name: "Mike", age:30};
let {name,age} = user; 
//= let name = user.name; let age = user.age; 순서 신경안써도됨, 기본값 사용 가능

//나머지 매개변수 , 전달받은 모든 수 더해야하는 코드

function add(...numbers){
    let result = 0;
    numbers.forEach((num)=>(result += num));
    console.log(result);
}

//user 객체를 만들어주는 생성자 함수

function User(name,age,...skills){ //나머지 매개변수는 항상 마지막에!
    this.name=name;
    this.age=age;
    this.skills=skills;
}

const user_a=new User("Mike",30,"html","css");
const user_b=new User("Tom",30,"html");
const user_c=new User("Jon",30,"html","java","css");

console.log(user_a);
console.log(user_b);
console.log(user_c);

//전개구문 : 배열

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr_result = [...arr1,...arr2];

console.log(arr_result);

//전개구문 : 복제
let arr3 = [1,2,3];
let arr4 = [...arr3]; // [1,2,3]

let userr = {name:"Mike",age:30};
let userr2 = {...userr};

userr2.name = "Tom" //userr의 이름은 지장없음

// 전개구문 없이 
let user_d = {name:"Mike"};
let info = { age:30};
let fe = ["JS","React"];
let lang = ["Korean","English"];

user = Object.assign({},user,info,{
    skills: [],
});

fe.forEach((item)=>{
    user.skills.push(item);
});
lang.forEach((item)=>{
    user.skills.push(item);
});

console.log(user_d);

//전개구문 사용
user = { ...user,...info,skills:[...fe,...lang]};

//setTimeout 일정시간이 지난 후 함수 실행
function fnn(){
    console.log(3)
}

setTimeout(fnn, 3000); //3000 = 3s 3초뒤에 3을찍는 함수 

//=> setTimeout(function(){console.log(3)},3000);

function showName(name){
    console.log(name);
}

setTimeout(showName,3000,"Mike");

//setInterval 반복수행-3초마다 3을 찍음
//중간에 중단하려며 clearInterval(tId);

//주의 delay=0 을 해도 바로 실행되진않음 

let num = 0;
function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if(num>5){ //5초되면 꺼지게
    clearInterval(tId);
    }
}
const tId =setInterval(showTime,1000)
