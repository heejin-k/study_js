//string

let desc = `오늘은 맑고 화창한 
날씨가 게속 되겠습니다.
내일은 비소식이 있습니다.`; // `사용하면 여러줄 입력 가능 

let desc1 = '안녕하세요';
desc.length //6 
desc[2] //특정 위치 접근, 배열과 달리 한글자만 바꾸는건 허용안함

//toupperCase() /toLowerCase()

let desc2 = "Hi guys. Nice to meet you.";

desc2.toUpperCase(); // HI GUYS. NICE TO MEET YOU.
desc2.toLowerCase(); // hi guys. nice to meet you.
desc2.indexOf("to"); // 14 , 첫번째 위치만 

// str.slice(n,m)
desc2.slice(2); // 2부터 끝까지
desc2.slice(0,5); // 0부터 5까지
desc2.slice(2,-2); // 2부터 -2까지 
// str.substring(n,m) 
desc2.substring(2,5); 
desc2.substring(5,2); //n과 m사이 문자열 반환 n,m바꿔도 일치함,음수는 0으로 인식 
//str.substr(n,m) 
desc2.substr(2,5) //2부터 시작 5개 가져옴
desc2.substr(-4,2)
//str.trim() 앞뒤 공백 지움
desc2.trim();
//str.repeat(n); 문자열 n번 반복
desc2.repeat(2);

//문자열 비교 
"a".codePointAt(0); //97 문자 아스키코드 가져옴
String.fromCodePoint(97) //"a"

let list = [
    "01. 들어가며",
    "02. Js의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let i=0;i<list.length;i++){
    newList.push(
        list[i].slice(4)
    );
}

console.log(newList);

//금칙어 : 콜라

function hasCola(str){
    if(str.indexOf("콜라")>-1){
        console.log("금칙어가 있습니다.");
    }else{
        console.log("통과");
    }
}

hasCola("와 사이다가 짱이야");//-1
hasCola("아니야 콜라가 최고");
hasCola("콜라"); //0 if(0)은 false 이므로 >-1을 해주어야한다.

//includes

function hasCola2(str){
    if(str.includes("콜라")){
        console.log("금칙어가 있습니다.");
    }else{
        console.log("통과");
    }
}

hasCola2("와 사이다가 짱이야");
hasCola2("아니야 콜라가 최고");
hasCola2("콜라");

//Array

//arr.splice(n,m); 특정요소 지움 (시작,개수)
let arr = [1,2,3,4,5];
arr.splice(1,2);

console.log(arr); //[1,4,5]

arr.splice(1,3,100,200); // arr.splice(n,m,x) : 특정 요소 지우고 추가
console.log(arr); //[1,100,200,5]

//삭제된 요소는 반환한다.
let result = arr.splice(1,2);
console.log(result); //[2,3]

//arr.slice(n,m) : n부터 m까지 반환 string과 같음

//arr.concat(arr2,arr3 ..) : 합쳐서 새배열 반환
arr.concat([6,7]); // [1,2,3,4,5,6,7]
arr.concat([6,7],[8,9]); // [1,2,3,4,5,6,7,8,9]
arr.concat([6,7],[8,9],10,11); // [1,2,3,4,5,6,7,8,9,10,11]

//arr.forEach(fn) : 배열 반복

let array = ["Mike","Tom","Jane"];

arr.forEach((name,index) => {
    console.log(`${index+1}.${name}`);
});

//arr.indexOf / arr.lastIndexOf

//arr.includes() : 포함하는지 확인 포함하면 t, 아니면 f

//arr.find(fn) / arr.findIndex(fn) 첫번째 true값만 반환하고 끝 없으면 undefined 반환

const result2 =arr.find((item) => {
    return item % 2 ===0;
}); 

console.log(result2); //2

//미성년자 찾기
let userList = [
    {name:"Mike", age:30},
    {name:"Jane", age:27},
    {name:"Tom", age:10},
];

const result3 = userList.find((user)=>{
    if(user.age<19){
        return true;
    }
    return false;
});

console.log(result3); // {name:"Tom",age:10} / findIndex로 바꾸면 2가 나옴 (조건에 만족하는 인덱스 반환)

//arr.filter(fn) 모든 조건 반환 / 120번 줄에서 find대신 filter 으로 바꾸면 [2,4,6...] 출력

//arr.reverse() : 역순으로 재정렬 
//arr.map() 127코드 이어서 ***

let newUserList = userList.map((user,index)=>{
    return Object.assign({},user,{
        id:index+1,
        isAdult:user.age>19,
    });
});
console.log(newUserList);
console.log(userList);

// join : 배열을 문자열로 반환

let a = ["안녕","나는","철수야"];
let aresult = arr.join(" "); // 공백 안넣으면 쉼표로 구분
console.log(aresult); // 안녕 나는 철수야

// split : 문자열을 배열로 반환

const users = "Mike,Jane,Tom,Tony";

const bresult = users.split(",");// 쉼표 기준으로 나눈다 
console.log(bresult);


//Array.isArray() 배열인지 아닌지 

console.log(Array.isArray(user));
