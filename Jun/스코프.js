//스코프(유효범위)

function add(x, y) {
  console.log(x, y);
  return x + y;
} //매개변수의 스코프(유효범위)는 함수 몸체 내부이다.

add(2, 5);

console.log(x, y);

//13-02
var var1 = 1;

if (true) {
  var var2 = 2;
  if (true) {
    var var3 = 3;
  }
}

function foo() {
  var var4 = 4;
  function bar() {
    var var5 = 5;
  }
}

console.log(var1); //1
console.log(var2); //2
console.log(var3); //3
console.log(var4); //not defined
console.log(var5); //not defined

//13-03

var x = "global";

function foo() {
  var x = "local";
  console.log(x);
}

foo();

console.log(x);

//13.2.1

var x = "global x";
var y = "global y";

function outer() {
  var z = "outer's local z";

  console.log(x);
  console.log(y);
  console.log(z);

  function inner() {
    var x = "inner's local s";

    console.log(x);
    console.log(y);
    console.log(z);
  }

  inner();
}

outer();

console.log(x);
console.log(z);

//13.3.2
//전역함수
function foo() {
  console.log("global function foo");
}

function bar() {
  function foo() {
    //중첩함수
    console.log("logcal function foo");
  }
  foo();
}

bar();

// 13.4. 함수레벨 스코프
var x = 1;
if (true) {
  var x = 10;
}

console.log(x); //10

//13-03
var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); //5 의도치않게 변수값 변경됨  i++니까 5가되고 종료한다

//렉시컬 스코프

var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); //1
bar(); //1  //렉시컬 스코프이기 때문에 호출된 위치는 상관없다. 어디서 정의됐는지가 중요
