var TitleScreen = document.getElementById("TitleScreen");
var HomeScreen = document.getElementById("HomeScreen");

var GameScene = document.getElementById("GameScene");
var GameOverScene = document.getElementById("GameOverScene");

var LevelScreen = document.getElementById("Levels");
var mainBody = document.getElementById("mainBody");
var gameOverMusic = new Audio('gameMusic/DeathMusic.mp3');

function showLevels(){
    HomeScreen.style.display = "none";
    GameOverScene.style.color="none";

    LevelScreen.style.display = "block";

}
function showGameOver(){
    gameOverMusic.play();
    console.log("game over");
    GameScene.remove();
    running= false;
    GameScene.style.display = "none";

    GameOverScene.style.display="block";
    GameOverScene.style.color="white";

    //GameOverScene.style.display = "block";

}
function showAbout(){}
function showHowToPlay(){}