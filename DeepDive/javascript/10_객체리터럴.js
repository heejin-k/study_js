//프로퍼티 : 객체의 상태를 나타내는 값
//메서드 : 프로펕티를 참조하고 동작할수있는 동작
// 인스턴스 : 클래스에 의해 생성돼서 메모리에 저장된 실체
// 객체 - 클래스와 인스턴스를 포함한 개념
// 객체리터럴은 객체를 생성하기위한 표기법 {}안에 0개 이상의 프로퍼티를 정의


//10.1
var person = {
  name:'lee',
  sayHello: function(){
    console.log(`hello my name is ${this.name}.`);
  }
};

console.log(typeof person); // object 
console.log(person) // {name:'lee', sayhello:f}

person.sayHello() // hello my name is lee -> this는 person

person.sayHello.call() //this 지정안돼있어서 윈도우 객체가 된다. 

// 객체리터럴은 값을 표현하는 표현식이다 

//10.3 프로퍼티
//객체는 프로퍼티의 집합이며 키와 값으로 이루어져 있다.
// 대괄호 표기법 

var obj = {};
var key = 'hello';

obj['hello'] = 'world';
obj.hello = 'world'; //둘다 같은 의미

var foo ={
  0:1,
  1:2,
  2:3
};

foo['0'] //1
foo[0] //1 접근 가능 but foo.0으로는 접근 불가능

//var function 같은 예약어를 프로퍼티 키로 해도 문제없지만 사용안하는게 좋음
// 동일한 프로퍼티의 경우 덮어씌우게 된다.
var foo = {
  name:'lee',
  name:'kim'
};
//kim만 남게된다. 

//

var circle = {
  radius:5,
  getDiameter: function () {
    return 2 * this.radius;
  }
};

circle.getDiameter() //10 메서드

const a = cb => cb()
a(circle.getDiameter) // => NaN this가 없기때문이다. 


//10-15

var person = {
  'last-name' : 'lee',
  1 : 10
};
person.lasst-name //NaN

//node.js에서는 전역공간에서 찾고 없으면 언디파인드 
window.a = 10 //10
a //10
delete a //true
a //없음

//그런데 

// var a = 10
a //10
delete a // false
window.a // 10
//브라우저 문제  let이나 const로 하면 윈도우에 영향안줌 

var x =1, y=1
var obj ={
  x,y
};

console.log(obj); // {x:1,y:2} 키값이 곧 value다! 축약 가능

// computed property

var prefix = 'prop';
var obj = {};
//계산된 프로퍼티 이름으로 프로퍼티 키 동작 생성
obj[prefix + '_' + ++i] = i;
obj[prefix + '_' + ++i] = i;
obj[prefix + '_' + ++i] = i;

console.log(obj);

// 위 코드를 es6에서는?
const prefix = 'prop';
let i = 0;
//계산된 프로퍼티 이름으로 프로퍼티 키 동작 생성
const obj = {
  [`${prefix}-${++i}`]:i,
  [`${prefix}-${++i}`]:i,
  [`${prefix}-${++i}`]:i,
};

console.log(obj); // {prop-1:1, prop-2:2, prop-3:3}


//메소드 축약표현

//es5

var obj = {
  name:'lee',
  sayHi : function(){
    console.log('Hi'+this.name);
  }
};

obj.sayHi();

//es6

var obj2 = {
  name:'lee',
  //메서드 축약표현
  sayHi(){
    console.log('hi'+this.name)
  }
};

console.log(obj)
console.log(obj2)
//형태가 서로 다르다 프로토 타입 유무 이름 유무 
//es5는 생성자 함수로 바로 쓸 수 있지만 축약형은 생성자 함수로 쓸 수 없음. 프로토타입이 비어있어서 
//es6가 함수에있는 객체내용이 가벼워 목적성이 정확, 메소드 선언형태를 정확하게 정의를 했다.











