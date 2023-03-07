var playerModel;
var playerHeight = 30;
var playerWidth = 30;
var degreesRotation;
var gameLevel;
var bulletModels = [];
var laserModels = [];
var i = 0;
var bulletHeight = 30;
var bulletWidth = 30;

var canvasHeight = 800;
var canvasWidth = 800;

var gridModel;
var gridHeight = 300;
var gridWidth = 300;
var gridOffsetX = 0;
var gridOffsetY = 0;
var gridConstant = 3.23;

var health = 100;
var maxHealth = 100;

var startTime = Date.now();
var immunityFrameTimer = 0;
var immunityFrames = 30;
var TitleScreen = document.getElementById("TitleScreen")
var GameScene = document.getElementById("GameScene")

grid = document.getElementById("grid");
playerImage = document.getElementById("playerSprite");
HealthBar = document.getElementById("Health");

function startGame(level) {
    startTime = Date.now();
    HealthBar.value = 100;
    gameLevel = level;
    TitleScreen.remove();
    GameScene.style.display = "block";

    playerModel = new imageComponent(playerImage, 30, 30, 400-(playerHeight/2), 400-(playerWidth/2));
    gridModel = new imageComponent(grid, gridHeight, gridWidth, ((canvasHeight/2) - (gridHeight/2)), ((canvasWidth/2) - (gridWidth/2)));


    myGameArea.start();
    main();
}

var myGameArea = {
   
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

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


function BulletComponent(width, height, color, x, y, hasCollision = true, bulletDirection = "l", bulletsInCircle =5, isFerris = false, bulletLocation=[], j=0, radius=1,rotationSpeed=1,bulletSpeed=1) {
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

    degreesRotation=0;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }        
    this.rotate = function(degreesRotation) {
        if (bulletDirection == "r"){
            bulletLocation[0]  += bulletSpeed;
        }
        else if (bulletDirection == "l"){
            bulletLocation[0]  += -bulletSpeed;
        }
        else if (bulletDirection == "u"){
            bulletLocation[1] += -bulletSpeed;
        }
        else if (bulletDirection == "d"){
            bulletLocation[1] += bulletSpeed;
        }
        bulletModels[j].x = bulletLocation[0] + (100*radius*(Math.cos(((rotationSpeed*degreesRotation+((360/bulletsInCircle)*j))*Math.PI/180)))); 
        bulletModels[j].y = bulletLocation[1] + (100*radius*(Math.sin(((rotationSpeed*degreesRotation+((360/bulletsInCircle)*j))*Math.PI/180))));  


        }


    }  



function FerrisSpin(bulletsInCircle, bulletLocation){

    for(let i = 0;  i <= bulletsInCircle; i+=1){
        bulletModels[i].x = bulletLocation[0] + (100*(Math.cos((degreesRotation*i)*Math.PI/180))); 
        bulletModels[i].y = bulletLocation[1] + (100*(Math.sin((degreesRotation*i)*Math.PI/180)));  
    }
}
function imageComponent(image, width, height, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    
    this.update = function() {
        ctx = myGameArea.context;

        ctx.drawImage(image, this.x, this.y, this.width, this.height);
        
        
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

}
function win(){

}
async function updateGameArea() {
    if (health<=maxHealth){
        health+=0.05;

    }
    HealthBar.value=health;

    if (health<=0){
        gameOver();
    }
    degreesRotation+=0.05;
    myGameArea.clear();
    gridModel.newPos();
    gridModel.update();
    playerModel.newPos();    
    playerModel.update();
    degreesRotation +=1;

    for (let i = 0; i <= bulletModels.length-1; i++){
        bulletModels[i].newPos();    
        bulletModels[i].update();
        if (bulletModels[i].hasCollision == true){
            if(playerModel.x > bulletModels[i].x - 30 && playerModel.x < bulletModels[i].x + 30){
                if (playerModel.y < bulletModels[i].y + 30 && playerModel.y > bulletModels[i].y - 30){
                    if (immunityFrameTimer == 0){
                        await collisionDamage();
                        immunityFrameTimer = immunityFrames;
                    }
                }
            }

        }
        if(bulletModels[i].isFerris == true){
            bulletModels[i].rotate(degreesRotation);
            console.log("9")
        }

    }
    for (let i = 0; i <= laserModels.length-1; i++){
        laserModels[i].newPos();    
        laserModels[i].update();
        if (laserModels[i].hasCollision == true){
            console.log("test");
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
                    if (playerModel.y < laserModels[i].y + 1000 && playerModel.y > laserModels[i].y - 1000){
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
function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

 async function collisionDamage(){
    health -= 15;
    HealthBar.value=health;

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
    await wait(ActivationTime*1000);


    if (type == "basic"){
        bulletModels.push( new BulletComponent(20, 20, "white", bulletLocation[0], bulletLocation[1]));
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
                laserModels.push( new BulletComponent(800, laserWidth, "rgba(255,20,20,"+0.02*i+")", 0, bulletLocation[1]-((laserWidth/2))/2, false));
                var bulletState = laserModels.length-1;

            }
            if (bulletDirection == "u" || bulletDirection == "d"){
                laserModels.push( new BulletComponent(laserWidth, 800, "rgba(255,20,20,"+ 0.02*i+")", bulletLocation[0]-((laserWidth/2)/2), 0, false));
                var bulletState = laserModels.length-1;

            }
            laserWidth +=1;
            await wait(50);
            laserModels.splice(bulletState, bulletState);
        }
        if (bulletDirection == "r" || bulletDirection == "l"){
            laserModels.push( new BulletComponent(800, 40, "rgba(255,20,20,1   )", 0, bulletLocation[1]-((40/2)/2), true));

        }
        if (bulletDirection == "u" || bulletDirection == "d"){
            laserModels.push( new BulletComponent(40, 800, "rgba(255,20,20,1)", bulletLocation[0]-((40/2)/2), 0, true));

        }
        
        await wait(50);

        laserModels.splice(bulletState, bulletState);

        for (let i = 0; i<=15; i+=1){
            bulletState = laserModels.length-1;

            if (bulletDirection == "r" || bulletDirection == "l"){
                laserModels.push( new BulletComponent(800, laserWidth-i*4, "rgba(255,255,255,"+1+")", 0, (bulletLocation[1]-((laserWidth/2))/2)+i*2, false));
                var bulletState = laserModels.length-1;

            }
            if (bulletDirection == "u" || bulletDirection == "d"){
                laserModels.push( new BulletComponent(laserWidth-i*4, 800, "rgba(255,255,255,"+ 1+")", (bulletLocation[0]-((laserWidth/2)/2))+i*2, 0, false));
                var bulletState = laserModels.length-1;

            }

            await wait(5);
            laserModels.splice(bulletState, bulletState);

        }

    }
    else if ("Ferris"){
        degreesRotation = 360/bulletsInCircle;
        console.log("ferris spanwed");
        let a = [];
        

        
        for(let i = bulletModels.length;  i <= bulletsInCircle+bulletModels.length; i+=1){
            bulletModels.push( new BulletComponent(20, 20, "pink",bulletLocation[0],bulletLocation[0],true,bulletDirection, bulletsInCircle,true, bulletLocation,i, radius,rotationSpeed, bulletSpeed));
            console.log("bulletSpanedFerris");
        }

        


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
    console.log(gameLevel);
    if (gameLevel == 1){
        bulletScript1();
    }
    else if (gameLevel == 2) {
        bulletScript2();
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
    }
    
    if (key === 68){ // D
        playerModel.x = Right; 
        playerModel.y = MiddleY;
    }
    
    if (key === 87){ // W
        playerModel.x = MiddleX; 
        playerModel.y = Up;
    }
    
    if (key === 88){ // X
        playerModel.x = MiddleX; 
        playerModel.y = Down;
    }

    if (key === 81){ // Q
        playerModel.x = Left; 
        playerModel.y = Up;
    }

    if (key === 69){ // E
        playerModel.x = Right; 
        playerModel.y = Up;
    }
    
    if (key === 90){ // Z
        playerModel.x = Left; 
        playerModel.y = Down
    }
    
    if (key === 67){ // C
        playerModel.x = Down; 
        playerModel.y = Right;
    }

    if (key === 83){ // S
        playerModel.x = MiddleX; 
        playerModel.y = MiddleY;
    }



});