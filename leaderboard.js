var listScores = document.querySelector("#listScores");
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];

listScores.innerHTML = highScore.map(score => {
    return `<li>${score.name} : ${score.score}</li>`;
}).join('');

