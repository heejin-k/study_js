// case문
var month = 2;
var days = 0;

switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31; break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    //윤년 계산 알고리즘
    // 1. 연도가 4로 나누어떨어지는 해 ( 2000, 2004, 2008, 2012, 2016 ...)는 윤년이다
    // 2. 연도가 4로 나누어떨어지더라도 연돈가 100으로 나누어떨어지는해는 평년이다.
    //3. 연도가 400으로 나누어떨어지는 해 (2000,2400,2800...)는 윤년이다.
    days = ((year % 4 === 0 && year % 100 !== 0) || (years % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('Invalid month');
}

//반복문

for (var i = 0; i < 2;){
  console.log(i++);
}

var count = 0;

while (count < 3){
  console.log(count);
  count++;
  if (count ===3) break;
}

//레이블 for문 ( 안쓰는거 추천 가독성나빠지고 오류생성할 확률 높음)
outer: for (var i = 0; i<3; i++){
  for (var j = 0; j<3; j++) {
    //i+j === 3 이면 outer이라는 식별자가 붙은 레이블 for문을 탈출한다 
    console.log(`inner [${i}, ${j}]`);
    if (i+j === 3) break outer;
  }
}

//위 레이블문 function으로 바꾸기  
function a() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      //i+j === 3 이면 outer이라는 식별자가 붙은 레이블 for문을 탈출한다 
      console.log(`inner [${i}, ${j}]`);
      if (i+j === 3) return;
  }
}
}

a();


//continue
var string = 'hahahahaha';
var search = 'h';

for(var i = 0; i < string.length; i++) {
  // 'h'이 아니면 카운트를 증가시키지 않는다. 그냥넘어감
  if(string[i] !== search) continue;

  count++;
}

