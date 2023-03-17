var playerModel;
var playerHeight = 30;
var playerWidth = 30;
var gameLevel;
var bulletModels = [];
var laserModels = [];
var i = 0;
var bulletHeight = 30;
var bulletWidth = 30;
var hitCounter = 0; 
var canvasHeight = 800;
var canvasWidth = 800;
var gameNumber = 0;
var currentGameNumber = -1;
var gridModel;
var gridHeight = 300;
var gridWidth = 300;
var gridOffsetX = 0;
var gridOffsetY = 0;
var gridConstant = 3.23;

var health = 100;
var maxHealth = 100;
var degreesRotation=[];
var ferrisNumber = -1;
var startTime = Date.now();
var immunityFrameTimer = 0;
var immunityFrames = 30;
var TitleScreen = document.getElementById("TitleScreen");
var LevelScreen = document.getElementById("Levels");
var hitCounterHTML = document.getElementById("HitCounter");
var loadingText = document.getElementById("LoadingText");

var loadingProgress = document.getElementById("LoadingProgress");
var startGameButton = document.getElementById("startGameButton");
var problemLoading = document.getElementById("ProblemLoading");

var GameScene = document.getElementById("GameScene");
var playerLocation;
var running = true;
var godMode=false;
grid = document.getElementById("grid");
playerImage = document.getElementById("playerSprite");
playerImageZ = document.getElementById("playerSpriteZ");

HealthBar = document.getElementById("Health");


var gameMusic = [new Audio('gameMusic/Mittsies_Titanium.mp3'),new Audio('gameMusic/rainyBoots.mp3'),new Audio('gameMusic/DOSTHymnRemix.mp3'),new Audio('gameMusic/TerritoryBattle.mp3'),new Audio('gameMusic/UnOwen.mp3'), new Audio('gameMusic/applause.ogg'), new Audio('gameMusic/menuMusic.mp3')];
var gameMusicIsLoaded = [false, false, false, false, false];
var hoverSoundEffect = new Audio('gameSoundEffects/menuclick.wav');
var hurtEffect = new Audio('gameSoundEffects/hurtSoundEffect.mp3');
var menuHit = new Audio('gameSoundEffects/menuhit.wav');

var filterStrength = 20;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

gameMusic[0].volume = .5;
gameMusic[1].volume = .5;
gameMusic[2].volume = .5;
hoverSoundEffect.volume = .5;
hurtEffect.volume = .5;
menuHit.volume = .5;

musicLoaded = 0;
for (var i = 0; i<gameMusic.length; i++){
    gameMusic[i].oncanplaythrough = function(){
        musicLoaded+=1;
        gameMusicIsLoaded[i]=true;
        loadingProgress.innerHTML = musicLoaded + "/" + gameMusic.length;
        if(musicLoaded == gameMusic.length){
            startGameButton.style.display = "block";

            loadingText.innerHTML = "Finished Loading!";
            loadingProgress.innerHTML = "Please press start to continue";
            problemLoading.remove();
        }
    }
}


slider.oninput = function() {
    sliderVol=this.value/100;
    for(var i = 0; i<gameMusic.length; i++){
        gameMusic[i].volume = sliderVol;
        console.log(sliderVol);
    }
    hoverSoundEffect.volume = sliderVol;
    hurtEffect.volume = sliderVol;
    menuHit.volume = sliderVol;

}
var frameTime = 0, lastLoop = new Date, thisLoop;

menuHit.readyState
async function startGame(level) {

var playerHeight = 30;
var playerWidth = 30;
var bulletModels = [];
var laserModels = [];
var i = 0;
var bulletHeight = 30;
var bulletWidth = 30;
var hitCounter = 0; 


var health = 100;
var maxHealth = 100;
var degreesRotation=[];
var ferrisNumber = -1;
var startTime = Date.now();
var immunityFrameTimer = 0;

var LevelScreen = document.getElementById("Levels");


var GameScene = document.getElementById("GameScene");
var playerLocation;
var running = true;
var godMode=false;
grid = document.getElementById("grid");
playerImage = document.getElementById("playerSprite");
playerImageZ = document.getElementById("playerSpriteZ");

HealthBar = document.getElementById("Health");

for (var i = 0; i<gameMusic.length; i++){
    gameMusic[i].currentTime=0;
}
var filterStrength = 20;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

gameMusic[0].volume = .5;
gameMusic[1].volume = .5;
gameMusic[2].volume = .5;
hoverSoundEffect.volume = .5;
hurtEffect.volume = .5;
menuHit.volume = .5;

musicLoaded = 0;
    await wait(10);
    menuHit.play();
    gameMusic[6].pause();

    LevelScreen.style.display = "none";
    await wait(0.4);
    

    startTime = Date.now();
    HealthBar.value = 100;
    gameLevel = level;

    GameScene.style.display = "block";

    playerModel = new imageComponent(playerImage, 40, 54, 400-(playerHeight/2), 400-(playerWidth/2));
    gridModel = new imageComponent(grid, gridHeight, gridWidth, ((canvasHeight/2))-10, (canvasWidth/2)-10);


    myGameArea.start();
    main();
}

var myGameArea = {
   
    canvas : g = document.createElement("canvas"),
    start : function() {
        this.canvas.width = canvasWidth;
        g.setAttribute("id", "gameCanvas");
        
        playerHeight = 30;
        playerWidth = 30;
        bulletModels = [];
        laserModels = [];
        i = 0;
        bulletHeight = 30;
        bulletWidth = 30;
        hitCounter = 0; 


        health = 100;
        maxHealth = 100;
        degreesRotation=[];
        ferrisNumber = -1;
        startTime = Date.now();
        immunityFrameTimer = 0;
        playerLocation;
        running = true;
        godMode=false;
        for (var i = 0; i<gameMusic.length; i++){
            gameMusic[i].currentTime=0;
        }

        currentGameNumber +=1;
        gameMusic[0].volume = .5;
        gameMusic[1].volume = .5;
        gameMusic[2].volume = .5;
        hoverSoundEffect.volume = .5;
        hurtEffect.volume = .5;
        menuHit.volume = .5;

        musicLoaded = 0;
        this.canvas.height = canvasHeight;
        this.context = this.canvas.getContext("2d");
        GameScene.appendChild(this.canvas);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
}
var fpsOut = document.getElementById('fps');
setInterval(function(){
  fpsOut.innerHTML = (1000/frameTime).toFixed(1) + " fps";
},10);
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}


function BulletComponent(gameNumber, width, height, color, x, y, hasCollision = true, bulletDirection = "l", bulletsInCircle =5, isFerris = false, bulletLocation=[], j=0, radius=1,rotationSpeed=1,bulletSpeed=1, ferrisNumber) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.hasCollision = hasCollision;    
    this.bulletDirection = bulletDirection;
    this.bulletsInCircle = bulletsInCircle;
    this.isFerris = isFerris;
    this.rotationSpeed = rotationSpeed;
    this.ferrisNumber = ferrisNumber;
    this.gameNumber = gameNumber;
    var xk =bulletLocation[0];
    var yk =bulletLocation[1]; 

    this.update = function() {
        if (gameNumber ==currentGameNumber){

        
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x-(this.width/2), this.y-(this.height/2), this.width, this.height);
        }
    }
    this.newPos = function() {
        if (gameNumber == currentGameNumber){
            this.x += this.speedX;
            this.y += this.speedY;  
        }
      
    }        
    if (gameNumber != currentGameNumber){
        this.x=9000000;
        this.y= 9000000;
    }
    this.rotate = function(degreesRotation) {


        if (bulletDirection == "r"){
            xk  += bulletSpeed;
        }
        else if (bulletDirection == "l"){
            xk  += -bulletSpeed;
        }
        else if (bulletDirection == "u"){
            yk += -bulletSpeed;
        }
        else if (bulletDirection == "d"){
            yk += bulletSpeed;
        }
        bulletModels[j].x = xk + (100*radius*(Math.cos(((bulletModels[j].rotationSpeed*degreesRotation[ferrisNumber]+((360/bulletsInCircle)*j))*Math.PI/180)))); 
        bulletModels[j].y = yk + (100*radius*(Math.sin(((bulletModels[j].rotationSpeed*degreesRotation[ferrisNumber]+((360/bulletsInCircle)*j))*Math.PI/180))));  
        degreesRotation[ferrisNumber]+=0.05;
        console.log(degreesRotation);
        console.log(ferrisNumber);


        }


    }  




function imageComponent(image, width, height, x, y) {
    this.image = image;

    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    
    this.update = function() {
        ctx = myGameArea.context;

        ctx.drawImage(this.image, this.x-(this.width/2), this.y-(this.height/2), this.width, this.height);
        
        
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

// function health(MaxHealth, CurrentHealth, RegenerationRate){
//     if 
// }


function gameOver(){
    if(!godMode){
        for(var i = 0; i<=gameMusic.length-1; i++){
            gameMusic[i].pause();
        }
        showGameOver();
    }

}
function win(){

}
async function updateGameArea() {
            console.log("test");

    var thisFrameTime = (thisLoop=new Date) - lastLoop;
    frameTime+= (thisFrameTime - frameTime) / filterStrength;
    lastLoop = thisLoop;
    if (running == true){
        console.log("running");
        if (health<=maxHealth){
            health+=0.10;
    
        }
        HealthBar.value=health;
    
        if (health<=0){
            gameOver();
        }
        myGameArea.clear();
        gridModel.newPos();
        gridModel.update();
        playerModel.newPos();    
        playerModel.update();
    
        
    
    
        for (let i = 0; i <= bulletModels.length-1; i++){
            bulletModels[i].newPos();    
            bulletModels[i].update();
            if (bulletModels[i].hasCollision == true){
                if(playerModel.x > bulletModels[i].x - 20 && playerModel.x < bulletModels[i].x + 20){
                    if (playerModel.y < bulletModels[i].y + 20 && playerModel.y > bulletModels[i].y - 20){
                        if (immunityFrameTimer == 0){
                            await collisionDamage();
                            immunityFrameTimer = immunityFrames;
                        }
                    }
                }
    
            }
            if(bulletModels[i].isFerris == true){
                bulletModels[i].rotate(degreesRotation);
            }
    
        }
        for (let i = 0; i <= laserModels.length-1; i++){
            laserModels[i].newPos();    
            laserModels[i].update();
            if (laserModels[i].hasCollision == true){
                if (laserModels[i].bulletDirection == "l" ||laserModels[i].bulletDirection == "r"){
                    if(playerModel.x > laserModels[i].x - 1000 && playerModel.x < laserModels[i].x + 1000){
                        if (playerModel.y < laserModels[i].y + 30 && playerModel.y > laserModels[i].y - 30){
                            if (immunityFrameTimer == 0){
                                await collisionDamage();
                                immunityFrameTimer = immunityFrames;
                            }
                        }
                    }
                }
    
    
                if (laserModels[i].bulletDirection == "u" ||laserModels[i].bulletDirection == "d"){
                    if(playerModel.x > laserModels[i].x - 30 && playerModel.x < laserModels[i].x + 30){
                        if (playerModel.y > laserModels[i].y - 1000 && playerModel.y < laserModels[i].y + 1000){
    
                            if (immunityFrameTimer == 0){
    
                                await collisionDamage();
                                immunityFrameTimer = immunityFrames;
                            }
                        }
                    }
                }
            }
    
        }
    
        if (immunityFrameTimer >=1){
            immunityFrameTimer-=1;
        }
        var elapsedTime = Date.now() - startTime;
        document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
    }
    
}
function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

 async function collisionDamage(){

    health -= 25;
    hurtEffect.play();
    HealthBar.value=health;
    hitCounter+=1;

    hitCounterHTML.innerHTML = "Hits Taken: " + hitCounter;

}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

async function spawnBullet(type, ActivationTime, bulletLocation, bulletSpeed = 1, bulletDirection = "r", hasCollision = true, laserActivationTime=8, bulletsInCircle = 5, radius=1,rotationSpeed=1){ // types = basic, danger, circle
    var a = gameNumber;
    await wait(ActivationTime*1000);


    if (type == "basic"){
        bulletModels.push( new BulletComponent(a, 20, 20, "white", bulletLocation[0], bulletLocation[1]));
        if (bulletDirection == "r"){
            bulletModels[bulletModels.length-1].speedX = bulletSpeed;
        }
        else if (bulletDirection == "l"){
            bulletModels[bulletModels.length-1].speedX = -bulletSpeed;
        }
        else if (bulletDirection == "u"){
            bulletModels[bulletModels.length-1].speedY = -bulletSpeed;
        }
        else if (bulletDirection == "d"){
            bulletModels[bulletModels.length-1].speedY = bulletSpeed;
        }
    }
    else if (type == "danger"){
        var laserWidth = 20;
        var bulletState = laserModels.length-1;
        for (let i = -1; i<=laserActivationTime; i+=1){
            
            
            if (bulletDirection == "r" || bulletDirection == "l"){
                laserModels.push( new BulletComponent(a, 1200, laserWidth, "rgba(255,20,20,"+0.02*i+")", 400, (bulletLocation[1]), false));
                var bulletState = laserModels.length-1;

            }
            if (bulletDirection == "u" || bulletDirection == "d"){
                laserModels.push( new BulletComponent(a, laserWidth, 1200, "rgba(255,20,20,"+ 0.02*i+")", bulletLocation[0], 400, false));
                var bulletState = laserModels.length-1;

            }
            laserWidth +=1;
            await wait(50);
            laserModels.splice(bulletState, bulletState);
        }
        if (bulletDirection == "r" || bulletDirection == "l"){
            laserModels.push( new BulletComponent(a, 1200, 40, "rgba(255,20,20,1)", 380, bulletLocation[1], true, bulletDirection));

        }
        if (bulletDirection == "u" || bulletDirection == "d"){
            laserModels.push( new BulletComponent(a, 40, 1200, "rgba(255,20,20,1)", bulletLocation[0], 380, true, bulletDirection));

        }
        
        await wait(50);

        laserModels.splice(bulletState, bulletState);

        for (let i = 0; i<=15; i+=1){
            bulletState = laserModels.length-1;

            if (bulletDirection == "r" || bulletDirection == "l"){
                laserModels.push( new BulletComponent(a,1200, laserWidth-i*3, "rgba(255,255,255,"+1+")",400, bulletLocation[1], false));
                var bulletState = laserModels.length-1;

            }
            if (bulletDirection == "u" || bulletDirection == "d"){
                laserModels.push( new BulletComponent(a, laserWidth-i*3, 1200, "rgba(255,255,255,"+ 1+")", bulletLocation[0], 400, false));
                var bulletState = laserModels.length-1;

            }

            await wait(5);
            laserModels.splice(bulletState, bulletState);

        }

    }
    else if ( type == "ferris"){

        let a = [];
        degreesRotation.push(0);
        ferrisNumber +=1;

        var b = bulletModels.length-1;
        for(var i = b+1;  i <= bulletsInCircle+b; i+=1){
            bulletModels.push( new BulletComponent(gameNumber, 20, 20, "pink",bulletLocation[0],bulletLocation[1],true,bulletDirection, bulletsInCircle,true, bulletLocation,i, radius,rotationSpeed, bulletSpeed, ferrisNumber));

        }

        


    }
    else if (type == "win"){
        $("#GameScene").fadeOut();
        await wait (2000);
        winScreen();
    }


}


function main(){
    lt =[-10, 300] // left top
    lm = [-10, 390]//  left middle
    lb = [-10, 480] // left bottom
    rt = [810, 300] //top right
    rm = [810, 390]// middle right
    rb = [810, 480]// bottom right
    bl = [300, 810]// bottom bottom left
    bm = [390, 810]// bottom bottom middle
    br = [480, 810]//bottom bottom right
    tl =[300, -10]// top top left
    tm = [390, -10]// top top middle
    tr =[480, -10]//top top right

    topDanger = [0, 300]      // FOR HORIZONTAL DANGERS ONLY
    middleYDanger = [0, 390]  
    bottomDanger = [0, 480]

    leftDanger = [300, 0]    // FOR VERTICAL DANGERS ONLY
    middleXDanger = [390, 0]
    rightDanger = [480, 0]
    // spawnBullet("danger", 0, topDanger, 10, "r") ;
    if (gameLevel == 1){
        console.log(gameLevel);
        gameMusic[gameLevel-1].play();
        document.body.style.backgroundImage = "linear-gradient(180deg, rgba(100, 100, 100, 0.6) , black)";

        bulletScript1();
    }
    else if (gameLevel == 2) {
        gameMusic[gameLevel-1].play();
        document.body.style.backgroundImage = "linear-gradient(180deg, rgba(100, 100, 255, 0.05) , rgba(40,40,40))";

        bulletScript2();
    }
    else if (gameLevel == 3) {
        gameMusic[gameLevel-1].play();
        document.body.style.backgroundImage = "linear-gradient(180deg, rgba(100, 100, 255, 0.6) , rgba(255, 100, 100, 0.4))";

        bulletScript3();
    }
    else if (gameLevel == 4) {
        gameMusic[gameLevel].play();
        document.body.style.backgroundImage = "linear-gradient(180deg, rgba(255, 102, 0, 0.3) , rgba(255, 0, 0, 0.4))";

        bulletScript4();
    }

}

$(document).keydown(function(event) {
    var key = (event.keyCode ? event.keyCode : event.which);
    Right = ((canvasWidth/2)+(gridWidth/gridConstant) - (playerWidth/2)); 
    Left = ((canvasWidth/2)-(gridWidth/gridConstant) - (playerWidth/2)); 
    Up = ((canvasHeight/2) - (gridHeight/gridConstant) - (playerHeight/2));
    Down = ((canvasHeight/2) + (gridHeight/gridConstant) - (playerHeight/2));
    MiddleY = ((canvasHeight/2)- (playerHeight/gridConstant));
    MiddleX = ((canvasWidth/2) - (playerWidth/gridConstant)); 

    if (key === 65){ // A
        playerModel.x = Left; 
        playerModel.y = MiddleY;
        playerLocation = 4;
    }
    
    if (key === 68){ // D
        playerModel.x = Right; 
        playerModel.y = MiddleY;
        playerLocation = 6;

    }
    
    if (key === 87){ // W
        playerModel.x = MiddleX; 
        playerModel.y = Up;
        playerLocation = 2;
    }
    
    if (key === 88){ // X
        playerModel.x = MiddleX; 
        playerModel.y = Down;
        playerLocation = 8;
    }

    if (key === 81){ // Q
        playerModel.x = Left; 
        playerModel.y = Up;
        playerLocation = 1;
    }

    if (key === 69){ // E
        playerModel.x = Right; 
        playerModel.y = Up;
        playerLocation = 3;
    }
    
    if (key === 90){ // Z
        playerModel.x = Left; 
        playerModel.y = Down
        playerLocation = 7;
        
    }
    
    if (key === 67){ // C
        playerModel.x = Right; 
        playerModel.y = Down;
        playerLocation = 9;
    }

    if (key === 83){ // S
        playerModel.x = MiddleX; 
        playerModel.y = MiddleY;
        playerLocation = 5;

    }



});