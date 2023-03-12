var TitleScreen = document.getElementById("TitleScreen");
var HomeScreen = document.getElementById("HomeScreen");

var GameScene = document.getElementById("GameScene");
var GameOverScene = document.getElementById("HomeScreen");

var LevelScreen = document.getElementById("Levels");

function showLevels(){
    HomeScreen.style.display = "none";

    LevelScreen.style.display = "block";

}
function showGameOver(){
    console.log("game over");
    GameScene.remove();
    GameScene.style.display = "none";


    //GameOverScene.style.display = "block";

}
function showAbout(){}
function showHowToPlay(){}