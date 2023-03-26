var TitleScreen = document.getElementById("TitleScreen");
var HomeScreen = document.getElementById("LoadingScreen");

var HomeScreen = document.getElementById("HomeScreen");
var StartedGame = document.getElementById("StartedGame");

var GameScene = document.getElementById("GameScene");
var GameOverScene = document.getElementById("GameOverScene");
var tipBar = document.getElementById("TipBar");
var LevelScreen = document.getElementById("Levels");
var mainBody = document.getElementById("mainBody");
var htmlA = document.getElementById("html");

var HowToScreen = document.getElementById("HowToPlayScene");
var WinScene = document.getElementById("WinScene");
var aboutScene = document.getElementById("AboutScene");

var firstTime = localStorage.getItem("first_time");
var godmode = document.getElementById("GodModeButton");
var sliderthingy = document.getElementById("sliderthingy");

var gameOverMusic = new Audio('gameMusic/DeathMusic.mp3');
var tips = ["It can take a while to get used to the controls!", 
            "Try memorizing the patterns of each attack. Don't fret if you don't do it in one try", 
            "Don't panic or be too hasty in moving, try seeing where the bullets go!",
            "If you keep dying at a certain point, try reevaluating your approach or something.",
            "This game takes a moderate amount of memorization and pattern remembering, so it will take multiple tries to beat it.",
            "I can't think of any more useful tips just get good xd",
            "drink water maybe it'll help",
            "The player's hitbox is actually not the entire image, but the center; this makes it easier to dodge bullets very close to you",
            "YOU EXPECTED A TIP SCREEN, BUT IT WAS ME, KONO DIO DA!",
            "Lasers have a short time window before it hurts you!",
            "Instead of focsing on your player character, focus on the bullets and where it will go!"];
function showLevels(){
    menuHit.play();

    HomeScreen.style.display = "none";
    htmlA.style.overflow = "auto";

    LevelScreen.style.display = "block";
    sliderthingy.style.display = "none";

}

function showGameOver(){
    document.body.style.backgroundImage = "linear-gradient(180deg, rgba(3,2,4) , rgba(255,40,40,0.1))";
    gameOverMusic.play();
    console.log("game over");
    GameScene.style.display="none";
    running= false;
    // var gameCanvas = document.getElementById("gameCanvas"); 
    // gameNumber+=1;
    clearInterval(myGameArea.interval );
    
    gameCanvas.remove();
    GameOverScene.style.display="block";
    GameOverScene.style.color="white";
    
    tipBar.innerHTML = shuffle(tips)[0];
    //GameOverScene.style.display = "block";

}
function showAbout(){   
    HomeScreen.style.display = "none";
    htmlA.style.overflow = "auto";
    sliderthingy.style.display = "none";

    aboutScene.style.display="block";
     menuHit.play();
}
function reloadGame(a = 0){
    location.reload();

}
function start(){
    var Character = 0;
    sliderthingy.style.display = "block";

    htmlA.style.overflow = "hidden";
    gameOverMusic.currentTime=0;
    for(var i = 0; i <gameMusic.length; i++){
        gameMusic[i].currentTime=0;

    }
    gameMusic[6].play();
    document.body.style.backgroundImage = "linear-gradient(180deg, rgba(3,2,4) , rgba(255,40,40,0.2))";
    HomeScreen.style.display = "block";

    StartedGame.style.display = "block";
    LoadingScreen.style.display="none";
    LevelScreen.style.display="none";
    aboutScene.style.display="none";

    HowToScreen.style.display="none";
    WinScene.style.display="none";
    GameOverScene.style.display="none";
    gameOverMusic.pause();

    menuHit.play();

}

function showHowToPlay(){
    menuHit.play();
    htmlA.style.overflow = "auto";
    sliderthingy.style.display = "none";

    HomeScreen.style.display="none";
    HowToScreen.style.display="block";
    HowToScreen.style.color="white";
}
function backFromLevels(){
    menuHit.play();
    htmlA.style.overflow = "hidden";
    sliderthingy.style.display = "block";

    HomeScreen.style.display = "block";
    GameOverScene.style.color="none";
    LevelScreen.style.display = "none";
}
function backFromAbout(){
    menuHit.play();
    htmlA.style.overflow = "hidden";
    sliderthingy.style.display = "block";

    HomeScreen.style.display = "block";
    aboutScene.style.display="none";
    LevelScreen.style.display = "none";
}
function backFromHelp(){
    menuHit.play();
    htmlA.style.overflow = "hidden";
    sliderthingy.style.display = "block";

    HomeScreen.style.display = "block";
    GameOverScene.style.color="none";
    HowToScreen.style.display = "none";
}

function winScreen(){


    if(running==true){
    document.body.style.backgroundImage = "linear-gradient(180deg, rgba(40, 40, 40,0.5) , rgba(40, 150, 40,0.35))";
    console.log("game over");
    GameScene.style.display="none";
    running= false;
    var gameCanvas = document.getElementById("gameCanvas"); 
    gameNumber+=1;
    clearInterval(myGameArea.interval );

    gameMusic[5].play();
    for(var i = 0; i<5; i++){
        gameMusic[i].pause();
    }

    WinScene.style.display="block";
    WinScene.style.color="white";
    }
    
    

}