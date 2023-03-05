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

var audio = new Audio('gameMusic/Mittsies_Titanium.mp3');
var TitleScreen = document.getElementById("TitleScreen")

grid = document.getElementById("grid");
function startGame() {
    startTime = Date.now();

    TitleScreen.remove();
    playerModel = new component(30, 30, "blue", 400-(playerHeight/2), 400-(playerWidth/2));
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

function BulletComponent(width, height, color, x, y) {
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



function updateGameArea() {

    myGameArea.clear();
    gridModel.newPos();
    gridModel.update();
    playerModel.newPos();    
    playerModel.update();
    for (let i = 0; i <= bulletModels.length-1; i++){
        bulletModels[i].newPos();    
        bulletModels[i].update();

    }
    var elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
}
function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

async function spawnBullet(type, ActivationTime, bulletLocation, bulletAngle, bulletSpeed = 5, DangerTimeUntilAttack = 2, bulletsInCircle = 5){ // types = basic, danger, circle
    await wait(ActivationTime*1000);
    bulletModels.push( new BulletComponent(20, 20, "white", bulletLocation[0], bulletLocation[1]));
    console.log(bulletModels[0]);

    bulletModels[bulletModels.length-1].speedX = bulletSpeed;

}


function main(){
    spawnBullet("basic", 0, [5, 20], 90, 5) ;
    spawnBullet("basic", 2, [30, 40], 90, 5) ;
}

$(document).keydown(function(event) {
    var key = (event.keyCode ? event.keyCode : event.which);
    console.log(key);
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