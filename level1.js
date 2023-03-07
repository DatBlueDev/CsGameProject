function bulletScript1(){
    
    var audio = new Audio('gameMusic/Mittsies_Titanium.mp3');
    audio.play();
    



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

    spawnBullet("basic", 10.75, lt, 10, "r") ;
    spawnBullet("basic", 11.25, rm, 10, "l") ;
    spawnBullet("basic", 11.75, lb, 10, "r") ;

    for (let i = 13; i <= 20; i+=1){
        spawnBullet("basic", i, bl, 10, "u") ;
        spawnBullet("basic", i, br, 10, "u") ;
    }
    for (let i = 13; i <= 20; i+=1){
        spawnBullet("basic", i, rt, 10, "l") ;
        spawnBullet("basic", i, rb, 10, "l") ;
    }
    for (let i = 13; i <= 20; i+=1){
        spawnBullet("basic", i+0.5, lm, 10, "r") ;
        spawnBullet("basic", i+0.5, rm, 10, "l") ;
    }
    for (let i = 20; i <= 30; i+=0.2){
        spawnBullet("basic", i, lm, 5, "r") ;
        spawnBullet("basic", i, rm, 5, "l") ;

    }
    for (let i = 22; i <= 30; i+=1){
        spawnBullet("basic", i, tl, 15, "d") ;
        spawnBullet("basic", i, tm, 15, "d") ;
        spawnBullet("basic", i+0.5, br, 15, "u") ;
        spawnBullet("basic", i+0.5, bm, 15, "u") ;
    }
    spawnBullet("danger", 30, leftDanger, 10, "u") ;
    spawnBullet("danger", 30.5, middleXDanger, 10, "u") ;
    spawnBullet("danger", 31, rightDanger, 10, "u") ;


    for (let i = 34; i <= 38; i++){
        spawnBullet("basic", i, shuffle([tr,tm,tl])[0], 10, "d") ;
        spawnBullet("basic", i, shuffle([tr,tm,tl])[0], 10, "d") ;

        for(let j = i; j <= i; j+=1){
            spawnBullet("danger", j, bottomDanger, 10, "l");
        }
    
        for(let j = i; j<= i; j+=1){
            spawnBullet("danger", j, topDanger, 10, "l");
        }
    }
    for (let i = 39; i <=45; i++){

        spawnBullet("basic", i, shuffle([tr,tm,tl])[0], 10, "d") ;
        spawnBullet("basic", i, shuffle([tr,tm,tl])[0], 10, "d") ;

        for(let j = i; j <= i; j+=1){
            spawnBullet("danger", j, middleYDanger, 10, "l");
        }

        for(let j = i; j<= i; j+=1){
            spawnBullet("danger", j, topDanger, 10, "l");
        }

    }
}
function bulletScript2(){
    var audio = new Audio('gameMusic/rainyBoots.mp3');
    audio.play();
//type, ActivationTime, bulletLocation, bulletSpeed = 1, bulletDirection = "r", hasCollision = true, laserActivationTime=8, bulletsInCircle = 5, radius=1,rotationSpeed=1){ // types = basic, danger, circle

    //spawnBullet("Ferris", 0, [400,400], 1, "l",true,0,5,1,1);
    spawnBullet("Ferris", 0, [400,400], 1, "l",true,0,5,1,1);





}