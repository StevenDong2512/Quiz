var user = document.querySelector("#user");
var saveScoreBtn = document.querySelector("#saveScoreBtn");
var final = document.querySelector("#final");
var latestScore = localStorage.getItem("latestScore");
var topScores = 10;
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
console.log(highScore);

result.innerText = latestScore;

user.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !user.value;
});

saveHighScore = (e) => {
    e.preventDefault();
    var score = {
        score: latestScore,
        name: user.value
    };
    highScore.push(score);
    highScore.sort((a, b) => b.score - a.score);
    highScore.splice(topScores);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    window.location.assign("leadboard.html");
};