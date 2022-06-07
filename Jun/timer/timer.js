const hrs = document.querySelector('hrs');
const min = document.querySelector('min');
const sec = document.querySelector('sec');

// hrs, min, sec 해당 박스를 누르면 시간 바뀜
// sec 누르면 텍스트 10으로 바뀌고 start 누르면 시간이 흐른다..

clearInterval(time);

sec.addEventListener('click', () => {
    sec.innerText += 10;
})


let hrs_val = hrs.value;
let min_val = min.value;
let sec_val = sec.value;

function myTimer() {
    hrs_val = hrs_val - 1;

    if (count == 0) {
        clearInterval(time);	// 시간 초기화
        alert("Finish")
    }
}