import { data } from "./data.js"; // 실제 문제 배열

const startBtn = document.querySelector(".startBtn");
const thumnail = document.querySelector(".thumnail");
const container = document.querySelector(".container");

startBtn.addEventListener("click", function () {
  thumnail.style.display = "none";
  container.style.display = "flex";
  randomBtn.style.display = "block";
  startTimer();
});

const questionTitle = document.getElementById("questionTitle");
const questionNum = document.getElementById("questionNumber");
const randomBtn = document.getElementById("randomBtn");

let num = Number();
let count = Number(0); // 푼 문제 갯수 기록
let question_num = "";
let question = "";

function randomNumber() {
  num = Math.floor(Math.random() * data.length);
}

function selectQuestion() {
  question_num = data[num].num;
  question = data[num].content;
  questionNum.textContent = question_num;
  questionTitle.textContent = question;
}

randomNumber(); // 랜덤 숫자
selectQuestion(); // 문제 선택

// 다음버튼 클릭시 랜덤으로 새로운 문제보기
randomBtn.addEventListener("click", function () {
  toggleButton.querySelector(".fa-solid").classList.remove("fa-play");
  toggleButton.querySelector(".fa-solid").classList.add("fa-pause");
  timerActive = false;
  // 랜덤문제 함수
  randomNumber();
  selectQuestion();
  // timer 함수
  resetTimer();
  startTimer();
  count++;
  todayQuestion.innerText = count;
});

// 타이머 지나면 랜덤으로 새로운 문제보기
const timerDisplay = document.getElementById("timer");
const toggleButton = document.getElementById("toggleBtn");

let timer;
let time = 60;
let seconds = time; // 1분 = 60초

// 타이머 시작 함수
function startTimer() {
  timer = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = time; // 0초에 도달하면 다시 1분으로 리셋
      // 랜덤문제 함수
      randomNumber();
      selectQuestion();
      count++;
      todayQuestion.innerText = count;
    }
    updateDisplay();
  }, 1000);
}

// 타이머 정지 함수
function stopTimer() {
  clearInterval(timer);
}

// 타이머 리셋 함수
function resetTimer() {
  clearInterval(timer);
  seconds = time;
  updateDisplay();
}

// 디스플레이 업데이트 함수
function updateDisplay() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerDisplay.textContent = `${pad(minutes)}:${pad(remainingSeconds)}`;
}

// 숫자를 두 자리로 패딩하는 함수
function pad(number) {
  return number.toString().padStart(2, "0");
}

// 이벤트 리스너 추가
let timerActive = false;
toggleButton.addEventListener("click", function () {
  if (!timerActive) {
    stopTimer();
    toggleButton.querySelector(".fa-solid").classList.remove("fa-pause");
    toggleButton.querySelector(".fa-solid").classList.add("fa-play");
    timerActive = true;
  } else {
    startTimer();
    toggleButton.querySelector(".fa-solid").classList.remove("fa-play");
    toggleButton.querySelector(".fa-solid").classList.add("fa-pause");
    timerActive = false;
  }
});

// 초기 디스플레이 업데이트
updateDisplay();
