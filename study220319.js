const name="Mike";
age=30;

console.log(age);

const message = `My name is ${name}`; /* 문자열 내부에 변수가 있을 때 ` 사용*/
const message1 = `My age is ${30+1}`;

console.log(message);
console.log(message1);

/* typeof 연산자 : 자료형 알아내기 */

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null); // object , 객체형 null은 객체아님
console.log(typeof underfined)// underfined 

const name2 = prompt("이름을 입력하세요."); // 창을 띄워서 입력받을때 
alert("환영합니다,"+ name2 +"님");
const day = prompt("예약일을 입력하세요.","2022-03-"); //뒤에 값은 입력받을 기본 디폴트값
const isAdult = confirm("당신은 성인 입니까?"); //확인 받을때 /확인-T 취소-F

//단점 스크립트 일시정지, 스타일림 불가능 

/*형변환*/

const mathScore = prompt("수학 점수는?");
const enScore = prompt("영어 점수는?");
const result = (mathScore+enScore)/2;

console.log(result) // prompt 입력은 문자 -> 숫자 변환 필요

const a = 1;
const b = "1";

console.log(a==b); // 동등연산자 값: true
console.log(a===b); // 일치연산자 /타입까지 비교 값 : flase


/* 조건문 */
const age2 = 30;

if(age2){
    console.log('환영합니다.');
} else if(age2 ===19){
    console.log('수능잘치세요.');
} else {
    console.log('안녕히 가세요');
}

/* and or not */

const age3 = prompt('나이를 입력하세요');
const isAge = age >19;

if(!isAge){
    console.log('성인만 입장가능합니다.');
}

if(name==="Mike"&&isAge){
    console.log(`${name}님 환영합니다.`);
}else{
    console.log('안녕히가세요');
}

if(name==="Tom" || isAge){
    console.log("환영합니다");
}else{
    console.log("안녕히가세요");
}

/* 반복문 */

let i = 0;

for(i=0;i<10;i++){
    console.log(i);
}

let j = 0;

while(j<10){
    console.log(j);
    j++;
}

do{
    console.log(j);
    j++;
}while(j<12) //적어도 한번은 코드를 실행한다 :while과 차이

//break, continue
while(true){
    let answer = confirm("계속 할까요?");
    if(!answer){
        break;
    }
}

for(let i = 0; i<10; i++){
    if(i%2){
        continue;
    }
    console.log(i);
}

/* switch 문 */

let fruit = prompt('무슨 과일을 사고싶나요?');

switch(fruit){
    case'사과' :
        console.log('200원입니다.');
        break;
    case ' 바나나' :
        console.log('300원 입니다.');
        break;
    case '키위':
        console.log('400원 입니다.');
        break;
    case '멜론':
    case '수박':
        console.log('500원 입니다.');
        break;
    default :
        console.log('다시 입력해주세요');      
}

/*함수*/
/*function sayHello(namee){
    console.log(`Hello,${namee}`);
}

sayHello('Mike');
sayHello('Tom');
sayHello('Jenny');
*/


let msg = "hello"; //전역변수
console.log('함수 호출 전');
console.log(msg);

function sayHello(namee = 'friend '){ // namee 뒤는 디폴트값
    if(namee){
        msg += `, ${namee}`;
    }
console.log('함수내부'); //지역변수 가급적 지역변수 사용
    console.log(msg);
}

sayHello('Mike');
console.log('함수 호출 후');
console.log(msg);

//반환

function addEventListener(num1,num2){
    return num1+num2;
}

//함수 선언문(어디서든 호출가능) vs 함수 표현식(이후에만 사용 가능) 

//화살표 함수

showError();

function showError(){
    console.log("error");
}

//  화살표 함수로 변경

let showEError = ()=> {
    console.timeLog("error");
} //함수 표현식에서 function 지우고 화살표 뒤에 추가


//object

const superman = {
    name:'clark',
    age:33,
}

//접근
superman.name //'clark'
superman['age'] //33

console.log(superman.name);
console.log(superman['age']);

//추가
superman.gender = 'male';
superman['hairColor']='black';

//삭제
delete superman.hairColor;

function Adult(user){
    if(!('age' in user)||user.age<20){
        return false;
    }
    return true;
}

const Mike = {
    name:"Mike",
    age:30
};

const Jane = {
    name:"Jane"
};

console.log(Adult(Jane))

for (x in Mike) {
    console.log(Mike[x]) 
} 

//method 

let boy = {
    name: "Mike",
    showName: function () {
        console.log(this.name) 
        //boy.name으로 하면 안됨, 화살표함수에서는 this는 window, 전역객체를 의미하므로 사용x
    }
};

let man = boy;
boy = null;

man.showName();

//배열 

let days = ["mon", "tue", "wed"];

day[1] = '화요일' //tue를 화요일로 변경
console.log(days.length); //배열의 길이

days.push("thu");
days.unshift("sun")

/* for(let index=0; index<days.length;index++){
    console.log(days[index]);
}

for to 로 활용*/

for (let day of days) {
    console.log(day);
}