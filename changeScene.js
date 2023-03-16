var TitleScreen = document.getElementById("TitleScreen");
var HomeScreen = document.getElementById("LoadingScreen");

var HomeScreen = document.getElementById("HomeScreen");
var StartedGame = document.getElementById("StartedGame");

var GameScene = document.getElementById("GameScene");
var GameOverScene = document.getElementById("GameOverScene");
var tipBar = document.getElementById("TipBar");

var LevelScreen = document.getElementById("Levels");
var mainBody = document.getElementById("mainBody");
var HowToScreen = document.getElementById("HowToPlayScene");
var WinScene = document.getElementById("WinScene");

var gameOverMusic = new Audio('gameMusic/DeathMusic.mp3');
var tips = ["It can take a while to get used to the controls!", 
            "Try memorizing the patterns of each attack. Don't fret if you don't do it in one try", 
            "Don't panic or be too hasty in moving, try seeing where the bullets go!",
            "If you keep dying at a certain point, try reevaluating your approach or something.",
            "This game takes a moderate amount of memorization and pattern remembering, so it will take multiple tries to beat it.",
            "I can't think of any more useful tips just get good xd",
            "bad"];
function showLevels(){
    HomeScreen.style.display = "none";
    GameOverScene.style.color="none";

    LevelScreen.style.display = "block";

}
function showGameOver(){
    document.body.style.backgroundImage = "linear-gradient(180deg, black , rgba(255,40,40,0.3))";
    gameOverMusic.play();
    console.log("game over");
    GameScene.remove();
    running= false;

    GameOverScene.style.display="block";
    GameOverScene.style.color="white";
    
    tipBar.innerHTML = shuffle(tips)[0];
    //GameOverScene.style.display = "block";

}
function showAbout(){}
function start(){
    StartedGame.style.display = "block";
    LoadingScreen.style.display="none";
    HowToScreen.style.display="none";
    WinScene.style.display="none";

}

function showHowToPlay(){
    HomeScreen.style.display="none";
    HowToScreen.style.display="block";
    HowToScreen.style.color="white";
}

function winScreen(){
    gameMusic[5].play();
    console.log("win");
    GameScene.remove();
    running= false;
    for(var i = 0; i<5; i++){
        gameMusic[i].pause();
    }
    WinScene.style.display="block";
    WinScene.style.color="white";
}