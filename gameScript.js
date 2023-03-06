var playerModel;
var playerHeight = 30;
var playerWidth = 30;

var bulletModels = [];
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
var startTime = Date.now();
var immunityFrameTimer = 0;
var immunityFrames = 50;
var audio = new Audio('gameMusic/Mittsies_Titanium.mp3');
var TitleScreen = document.getElementById("TitleScreen")
var GameScene = document.getElementById("GameScene")

grid = document.getElementById("grid");
playerImage = document.getElementById("playerSprite");
HealthBar = document.getElementById("Health");

function startGame() {
    startTime = Date.now();
    HealthBar.value = 100;

    TitleScreen.remove();
    GameScene.style.display = "block";

    playerModel = new imageComponent(playerImage, 30, 30, 400-(playerHeight/2), 400-(playerWidth/2));
    gridModel = new imageComponent(grid, gridHeight, gridWidth, ((canvasHeight/2) - (gridHeight/2)), ((canvasWidth/2) - (gridWidth/2)));
    audio.play();
    

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

function BulletComponent(width, height, color, x, y, hasCollision = true) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.hasCollision = hasCollision;    

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



async function updateGameArea() {

    myGameArea.clear();
    gridModel.newPos();
    gridModel.update();
    playerModel.newPos();    
    playerModel.update();
    
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
    HealthBar.value-=15;

}

async function spawnBullet(type, ActivationTime, bulletLocation, bulletSpeed = 5, bulletDirection = "r", hasCollision = true, bulletsInCircle = 5){ // types = basic, danger, circle
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
        var bulletState = bulletModels.length-1;
        for (let i = -1; i<=8; i+=1){
            
            if (bulletDirection == "r" || bulletDirection == "l"){
                bulletModels.push( new BulletComponent(800, laserWidth, "rgba(255,20,20,"+0.02*i+")", 0, bulletLocation[1]-((laserWidth/2))/2, false));
                var bulletState = bulletModels.length-1;

            }
            if (bulletDirection == "u" || bulletDirection == "d"){
                bulletModels.push( new BulletComponent(laserWidth, 800, "rgba(255,20,20,"+ 0.02*i+")", bulletLocation[0]-((laserWidth/2)/2), 0, false));
                var bulletState = bulletModels.length-1;

            }
            laserWidth +=1;
            await wait(50);
            bulletModels.splice(bulletState, bulletState);
        }
        if (bulletDirection == "r" || bulletDirection == "l"){
            bulletModels.push( new BulletComponent(800, 40, "rgba(255,20,20,1   )", 0, bulletLocation[1]-((40/2)/2), true));

        }
        if (bulletDirection == "u" || bulletDirection == "d"){
            bulletModels.push( new BulletComponent(40, 800, "rgba(255,20,20,1)", bulletLocation[0]-((40/2)/2), 0, true));

        }
        
        await wait(10);

        bulletModels.splice(bulletState, bulletState);

        for (let i = 0; i<=10; i+=1){
            bulletState = bulletModels.length-1;

            if (bulletDirection == "r" || bulletDirection == "l"){
                bulletModels.push( new BulletComponent(800, laserWidth-i*4, "rgba(255,20,20,"+1-(0.1*i)+")", 0, (bulletLocation[1]-((laserWidth/2))/2)+i*2, false));
                var bulletState = bulletModels.length-1;

            }
            if (bulletDirection == "u" || bulletDirection == "d"){
                bulletModels.push( new BulletComponent(laserWidth-i*4, 800, "rgba(255,20,20,"+ 1-(0.02*i)+")", (bulletLocation[0]-((laserWidth/2)/2))+i*2, 0, false));
                var bulletState = bulletModels.length-1;

            }

            await wait(10);
            bulletModels.splice(bulletState, bulletState);

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
 

    spawnBullet("basic", 0, lt, 10, "r") ;
    spawnBullet("basic", 1.75, rm, 10, "l") ;
    spawnBullet("basic", 3.5,lb, 10, "r") ;

    spawnBullet("basic", 5.00, bl, 10, "u") ;
    spawnBullet("basic", 5.00, br, 10, "u") ;
    for (let i = 6.50; i <= 12; i+=0.5){
        spawnBullet("basic", i, bl, 10, "u") ;
        spawnBullet("basic", i, br, 10, "u") ;
    }

    spawnBullet("basic", 6.4, rt, 10, "l") ;
    spawnBullet("basic", 6.75, lm, 10, "r") ;
    spawnBullet("basic", 7.25, rb, 10, "l") ;

    spawnBullet("basic", 7.75, lt, 10, "r") ;
    spawnBullet("basic", 8.25, rm, 10, "l") ;
    spawnBullet("basic", 8.75, lb, 10, "r") ;

    spawnBullet("basic", 9.25, rt, 10, "l") ;
    spawnBullet("basic", 9.75, lm, 10, "r") ;
    spawnBullet("basic", 10.25, rb, 10, "l") ;

    spawnBullet("basic", 10.75, [-10, 300], 10, "r") ;
    spawnBullet("basic", 11.25, [810, 390], 10, "l") ;
    spawnBullet("basic", 11.75, [-10, 480], 10, "r") ;

    for (let i = 13; i <= 20; i+=1){
        spawnBullet("basic", i, [300, 810], 10, "u") ;
        spawnBullet("basic", i, [480, 810], 10, "u") ;
    }
    for (let i = 13; i <= 20; i+=1){
        spawnBullet("basic", i, [810, 300], 10, "l") ;
        spawnBullet("basic", i, [810, 480], 10, "l") ;
    }
    for (let i = 13; i <= 20; i+=1){
        spawnBullet("basic", i+0.5, [-10, 390], 10, "r") ;
        spawnBullet("basic", i+0.5, [810, 390], 10, "l") ;
    }
    for (let i = 20; i <= 30; i+=0.2){
        spawnBullet("basic", i, lm, 5, "r") ;
        spawnBullet("basic", i, rm, 5, "l") ;

    }
    for (let i = 22; i <= 30; i+=2){
        spawnBullet("basic", i, tl, 15, "d") ;
        spawnBullet("basic", i, tm, 15, "d") ;
        spawnBullet("basic", i+0.6, br, 15, "u") ;
        spawnBullet("basic", i+0.6, bm, 15, "u") ;
    }
    spawnBullet("danger", 30, leftDanger, 10, "u") ;
    spawnBullet("danger", 30.5, middleXDanger, 10, "u") ;
    spawnBullet("danger", 31, rightDanger, 10, "u") ;

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