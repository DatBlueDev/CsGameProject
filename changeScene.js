var TitleScreen = document.getElementById("TitleScreen");
var HomeScreen = document.getElementById("HomeScreen");

var GameScene = document.getElementById("GameScene");
var GameOverScene = document.getElementById("GameOverScene");
var tipBar = document.getElementById("TipBar");

var LevelScreen = document.getElementById("Levels");
var mainBody = document.getElementById("mainBody");
var HowToScreen = document.getElementById("HowToPlayScene");

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
function showHowToPlay(){
    HomeScreen.style.display="none";
    HowToScreen.style.display="block";
    HowToScreen.style.color="white";
    

}