const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

/*시간 설정*/ 
function getTime() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${month}월 ${day}일
    ${hours <10?`0${hours}`:hours}:${minutes<10? `0${minutes}`:minutes}:${seconds < 10? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();



signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

// 2차

const id = document.getElementById('Email')
const password = document.getElementById('Password')
const login = document.getElementById('SignIn')
let errStack = 0;

login.addEventListener('click', () => {
    if (id.value == 'acid') {
        if (password.value == '0000') {
            alert('로그인 되었습니다!')
        }
        else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
            errStack ++;
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }

    if (errStack >= 5) {
        alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.')
    }
})








