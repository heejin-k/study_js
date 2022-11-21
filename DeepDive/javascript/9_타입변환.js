var x = 10;

//명시적 타입변환
//숫자를 문자열로 타입 캐스팅한다.

var str = x.toString();
console.log(typeof str,str);

console.log(typeof x,x);

//암묵적 타입변환
'10' + 2 //=> '102'

//피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10' // -> 50

//피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0 //=> true
if (1) {} //true

// falsy data : 0, '',null, undefined,false, NaN 나머지는 다 trusy

//숫자타입변환 - / * 
// +[] -> 0
//Number([]) ->0
//+'' -> 0

//명시적 타입변환
String(123)
Number('123')
parseInt(10,2)

//
var done = false;
message = done &&'완료'||'미완료'; // 미완료 , 삼항연산자 비슷

//옵셔널 체이닝 ?.
//null이나 undefined가 나오면 참조를 이어가지 않음 

//(null|undefined) ?? ""  -> ||와 반대






