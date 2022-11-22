//11장

//const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수
const o = {};

o = 10 // 재할당안됨
o.a = 10 //객체내부 프로퍼티에는 가능
o.a = 20 //객체 내부 프로퍼티는 변경도 가능

var score = 80;
0x000000F2 // 식별자:score, 값 : undefined

var str1 = '';
var str2 = 'hello';
//자바스크립트 문자열은 원시타입이며 변경불가능하다.

str2.slice(2,3)
//위 코드의 내부동작
const tempStr2 = new String(str2)
tempStr2.slice(2,3)
//인스턴스를 만들어서 원하는 결과만 얻은다음 쓰고나면 버리는?

//유사배열객체 길이는 있는데 배열메소드가 아니라 스트링메소드만 들어있음!

var score = 80;
var copy = score;

console.log(score); //80
console.log(copy); //80 같은 주소값을 가리킨다

score = 100;

console.log(score); //100
console.log(copy); // 80

//11-9
//변수와 같은 식별자는 값이 저장되는게 아니라 메모리주소를 기억한다!
//식별자는 메모리 주소에 붙힌 이름이다.

//p146 객체
//v8엔진은 이렇게 돌아가는구나~ 이해만

var person = {
  name:'lee'
};

// 0x0000a: person, -> 0x00000F2
// 0x000F2: -> 0x00001331 ~?
// {
//   0x0001332:name -> 0x000555
// }

// 0x000555: 'lee'
//참조형 

//한번만 거치면 불변성 0x000a : a -> 0x000F2 / 0x000F2 : 10

//불변객체 : Object.freeze() 이렇게 얼리는게 아니라 값을 바꾸려고 하면 새로운 객체를 만들어버린다.
var person = {
  name:'lee'
};

person.name = 'ab'; //x
person = { name:'ab'} //o 

//얕은 복사 깊은 복사
//깊은 복사 : 객체안에 있는 참조가능한 모든것들을 복사해서 기본형 값에 다다를때까지 전부 복사하는 것 / 재귀적으로 전부 복사 원시값이 나올때까지!
//얕은 복사 : 한단계만 복사 
//원본과 복사본은 참조값이 다른 객체이다. 

//불변객체를 만드는방식은 깊은복사를 해놓고 프로퍼티를 바꾸는 형식

var a = { a: [1,2,3]}
var b = a;

a===b; //true

a.a[0] = 4
b.a[0] //4
//위는 깊은복사가 안된 것
//얕은복사는 원본도 바뀐다 서로가 영향을 줌 

var b = {a:[...a.a]}
a.a[0] = 5
b.a[0] //4 깊은복사를 통해 완전 다른 객체가 되었기 때문

//퀴즈

var person1 = {
  name:'lee'
};

var person2 = {
  name:'lee'
};

console.log(person1 === person2); //false 
// 참조값 자체가 다르기때문에 person 객체 자체는 같지않다

console.log(person.name === person2.name); //true








