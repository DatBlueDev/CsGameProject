function bulletScript1(){
    

    



    spawnBullet("basic", 0, lt, 10, "r") ;
    spawnBullet("basic", 1.75, rm, 10, "l") ;
    spawnBullet("basic", 3.5,lb, 10, "r") ;

    spawnBullet("basic", 5.00, bl, 10, "u") ;
    spawnBullet("basic", 5.00, br, 10, "u") ;
    for (let i = 7; i <= 12; i+=0.5){
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


    for (let i = 34; i < 40; i++){
        spawnBullet("basic", i, shuffle([tr,tm,tl])[0], 10, "d") ;
        spawnBullet("basic", i, shuffle([tr,tm,tl])[0], 10, "d") ;

        for(let j = i; j <= i; j+=1){
            spawnBullet("danger", j, bottomDanger, 10, "l");
        }
    
        for(let j = i; j<= i; j+=1){
            spawnBullet("danger", j, topDanger, 10, "l");
        }
    }
    for (let i = 40; i <=45; i++){

        spawnBullet("basic", i, shuffle([tr,tm,tl])[0], 10, "d") ;
        spawnBullet("basic", i, shuffle([tr,tm,tl])[0], 10, "d") ;

        for(let j = i; j <= i; j+=1){
            spawnBullet("danger", j, middleYDanger, 10, "l");
        }

        for(let j = i; j<= i; j+=1){
            spawnBullet("danger", j, topDanger, 10, "l");
        }

    }
    spawnBullet("win", 50, rb, 6, "l");


}
function bulletScript2(){

    
    for(var i =1.7; i <= 14.2; i+=0.1){
        spawnBullet("basic", i, rb, 10, "l");

    }    
    for(var i =3.4; i <= 14.2; i+=0.1){
        spawnBullet("basic", i, lt, 10, "r");

    }

    spawnBullet("danger", 4, leftDanger, 10, "u");
    spawnBullet("danger", 4+0.5*1, middleXDanger, 10, "u");
    spawnBullet("danger", 4+0.5*2, rightDanger, 10, "u");
    spawnBullet("danger", 4+0.5*3, middleXDanger, 10, "u");
    spawnBullet("danger", 4+0.5*4, leftDanger, 10, "u");
    spawnBullet("danger", 4+0.5*5, middleXDanger, 10, "u");
    spawnBullet("danger", 4+0.5*6, rightDanger, 10, "u");

    for(var i =7; i <= 11; i+=0.1){
        spawnBullet("basic", i, tr, 10, "d");

    }    
    for(var i =7; i <= 10.7; i+=0.9){
        spawnBullet("basic", i,tm, 8, "d");

    }

    for(var i =7; i <= 10.7; i+=0.9){
        spawnBullet("basic", i+0.5, bl, 8, "u");

    }
    
    spawnBullet("danger", 11, rightDanger, 10, "u");
    spawnBullet("danger", 11+0.5*1, middleXDanger, 10, "u");
    spawnBullet("danger", 11+0.5*2, leftDanger, 10, "u");
    spawnBullet("danger", 11+0.5*3, middleXDanger, 10, "u");
    spawnBullet("danger", 11+0.5*4, rightDanger, 10, "u");
    spawnBullet("danger", 11+0.5*5, middleXDanger, 10, "u");
    spawnBullet("danger", 11+0.5*6, leftDanger, 10, "u");

    spawnBullet("ferris", 14.1, [rb[0]+400, rb[1]], 7, "l", true, 0,9,1,7);
    spawnBullet("ferris", 14.1, [tl[0], tl[1]-400], 7, "d", true, 0,9,1,7);

    spawnBullet("ferris", 14.1, [lt[0]-900, lt[1]], 7, "r", true, 0,9,1,7);
    spawnBullet("ferris", 14.1, [br[0], br[1]+900], 7, "u", true, 0,9,1,7);

    spawnBullet("basic", 18, rt, 5, "l");
    spawnBullet("basic", 18, rm, 5, "l");
    spawnBullet("basic", 18.5, rt, 5, "l");
    spawnBullet("basic", 18.5, rb, 5, "l");
    spawnBullet("basic", 19, rb, 5, "l");
    spawnBullet("basic", 19, rm, 5, "l");
    spawnBullet("basic", 19.5, rt, 5, "l");
    spawnBullet("basic", 19.5, rb, 5, "l");
    spawnBullet("basic", 20, rt, 5, "l");
    spawnBullet("basic", 20, rm, 5, "l");
    spawnBullet("basic", 20.5, rb, 5, "l");
    spawnBullet("basic", 20.5, rm, 5, "l");
    spawnBullet("basic", 21, rt, 5, "l");
    spawnBullet("basic", 21, rm, 5, "l");
    spawnBullet("basic", 21.5, rb, 5, "l");
    spawnBullet("basic", 21.5, rm, 5, "l");
    spawnBullet("basic", 22, rt, 5, "l");
    spawnBullet("basic", 22, rb, 5, "l");
    spawnBullet("basic", 22.5, rt, 5, "l");
    spawnBullet("basic", 22.5, rm, 5, "l");
    spawnBullet("basic", 23.0, rb, 5, "l");
    spawnBullet("basic", 23.0, rm, 5, "l");


    spawnBullet("basic", 24, lt, 5, "r");
    spawnBullet("basic", 24, lm, 5, "r");
    spawnBullet("basic", 24.1, lt, 5, "r");
    spawnBullet("basic", 24.1, lm, 5, "r");
    spawnBullet("basic", 24.5, lt, 5, "r");
    spawnBullet("basic", 24.5, lb, 5, "r");
    spawnBullet("basic", 24.6, lt, 5, "r");
    spawnBullet("basic", 24.6, lb, 5, "r");
    spawnBullet("basic", 25, lb, 5, "r");
    spawnBullet("basic", 25, lm, 5, "r");
    spawnBullet("basic", 25.1, lb, 5, "r");
    spawnBullet("basic", 25.1, lm, 5, "r");
    spawnBullet("basic", 25.5, lt, 5, "r");
    spawnBullet("basic", 25.5, lb, 5, "r");
    spawnBullet("basic", 25.6, lt, 5, "r");
    spawnBullet("basic", 25.6, lb, 5, "r");
    spawnBullet("basic", 26, lt, 5, "r");
    spawnBullet("basic", 26, lm, 5, "r");
    spawnBullet("basic", 26.1, lt, 5, "r");
    spawnBullet("basic", 26.1, lm, 5, "r");
    spawnBullet("basic", 26.5, lb, 5, "r");
    spawnBullet("basic", 26.5, lm, 5, "r");
    spawnBullet("basic", 26.6, lb, 5, "r");
    spawnBullet("basic", 26.6, lm, 5, "r");

    spawnBullet("basic", 27, lt, 5, "r");
    spawnBullet("basic", 27, lm, 5, "r");
    spawnBullet("basic", 27.1, lt, 5, "r");
    spawnBullet("basic", 27.1, lm, 5, "r");
    spawnBullet("basic", 27.5, lb, 5, "r");
    spawnBullet("basic", 27.5, lm, 5, "r");
    spawnBullet("basic", 27.6, lb, 5, "r");
    spawnBullet("basic", 27.6, lm, 5, "r");
    spawnBullet("basic", 28, lt, 5, "r");
    spawnBullet("basic", 28, lt, 5, "r");
    spawnBullet("basic", 28.1, lt, 5, "r");
    spawnBullet("basic", 28.1, lm, 5, "r");
    spawnBullet("basic", 28.5, lt, 5, "r");
    spawnBullet("basic", 28.5, lm, 5, "r");
    spawnBullet("basic", 28.6, lt, 5, "r");
    spawnBullet("basic", 28.6, lm, 5, "r");
    spawnBullet("basic", 29.0, lb, 5, "r");
    spawnBullet("basic", 29.0, lm, 5, "r");
    spawnBullet("basic", 29.1, lb, 5, "r");
    spawnBullet("basic", 29.1, lm, 5, "r");


    for (let i = 31; i <43; i+=1.5){
        spawnBullet("basic", i, tl, 5, "d");
        spawnBullet("basic", i, tm, 5, "d");
        spawnBullet("basic", i, tr, 5, "d");

    }
    for (let i = 44; i <56; i++){
        spawnBullet("basic", i, bl, 7, "u");
        spawnBullet("basic", i, bm, 7, "u");
        spawnBullet("basic", i, br, 7, "u");
        spawnBullet("danger", i, topDanger, 10, "l");

    }
    for (let i = 58; i <61; i+=1.6){
  
        spawnBullet("danger", i, leftDanger, 10, "u");
        spawnBullet("danger", i, middleXDanger, 10, "u");
        spawnBullet("danger", i+0.8, rightDanger, 10, "u");
        spawnBullet("danger", i+0.8, middleXDanger, 10, "u");

    }
    for (let i = 61; i <=64; i+=1.6){
  
        spawnBullet("danger", i, topDanger, 10, "l");
        spawnBullet("danger", i, middleYDanger, 10, "l");
        spawnBullet("danger", i+0.8, bottomDanger, 10, "l");
        spawnBullet("danger", i+0.8, middleYDanger, 10, "l");

    }
    spawnBullet("ferris", 65, [lt[0]-900, lt[1]], 8, "r", true, 0,16,1,2);

    spawnBullet("danger", 71.02, leftDanger, 10, "u");
    spawnBullet("danger", 71, middleXDanger, 10, "u");
    spawnBullet("danger", 71, topDanger, 10, "l");
    spawnBullet("danger", 71, middleYDanger, 10, "l");

    spawnBullet("danger", 71.8, rightDanger, 10, "u");
    spawnBullet("danger", 71.8, middleXDanger, 10, "u");
    spawnBullet("danger", 71.8, topDanger, 10, "l");
    spawnBullet("danger", 71.8, middleYDanger, 10, "l");

    spawnBullet("danger", 72.6, rightDanger, 10, "u");
    spawnBullet("danger", 72.6, middleXDanger, 10, "u");
    spawnBullet("danger", 72.6, bottomDanger, 10, "l");
    spawnBullet("danger", 72.6, middleYDanger, 10, "l");

    spawnBullet("danger", 73.4, leftDanger, 10, "u");
    spawnBullet("danger", 73.4, middleXDanger, 10, "u");
    spawnBullet("danger", 73.4, bottomDanger, 10, "l");
    spawnBullet("danger", 73.4, middleYDanger, 10, "l");

    for(let i = 73.8; i<=75.4; i+=0.2){
        spawnBullet("basic", i, bl, 5, "u");
        spawnBullet("basic", i, tr, 5, "d");
        spawnBullet("basic", i, tl, 5, "d");
        spawnBullet("basic", i, br, 5, "u");
    }


    spawnBullet("danger", 74.5, topDanger, 10, "l");
    for(var j = 6; j <=16; j++){
        spawnBullet("basic", 74.8, lt, j, "r");
        spawnBullet("basic", 74.8, rt, j, "l");

    }
    spawnBullet("danger", 76.3, bottomDanger, 10, "l");

    for(var j = 6; j <=16; j++){
        spawnBullet("basic", 76.4, lb, j, "r");
        spawnBullet("basic", 76.4, rb, j, "l");

    }
    spawnBullet("basic", 74.1, lb, 7, "r");
    spawnBullet("basic", 74.5, rm, 7, "l");
    spawnBullet("basic", 74.9, lb, 7, "r");
    spawnBullet("basic", 75.3, rm, 7, "l");

    spawnBullet("basic", 75.7, lt, 7, "r");
    spawnBullet("basic", 76.1, rm, 7, "l");
    spawnBullet("basic", 76.5, lt, 7, "r");
    spawnBullet("basic", 76.9, rm, 7, "l");



    for(var j = 6; j <=16; j++){
        spawnBullet("basic", 77.4, lb, j, "r");
        spawnBullet("basic", 77.4, rb, j, "l");
    }
    for(var j = 6; j <=16; j++){
        spawnBullet("basic", 78.4, lm, j, "r");
        spawnBullet("basic", 78.4, rm, j, "l");
    }
    for(var j = 6; j <=16; j++){
        spawnBullet("basic", 79.4, lt, j, "r");
        spawnBullet("basic", 79.4, rt, j, "l");
    }
    for(var j = 6; j <=16; j++){
        spawnBullet("basic", 80.4, lt, j, "r");
        spawnBullet("basic", 80.4, rt, j, "l");

        spawnBullet("basic", 80.4, lb, j, "r");
        spawnBullet("basic", 80.4, rb, j, "l");
        
    }
    for(var i = 80.9; i <=84; i+=0.2){
        spawnBullet("basic", i, lt, 6, "r");
        spawnBullet("basic", i, rt, 6, "l");
        spawnBullet("basic", i, lb, 6, "r");
        spawnBullet("basic", i, rb, 6, "l");
    }

    for(var i =80.9; i <= 82.2; i+=0.9){
        spawnBullet("basic", i,tm, 10, "d");

    }

    for(var i =80.9; i <= 82.2; i+=0.9){
        spawnBullet("basic", i+0.5, bl, 10, "u");

    }
    for(var i =82.2; i <= 84.7; i+=0.9){
        spawnBullet("basic", i, tr, 10, "d");

    }

    for(var i =82.2; i <= 84; i+=0.9){
        spawnBullet("basic", i+0.5, bm, 10    , "u");

    }
    
    for(var j = 6; j <=16; j++){
        spawnBullet("basic", 81, tr, j, "d");
        spawnBullet("basic", 81, br, j, "u");

    }
    for(var j = 6; j <=16; j++){
        spawnBullet("basic", 83, tl, j, "d");
        spawnBullet("basic", 83, bl, j, "u");

    }

    spawnBullet("ferris", 84.5, [lt[0]-200, lt[1]], 9, "r", true, 0,5,0.8,11);
    spawnBullet("ferris", 85, [tr[0], tr[1]-200], 9, "d", true, 0,5,0.8,11);
    spawnBullet("ferris", 85.5, [rb[0]+200, rb[1]], 9, "l", true, 0,5,0.8,11);
    spawnBullet("ferris", 86, [bl[0], bl[1]+200], 9, "u", true, 0,5,0.8,11);
    spawnBullet("ferris", 86.5, [lt[0]-200, lt[1]], 9, "r", true, 0,5,0.8,11);
    spawnBullet("ferris", 87.5, [rm[0]+200, rm[1]], 5, "l", true, 0,15,1.5,6);

    spawnBullet("basic", 91.2, rt, 14, "l");
    spawnBullet("basic", 91.2, rm, 14, "l");

    spawnBullet("basic", 91.7, lb, 14, "r");
    spawnBullet("basic", 91.7, lm, 14, "r");

    spawnBullet("basic", 92.2, rt, 14, "l");
    spawnBullet("basic", 92.2, rm, 14, "l");

    spawnBullet("basic", 92.7, lb, 14, "r");
    spawnBullet("basic", 92.7, lm, 14, "r");

    spawnBullet("basic", 93.2, rt, 14, "l");
    spawnBullet("basic", 93.2, rm, 14, "l");
//
    spawnBullet("basic", 94.4, tr, 14, "d");
    spawnBullet("basic", 94.4, tm, 14, "d");

    spawnBullet("basic", 94.9, rm, 14, "l");
    spawnBullet("basic", 94.9, rb, 14, "l");

    spawnBullet("basic", 95.4, bl, 14, "u");
    spawnBullet("basic", 95.4, bm, 14, "u");

    spawnBullet("basic", 95.9, lt, 14, "r");
    spawnBullet("basic", 95.9, lm, 14, "r");

    spawnBullet("basic", 96.4, rb, 14, "l");
    spawnBullet("basic", 96.4, rt, 14, "l");

    spawnBullet("basic", 96.9, rm, 14, "l");
    spawnBullet("basic", 96.9, lm, 14, "r");


    spawnBullet("danger", 97.5, rightDanger, 10, "u");
    spawnBullet("danger", 98, middleXDanger, 10, "u");
    spawnBullet("danger", 98.5, leftDanger, 10, "u");
    spawnBullet("danger", 99, middleXDanger, 10, "u");
    spawnBullet("danger", 99.5, rightDanger, 10, "u");
    spawnBullet("danger", 100, middleXDanger, 10, "u");
    spawnBullet("danger", 100.5, leftDanger, 10, "u");
    spawnBullet("danger", 101, middleXDanger, 10, "u");
    spawnBullet("danger", 101.5, rightDanger, 10, "u");
    spawnBullet("danger", 102, middleXDanger, 10, "u");
    spawnBullet("danger", 102.5, leftDanger, 10, "u");
    spawnBullet("danger", 103, middleXDanger, 10, "u");
    spawnBullet("danger", 103.5, rightDanger, 10, "u");
    spawnBullet("danger", 104, middleXDanger, 10, "u");

    spawnBullet("danger", 104.5, bottomDanger, 10, "l");
    spawnBullet("danger", 105, middleYDanger, 10, "l");
    spawnBullet("danger", 105.5, topDanger, 10, "l");
    spawnBullet("danger", 106, middleYDanger, 10, "l");
    spawnBullet("danger", 106.5, bottomDanger, 10, "l");
    spawnBullet("danger", 107, middleYDanger, 10, "l");
    spawnBullet("danger", 107.5, topDanger, 10, "l");
    spawnBullet("danger", 108, middleYDanger, 10, "l");
    spawnBullet("danger", 108.5, bottomDanger, 10, "l");
    spawnBullet("danger", 109, middleYDanger, 10, "l");

    spawnBullet("win", 112, middleYDanger, 10, "l");

    godMode=true;

}


function bulletScript3(){
    spawnBullet("basic",0.2, rm, 5, "l");
    spawnBullet("basic",1.5, lb, 5, "r");
    spawnBullet("basic",2.8, rt, 5, "l");

    spawnBullet("basic",2.8, rt, 5, "l");
    spawnBullet("basic",6, rb, 5, "l");
    spawnBullet("basic",6, rm, 5, "l");

    spawnBullet("basic",7.5, lt, 5, "r");
    spawnBullet("basic",7.5, lm, 5, "r");

    spawnBullet("basic",9, bl, 5, "u");
    spawnBullet("basic",9, br, 5, "u");

    spawnBullet("basic",9, rt, 5, "l");
    spawnBullet("basic",9, rb, 5, "l");

    spawnBullet("basic",13, bl, 5, "u");
    spawnBullet("basic",13.4, rt, 5, "l");
    spawnBullet("basic",13.8, tr, 5, "d");
    spawnBullet("basic",13.8, lb, 5, "r");
    spawnBullet("basic",14.8, lm, 5, "r");
    spawnBullet("basic",14.8, rm, 5, "l");
    spawnBullet("danger", 15.8, middleYDanger, 10, "l");

    spawnBullet("basic",19.4, rm, 5, "l");
    spawnBullet("basic",19.4, rt, 5, "l");

    spawnBullet("basic",20, tl, 5, "d");
    spawnBullet("basic",20, tm, 5, "d");

    spawnBullet("basic",21.6, lm, 5, "r");
    spawnBullet("basic",21.6, lb, 5, "r");

    spawnBullet("basic",22.2, br, 5, "u");
    spawnBullet("basic",22.2, bm, 5, "u");

    spawnBullet("basic",25.2, rb, 7, "l");
    spawnBullet("basic",25.8, rb, 7, "l");
    spawnBullet("basic",26.8, lm, 7, "r");
    spawnBullet("basic",27.4, lm, 7, "r");
    spawnBullet("basic",28.4, rt, 7, "l");
    spawnBullet("basic",29, rt  , 7, "l");

    spawnBullet("ferris", 32, [rb[0]+200, rb[1]], 5, "l", true, 0,7,1,7);
    spawnBullet("ferris", 35, [lt[0]-200, lt[1]], 5, "r", true, 0,7,1,7);

    spawnBullet("ferris", 38, [bl[0], bl[1]+200], 5, "u", true, 0,7,1,7);
    spawnBullet("ferris", 41, [tr[0], tr[1]-200], 5, "d", true, 0,7,1,7);
    startTime = 0;

    var part2=26; 
    spawnBullet("basic",45 , bm, 5, "u");
    spawnBullet("danger", 45.9 , middleXDanger, 10, "u");
    spawnBullet("basic",45 , tm, 5, "d");

    spawnBullet("basic",45 , lm, 5, "r");
    spawnBullet("danger",46.1 , middleYDanger, 10, "l");
    spawnBullet("basic",45 , rm, 5, "l");

    spawnBullet("basic",48 , lt, 5, "r");
    spawnBullet("basic",48 , rt, 5, "l");
    spawnBullet("basic",48 , lm, 5, "r");
    spawnBullet("basic",48 , rm, 5, "l");

    spawnBullet("basic",49.3 , lb, 5, "r");
    spawnBullet("basic",49.3 , rb, 5, "l");
    spawnBullet("basic",49.3 , lm, 5, "r");
    spawnBullet("basic",49.3 , rm, 5, "l");

    spawnBullet("basic",51.33 , rb, 5, "l");
    spawnBullet("basic",51.66 , rm, 5, "l");
    spawnBullet("basic",52 , rt, 5, "l");
    spawnBullet("basic",52.33 , rm, 5, "l");
    spawnBullet("basic",52.66 , rb, 5, "l");

    spawnBullet("basic",54 , tl, 5, "d");
    spawnBullet("basic",54 , bl, 5, "u");
    spawnBullet("basic",54 , tr, 5, "d");
    spawnBullet("basic",54 , br, 5, "u");

    spawnBullet("basic",55.3 , tr, 5, "d");
    spawnBullet("basic",55.3 , br, 5, "u");
    spawnBullet("basic",55.3 , tm, 5, "d");
    spawnBullet("basic",55.3 , bm, 5, "u");
    spawnBullet("ferris", 56, [tl[0], tl[1]-200], 4, "d", true, 0,11,1,4);

    spawnBullet("basic",60.3 , br, 5, "u");
    spawnBullet("basic",60.3 , bm, 5, "u");
    spawnBullet("basic",61.4 , bl, 5, "u");
    spawnBullet("basic",61.4 , bm, 5, "u");

    spawnBullet("basic",63.5 , rb, 5, "l");
    spawnBullet("basic",63.5 , rm, 5, "l");
    spawnBullet("basic",64.6 , lt, 5, "r");
    spawnBullet("basic",64.6 , lm, 5, "r");
    spawnBullet("basic",66.33 , rb, 5, "l");
    spawnBullet("basic",66.66 , rm, 5, "l");
    spawnBullet("basic",67 , rt, 5, "l");
    spawnBullet("basic",67.33 , rm, 5, "l");
    spawnBullet("basic",67.66 , rb, 5, "l");

    spawnBullet("ferris", 68.5, [tr[0], tr[1]-200], 4, "d", true, 0,11,1,4);



    spawnBullet("basic",48+part2 , rt, 5, "l");
    spawnBullet("basic",48+part2 , lt, 5, "r");
    spawnBullet("basic",48+part2 , rm, 5, "l");
    spawnBullet("basic",48+part2 , lm, 5, "r");

    spawnBullet("basic",49.3+part2 , rb, 5, "l");
    spawnBullet("basic",49.3+part2 ,lb, 5, "r");
    spawnBullet("basic",49.3 +part2, rm, 5, "l");
    spawnBullet("basic",49.3 +part2, lm, 5, "r");

    spawnBullet("basic",51.33+part2 , lb, 5, "r");
    spawnBullet("basic",51.66+part2 , lm, 5, "r");
    spawnBullet("basic",52 +part2, lt, 5, "r");
    spawnBullet("basic",52.33+part2 ,lm, 5, "r");
    spawnBullet("basic",52.66+part2 , lb, 5, "r");

    spawnBullet("basic",54+part2 , tr, 5, "d");
    spawnBullet("basic",54+part2 , br, 5, "u");
    spawnBullet("basic",54+part2 , tl, 5, "d");
    spawnBullet("basic",54 +part2, bl, 5, "u");

    spawnBullet("basic",55.3 +part2, tl, 5, "d");
    spawnBullet("basic",55.3 +part2, bl, 5, "u");
    spawnBullet("basic",55.3+part2 , tm, 5, "d");
    spawnBullet("basic",55.3+part2 , bm, 5, "u");
    spawnBullet("ferris", 56+part2, [tr[0], tr[1]-200], 4, "d", true, 0,11,1,4);

    spawnBullet("basic",60.3+part2 , bl, 5, "u");
    spawnBullet("basic",60.3+part2 , bm, 5, "u");
    spawnBullet("basic",61.4+part2 , br, 5, "u");
    spawnBullet("basic",61.4+part2 , bm, 5, "u");

    spawnBullet("basic",63.5+part2 , lb, 5, "r");
    spawnBullet("basic",63.5+part2 , lm, 5, "r");
    spawnBullet("basic",64.6+part2 , rt, 5, "l");
    spawnBullet("basic",64.6+part2 , rm, 5, "l");
    spawnBullet("basic",66.33+part2 , lb, 5, "r");
    spawnBullet("basic",66.66+part2 , lm, 5, "r");
    spawnBullet("basic",67+part2 , lt, 5, "r");
    spawnBullet("basic",67.33 +part2, lm, 5, "r");
    spawnBullet("basic",67.66+part2 , lb, 5, "r");

    spawnBullet("ferris", 68.5+part2, [tl[0], tl[1]-200], 4, "d", true, 0,11,1,4);

    spawnBullet("win",100 , lb, 5, "r");

}
function bulletScript4(){


    spawnBullet("basic",0.22-0.20, rt, 14, "l")
    spawnBullet("basic",0.32-0.20, rt, 14, "l")
    spawnBullet("basic",0.42-0.20, rt, 14, "l")

    spawnBullet("basic",0.64-0.20, rm, 14, "l")
    spawnBullet("basic",0.74-0.20, rm, 14, "l")
    spawnBullet("basic",0.84-0.20, rm, 14, "l")

    spawnBullet("basic",1.06-0.20, rb, 14, "l")
    spawnBullet("basic",1.16-0.20, rb, 14, "l")
    spawnBullet("basic",1.26-0.20, rb, 14, "l")

    spawnBullet("basic",1.4-0.20, rt, 14, "l")
    spawnBullet("basic",1.6-0.20, rm, 14, "l")
    spawnBullet("basic",1.8-0.20, rb, 14, "l")

    spawnBullet("basic",2.22-0.25, lt, 14, "r")
    spawnBullet("basic",2.32-0.25, lt, 14, "r")
    spawnBullet("basic",2.42-0.25, lt, 14, "r")

    spawnBullet("basic",2.64-0.25, lm, 14, "r")
    spawnBullet("basic",2.74-0.25, lm, 14, "r")
    spawnBullet("basic",2.84-0.25, lm, 14, "r")

    spawnBullet("basic",3.06-0.25, lb, 14, "r")
    spawnBullet("basic",3.16-0.25, lb, 14, "r")
    spawnBullet("basic",3.26-0.25, lb, 14, "r")

    spawnBullet("basic",3.4-0.25, lt, 14, "r")
    spawnBullet("basic",3.6-0.25, lm, 14, "r")
    spawnBullet("basic",3.8-0.25, lb, 14, "r")

    spawnBullet("basic",4.22-0.3, tl, 14, "d")
    spawnBullet("basic",4.32-0.3, tl, 14, "d")
    spawnBullet("basic",4.42-0.3, tl, 14, "d")

    spawnBullet("basic",4.64-0.3, tm, 14, "d")
    spawnBullet("basic",4.74-0.3, tm, 14, "d")
    spawnBullet("basic",4.84-0.3, tm, 14, "d")

    spawnBullet("basic",5.06-0.3, tr, 14, "d")
    spawnBullet("basic",5.16-0.3, tr, 14, "d")
    spawnBullet("basic",5.26-0.3, tr, 14, "d")

    spawnBullet("basic",5.4-0.3, tl, 14, "d")
    spawnBullet("basic",5.6-0.3, tm, 14, "d")
    spawnBullet("basic",5.8-0.3, tr, 14, "d")

    spawnBullet("basic",6.22-0.35, bl, 14, "u")
    spawnBullet("basic",6.32-0.35, bl, 14, "u")
    spawnBullet("basic",6.42-0.35, bl, 14, "u")

    spawnBullet("basic",6.64-0.35, bm, 14, "u")
    spawnBullet("basic",6.74-0.35, bm, 14, "u")
    spawnBullet("basic",6.84-0.35, bm, 14, "u")

    spawnBullet("basic",7.06-0.35, br, 14, "u")
    spawnBullet("basic",7.16-0.35, br, 14, "u")
    spawnBullet("basic",7.26-0.35, br, 14, "u")

    spawnBullet("basic",7.4-0.35, bl, 14, "u")
    spawnBullet("basic",7.6-0.35, bm, 14, "u")
    spawnBullet("basic",7.8-0.35, br, 14, "u")

    spawnBullet("basic",8.22-0.4, rt, 14, "l")
    spawnBullet("basic",8.32-0.4, rt, 14, "l")
    spawnBullet("basic",8.42-0.4, rt, 14, "l")

    spawnBullet("basic",8.64-0.4, rm, 14, "l")
    spawnBullet("basic",8.74-0.4, rm, 14, "l")
    spawnBullet("basic",8.84-0.4, rm, 14, "l")

    spawnBullet("basic",9.06-0.4, rb, 14, "l")
    spawnBullet("basic",9.16-0.4, rb, 14, "l")
    spawnBullet("basic",9.26-0.4, rb, 14, "l")

    spawnBullet("basic",9.4-0.4, rt, 14, "l")
    spawnBullet("basic",9.6-0.4, rm, 14, "l")
    spawnBullet("basic",9.8-0.4, rb, 14, "l")

    spawnBullet("basic",8.22-0.4, lt, 14, "r")
    spawnBullet("basic",8.32-0.4, lt, 14, "r")
    spawnBullet("basic",8.42-0.4, lt, 14, "r")

    spawnBullet("basic",8.64-0.4, lm, 14, "r")
    spawnBullet("basic",8.74-0.4, lm, 14, "r")
    spawnBullet("basic",8.84-0.4, lm, 14, "r")

    spawnBullet("basic",9.06-0.4, lb, 14, "r")
    spawnBullet("basic",9.16-0.4, lb, 14, "r")
    spawnBullet("basic",9.26-0.4, lb, 14, "r")

    spawnBullet("basic",9.4-0.4, lt, 14, "r")
    spawnBullet("basic",9.6-0.4, lm, 14, "r")
    spawnBullet("basic",9.8-0.4, lb, 14, "r")

    spawnBullet("basic",10.22-0.45, tl, 14, "d")
    spawnBullet("basic",10.32-0.45, tl, 14, "d")
    spawnBullet("basic",10.42-0.45, tl, 14, "d")

    spawnBullet("basic",10.64-0.45, tm, 14, "d")
    spawnBullet("basic",10.74-0.45, tm, 14, "d")
    spawnBullet("basic",10.84-0.45, tm, 14, "d")

    spawnBullet("basic",11.06-0.45, tr, 14, "d")
    spawnBullet("basic",11.16-0.45, tr, 14, "d")
    spawnBullet("basic",11.26-0.45, tr, 14, "d")

    spawnBullet("basic",11.4-0.45, tl, 14, "d")
    spawnBullet("basic",11.6-0.45, tm, 14, "d")
    spawnBullet("basic",11.8-0.45, tr, 14, "d")

    spawnBullet("basic",10.22-0.45, bl, 14, "u")
    spawnBullet("basic",10.32-0.45, bl, 14, "u")
    spawnBullet("basic",10.42-0.45, bl, 14, "u")

    spawnBullet("basic",10.64-0.45, bm, 14, "u")
    spawnBullet("basic",10.74-0.45, bm, 14, "u")
    spawnBullet("basic",10.84-0.45, bm, 14, "u")

    spawnBullet("basic",11.06-0.45, br, 14, "u")
    spawnBullet("basic",11.16-0.45, br, 14, "u")
    spawnBullet("basic",11.26-0.45, br, 14, "u")

    spawnBullet("basic",11.4-0.45, bl, 14, "u")
    spawnBullet("basic",11.6-0.45, bm, 14, "u")
    spawnBullet("basic",11.8-0.45, br, 14, "u")

    spawnBullet("basic",12.22-0.5, rt, 14, "l")
    spawnBullet("basic",12.32-0.5, rt, 14, "l")
    spawnBullet("basic",12.42-0.5, rt, 14, "l")

    spawnBullet("basic",12.64-0.5, rm, 14, "l")
    spawnBullet("basic",12.74-0.5, rm, 14, "l")
    spawnBullet("basic",12.84-0.5, rm, 14, "l")

    spawnBullet("basic",13.06-0.5, rb, 14, "l")
    spawnBullet("basic",13.16-0.5, rb, 14, "l")
    spawnBullet("basic",13.26-0.5, rb, 14, "l")

    spawnBullet("basic",13.4-0.5, rt, 14, "l")
    spawnBullet("basic",13.6-0.5, rm, 14, "l")
    spawnBullet("basic",13.8-0.5, rb, 14, "l")

    spawnBullet("basic",12.22-0.5, lt, 14, "r")
    spawnBullet("basic",12.32-0.5, lt, 14, "r")
    spawnBullet("basic",12.42-0.5, lt, 14, "r")

    spawnBullet("basic",12.64-0.5, lm, 14, "r")
    spawnBullet("basic",12.74-0.5, lm, 14, "r")
    spawnBullet("basic",12.84-0.5, lm, 14, "r")

    spawnBullet("basic",13.06-0.5, lb, 14, "r")
    spawnBullet("basic",13.16-0.5, lb, 14, "r")
    spawnBullet("basic",13.26-0.5, lb, 14, "r")

    spawnBullet("basic",13.4-0.5, lt, 14, "r")
    spawnBullet("basic",13.6-0.5, lm, 14, "r")
    spawnBullet("basic",13.8-0.5, lb, 14, "r")

    spawnBullet("basic",14.22-0.6, tl, 14, "d")
    spawnBullet("basic",14.32-0.6, tl, 14, "d")
    spawnBullet("basic",14.42-0.6, tl, 14, "d")

    spawnBullet("basic",14.64-0.6, tm, 14, "d")
    spawnBullet("basic",14.74-0.6, tm, 14, "d")
    spawnBullet("basic",14.84-0.6, tm, 14, "d")

    spawnBullet("basic",15.06-0.6, tr, 14, "d")
    spawnBullet("basic",15.16-0.6, tr, 14, "d")
    spawnBullet("basic",15.26-0.6, tr, 14, "d")

    spawnBullet("basic",15.4-0.6, tl, 14, "d")
    spawnBullet("basic",15.6-0.6, tm, 14, "d")
    spawnBullet("basic",15.8-0.6, tr, 14, "d")

    spawnBullet("basic",14.22-0.6, bl, 14, "u")
    spawnBullet("basic",14.32-0.6, bl, 14, "u")
    spawnBullet("basic",14.42-0.6, bl, 14, "u")

    spawnBullet("basic",14.64-0.6, bm, 14, "u")
    spawnBullet("basic",14.74-0.6, bm, 14, "u")
    spawnBullet("basic",14.84-0.6, bm, 14, "u")

    spawnBullet("basic",15.06-0.6, br, 14, "u")
    spawnBullet("basic",15.16-0.6, br, 14, "u")
    spawnBullet("basic",15.26-0.6, br, 14, "u")

    spawnBullet("basic",15.4-0.6, bl, 14, "u")
    spawnBullet("basic",15.6-0.6, bm, 14, "u")
    spawnBullet("basic",15.8-0.6, br, 14, "u")

    spawnBullet("ferris", 15.6, [lt[0]-200, lt[1]], 7, "r", true, 0,10,1,7);
    spawnBullet("ferris", 15.6, [lt[0]-200, lt[1]], 7, "r", true, 0,7,0.6,-15);

    spawnBullet("ferris", 16.4, [rb[0]+200, rb[1]], 7, "l", true, 0,10,1,7);
    spawnBullet("ferris", 16.4, [rb[0]+200, rb[1]], 7, "l", true, 0,7,0.6,-15);

    spawnBullet("ferris", 17.2, [tr[0], tr[1]-200], 7, "d", true, 0,10,1,7);
    spawnBullet("ferris", 17.2, [tr[0], tr[1]-200], 7, "d", true, 0,7,0.6,-15);

    spawnBullet("ferris", 18, [bl[0], bl[1]+200], 7, "u", true, 0,10,1,7);
    spawnBullet("ferris", 18 , [bl[0], bl[1]+200], 7, "u", true, 0,7,0.6,-15);
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 18.8, lb, j, "r");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 19.4, rm, j, "l");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 20.2, lt, j, "r");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 21+0.4, bl, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 21.4+0.4, bm, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 21.8+0.4, br, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 22.2+0.4, bm, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 22.6+0.4, bl, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 23+0.4, bm, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 23.4+0.4, br, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 23.8+0.4, bm, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 24.2+0.4, bl, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 24.6+0.4, bm, j, "u");
    }
    for(var j = 9; j <=16; j++){
        spawnBullet("basic", 25+0.4, br, j, "u");
    }
    spawnBullet("basic", 26.1, rt, 15, "l");
    spawnBullet("basic", 26.5, lm, 15, "r");
    spawnBullet("basic", 26.9, rb, 15, "l");

}