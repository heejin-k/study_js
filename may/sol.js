//요일맞추기
function solution1(a, b) {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
    new Date(2016, a - 1, b).getDay()
  ];
}
//가운데 글자 가져오기
function solution2(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

//중복제거
function solution3(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}
//나누어 떨어지는 숫자 배열
function solution4(arr, divisor) {
  const answer = arr.filter((el) => el % divisor === 0);
  return answer.length ? answer.sort((p, c) => p - c) : [-1];
}

//두 정수 사이의 합
function solution5(a, b) {
  a > b && ([a, b] = [b, a]);
  return Array(b - a + 1)
    .fill()
    .map((v, i) => v + i)
    .reduce((a, c) => a + c);
}

function solution6(a, b) {
  return ((a + b) * ((a > b ? a - b : b - a) + 1)) / 2;
}

//문자열 정렬하기
function solution7(strings, n) {
  return strings.sort((p, c) =>
    p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n])
  );
}
