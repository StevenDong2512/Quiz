var user = document.querySelector("#user");
var saveScoreBtn = document.querySelector("#saveScoreBtn");
var final = document.querySelector("#final");
var latestScore = localStorage.getItem("latestScore");
result.innerText = latestScore;

user.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !user.value;
});

function saveHighScore(e) {
    e.preventDefault();}
