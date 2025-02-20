import {data} from './data.js'; // 실제 문제 배열

const title = document.getElementById("title");
const randomBtn = document.getElementById("randomBtn");

let num = Number();
let count = Number(0); // 푼 문제 기록
let question = "";

function randomNumber(){
    num = Math.floor(Math.random() * data.length);
}

function selectQuestion(){
    question = data[num].content
    
    title.innerText = question;
}


randomNumber(); // 랜덤 숫자
selectQuestion(); // 문제 선택

// 랜덤으로 새로운 문제보기
randomBtn.addEventListener("click", function(){
    randomNumber();
    selectQuestion();
    count++;
    todayQuestion.innerText = count;
});
