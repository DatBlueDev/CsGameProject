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
            "bad",
            "The player's hitbox is actually not the entire image, but the center; this makes it easier to dodge. bullets very close to you",
            "YOU EXPECTED A TIP SCREEN, BUT IT WAS ME, KONO DIO DA!",
            "Lasers have a short time window before it hurts you!",
            ""];
function showLevels(){
    menuHit.play();

    HomeScreen.style.display = "none";
    
    LevelScreen.style.display = "block";

}
$(function(){
    $("#includedContent").load("gameScene.html"); 
  });
function showGameOver(){
    document.body.style.backgroundImage = "linear-gradient(180deg, black , rgba(255,40,40,0.1))";
    gameOverMusic.play();
    console.log("game over");
    GameScene.style.display="none";
    running= false;
    var gameCanvas = document.getElementById("gameCanvas"); 
    gameNumber+=1;
    gameCanvas.remove();
    GameOverScene.style.display="block";
    GameOverScene.style.color="white";
    
    tipBar.innerHTML = shuffle(tips)[0];
    //GameOverScene.style.display = "block";

}
function showAbout(){   
     menuHit.play();
}
function reloadGame(){
    start();

}
function start(){
    gameOverMusic.currentTime=0;
    for(var i = 0; i <gameMusic.length; i++){
        gameMusic[i].currentTime=0;

    }

    gameMusic[6].play();
    document.body.style.backgroundImage = "linear-gradient(180deg, black , black)";
    HomeScreen.style.display = "block";

    StartedGame.style.display = "block";
    LoadingScreen.style.display="none";
    LevelScreen.style.display="none";

    HowToScreen.style.display="none";
    WinScene.style.display="none";
    GameOverScene.style.display="none";
    gameOverMusic.pause();

    menuHit.play();

}

function showHowToPlay(){
    menuHit.play();

    HomeScreen.style.display="none";
    HowToScreen.style.display="block";
    HowToScreen.style.color="white";
}
function backFromLevels(){
    menuHit.play();

    HomeScreen.style.display = "block";
    GameOverScene.style.color="none";
    LevelScreen.style.display = "none";
}
function backFromHelp(){
    menuHit.play();

    HomeScreen.style.display = "block";
    GameOverScene.style.color="none";
    HowToScreen.style.display = "none";
}

function winScreen(){

    if(running==true){
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

}