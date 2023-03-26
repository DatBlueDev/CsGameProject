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
    spawnBullet("changeColor1", 6.4, rt, 10, "l") ;

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
    for (let i = 22; i <= 30; i+=1.5){
        spawnBullet("basic", i, tl, 11, "d") ;
        spawnBullet("basic", i, tm, 11, "d") ;
        spawnBullet("basic", i+0.75, br, 11, "u") ;
        spawnBullet("basic", i+0.75, bm, 11, "u") ;
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

    spawnBullet("win", 50, middleYDanger, 10, "l");

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
    spawnBullet("basic", 26.4, rm, 15, "l");
    spawnBullet("basic", 26.4, rb, 15, "l");

    spawnBullet("basic", 26.9, lt, 15, "r");
    spawnBullet("basic", 26.9, lb, 15, "r");

    spawnBullet("basic", 27.3, rt, 15, "l");
    spawnBullet("basic", 27.3, rm, 15, "l");


    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 28, br, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 28, bm, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 28, lt, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 28, lm, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 28, tr, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 28, tm, j, "d");   
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 28, rt, j, "l");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 28, rm, j, "l");
    }

    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 29, bl, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 29, br, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 29, lt, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 29, lb, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 29, tl, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 29, tr, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 29, rt, j, "l");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 29, rb, j, "l");
    }

    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 30, bl, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 30, bm, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 30, lm, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 30, lb, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 30, tl, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 30, tm, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 30, rb, j, "l");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 30, rm, j, "l");
    }

    spawnBullet("ferris", 30.2, [rt[0]+200, rt[1]], 7, "l", true, 0,9,1,7);
    spawnBullet("ferris", 31.1, [lb[0]-200, lb[1]], 7, "r", true, 0,9,1,7);


    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 34, br, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 34, bm, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 34, lt, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 34, lm, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 34, tr, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 34, tm, j, "d");   
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 34, rt, j, "l");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 34, rm, j, "l");
    }

    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 35, bl, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 35, br, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 35, lt, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 35, lb, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 35, tl, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 35, tr, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 35, rt, j, "l");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 35, rb, j, "l");
    }

    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 36, bl, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 36, bm, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 36, lm, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 36, lb, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 36, tl, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 36, tm, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 36, rb, j, "l");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 36, rm, j, "l");
    }

    spawnBullet("danger", 37.04, bottomDanger, 10, "l") ;
    spawnBullet("danger", 37, rightDanger, 10, "u") ;

    spawnBullet("danger", 37.5, middleYDanger, 10, "l") ;
    spawnBullet("danger", 37.51, middleXDanger, 10, "u") ;

    spawnBullet("danger", 38, topDanger, 10, "l") ;
    spawnBullet("danger", 37.97, leftDanger, 10, "u") ;

    spawnBullet("danger", 38.53, middleYDanger, 10, "l") ;
    spawnBullet("danger", 38.5, middleXDanger, 10, "u") ;

    spawnBullet("danger", 39, bottomDanger, 10, "l") ;
    spawnBullet("danger", 39.05, rightDanger, 10, "u") ;

    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 40, rb, j, "l");
        spawnBullet("basic", 40, rm, j, "l");

    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 40.5, lm, j, "r");
        spawnBullet("basic", 40.5, lt, j, "r");

    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 41, rb, j, "l");
        spawnBullet("basic", 41, rm, j, "l");

    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 41.5, lm, j, "r");
        spawnBullet("basic", 41.5, lt, j, "r");

    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 42, rb, j, "l");
        spawnBullet("basic", 42, bm, j, "u");

    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 42.5, lm, j, "r");
        spawnBullet("basic", 42.5, tl, j, "d");
        spawnBullet("basic", 42.5, tr, j, "d");

    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 43, lm, j, "r");
        spawnBullet("basic", 43, lt, j, "r");

    }


    spawnBullet("ferris", 43.5, [rt[0]+200, rt[1]], 9, "l", true, 0,9,1,7);
    spawnBullet("ferris", 44.4, [lb[0]-200, lb[1]], 9, "r", true, 0,9,1,7);


    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 46, br, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 46, bm, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 46, lt, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 46, lm, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 46, tr, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 46, tm, j, "d");   
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 46, rt, j, "l");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 46, rm, j, "l");
    }

    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 47, bl, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 47, br, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 47, lt, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 47, lb, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 47, tl, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 47, tr, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 47, rt, j, "l");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 47, rb, j, "l");
    }

    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 48, bl, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 48, bm, j, "u");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 48, lm, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 48, lb, j, "r");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 48, tl, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 48, tm, j, "d");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 48, rb, j, "l");
    }
    for(var j = 12; j <=16; j++){
        spawnBullet("basic", 48, rm, j, "l");
    }

    

    spawnBullet("ferris", 49, [tr[0], tr[1]-200], 9, "d", true, 0,9,1,7);
    spawnBullet("ferris", 50, [bl[0], bl[1]+200], 9, "u", true, 0,9,1,7);

    spawnBullet("win",54 , lb, 5, "r");

}

function bulletScript5(){
    var o = 0;
    gameMusic[gameLevel-2].currentTime=o;
    var j = 18;

    spawnBullet("danger", 0.05, bottomDanger, 10, "l") ;
    spawnBullet("danger", 0, topDanger, 10, "r") ;

    for(var i = 8; i<=17; i++){
        spawnBullet("basic", 0, rt, i, "l");
        spawnBullet("basic", 0, lb, i, "r");

    }
    for (var i = 0.2 ; i <=1.1; i+=0.2){
        
        spawnBullet("ferris", 0.4, [rm[0]+100, rm[1]], 10, "l", true, 0,4,i,15);

    }
    for (var i = 0.2 ; i <=1.1; i+=0.2){
        
        spawnBullet("ferris", 1.2, [tm[0] , tm[1]-100], 10, "d", true, 0,4,i,15);

    }
    for (var i = 0.2 ; i <=1.1; i+=0.2){
        
        spawnBullet("ferris", 2, [lm[0]-100, lm[1]], 10, "r", true, 0,5,i,15);

    }
    for (var i = 0.2 ; i <=1.1; i+=0.2){
        
        spawnBullet("ferris", 2.4, [bm[0] , bm[1]+100], 10, "u", true, 0,5,i,15);

    }
    for(var i = 9; i<=20; i++){
        spawnBullet("basic", 3.5,rb, i, "l");

    }
    for(var i = 9; i<=20; i++){
        spawnBullet("basic", 3.9,lm, i, "r");

    }
    for(var i = 9; i<=20; i++){
        spawnBullet("basic", 4.2,rt, i, "l");

    }
    // for(var i = 9; i<=20; i+=0.2){
    //     spawnBullet("basic", 4.9,br, i, "u");

    // }
    for(var i = 4.9; i<=9; i+=0.2){
        spawnBullet("basic", i,bl, 15, "u");

    }
    for(var i = 4.9; i<=9; i+=0.2){
        spawnBullet("basic", i,br, 15, "u");

    }
    for(var i = 8; i<=10; i+=0.1){
        spawnBullet("basic", i,tl, 8, "d");

    }
    for(var i = 8; i<=10; i+=0.1){
        spawnBullet("basic", i,tr, 8, "d");

    }
    spawnBullet("ferris", 5, [bm[0] , bm[1]+200], 10, "u", true, 0,14,1.5,6);
    spawnBullet("ferris", 5.5, [rt[0]+200 , rt[1]], 10, "l", true, 0,14,1,6);

    for(var i = 0; i <=3; i++){
        spawnBullet("basic", 6.3 + (i/2),rt, 8, "l");
        spawnBullet("basic", 6.5 + (i/2),rm, 8, "l");
        spawnBullet("basic", 6.7 + (i/2),rb, 8, "l");

    }
    spawnBullet("ferris", 8, [tm[0] , tm[1]-200], 10, "d", true, 0,14,1,6);

    spawnBullet("ferris", 8.7, [lm[0]-200 , lm[1]+300], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 8.7, [rm[0]+200 , rm[1]+300], 12, "l", true, 0,14,0.8,6);

    spawnBullet("ferris", 9.1, [lm[0]-200 , lm[1]+100], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 9.1, [rm[0]+200 , rm[1]+100], 12, "l", true, 0,14,0.8,6);

    spawnBullet("ferris", 9.5, [lm[0]-200 , lm[1]+100], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 9.5, [rm[0]+200 , rm[1]+100], 12, "l", true, 0,14,0.8,6);

    spawnBullet("ferris", 9.9, [lm[0]-200 , lm[1]-100], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 9.9, [rm[0]+200 , rm[1]-100], 12, "l", true, 0,14,0.8,6);



    for(let j =10; j <= 16; j++){
        for(let i = 0; i <= 700; i+=100){

            spawnBullet("danger", j, [bottomDanger[0], bottomDanger[1]+300-i], 10, "l") ;

            j+=0.3;
        }
    }
    for(let i = 0; i <= 100; i+=4){
        spawnBullet("basic", 12.5+(i/20),[rb[0], rb[1]-i*8], 6, "l");
        spawnBullet("basic", 12.5+(i/20),[lb[0], lb[1]-i*8], 6, "r");


    }
    spawnBullet("ferris", 15.8, [tm[0] , tm[1]-100], 11, "d", true, 0,14,1,6);

    for(let i = 0; i <= 100; i+=4){
        spawnBullet("basic", 14+(i/20),[rt[0], rt[1]+i*8], 6, "l");
        spawnBullet("basic", 14+(i/20),[lt[0], lt[1]+i*8], 6, "r");

    }
    spawnBullet("ferris", 17.2, [bm[0] , bm[1]+100], 11, "u", true, 0,14,1,6);

    for (var i = 0; i <8; i+=1.6){
        spawnBullet("basic", 19+i-o,rb, 12, "l");
        spawnBullet("basic", 19+i-o,[rb[0], rb[1]-20], 12, "l");
        spawnBullet("basic", 19+i-o,[rb[0], rb[1]-40], 12, "l");
        spawnBullet("basic", 19+i-o,[rb[0], rb[1]-60], 12, "l");
        spawnBullet("basic", 19+i-o,[rb[0], rb[1]-80], 12, "l");
    
        spawnBullet("basic", 19.4+i-o,lt, 12, "r");
        spawnBullet("basic", 19.4+i-o,[lt[0], lt[1]+20], 12, "r");
        spawnBullet("basic", 19.4+i-o,[lt[0], lt[1]+40], 12, "r");
        spawnBullet("basic", 19.4+i-o,[lt[0], lt[1]+60], 12, "r");
        spawnBullet("basic", 19.4+i-o,[lt[0], lt[1]+80], 12, "r");
    
        spawnBullet("basic", 19.8+i-o,rt, 12, "l");
        spawnBullet("basic", 19.8+i-o,[rt[0], rt[1]+20], 12, "l");
        spawnBullet("basic", 19.8+i-o,[rt[0], rt[1]+40], 12, "l");
        spawnBullet("basic", 19.8+i-o,[rt[0], rt[1]+60], 12, "l");
        spawnBullet("basic", 19.8+i-o,[rt[0], rt[1]+80], 12, "l");
    
        spawnBullet("basic", 20.2+i-o,lb, 12, "r");
        spawnBullet("basic", 20.2+i-o,[lb[0], lb[1]-20], 12, "r");
        spawnBullet("basic", 20.2+i-o,[lb[0], lb[1]-40], 12, "r");
        spawnBullet("basic", 20.2+i-o,[lb[0], lb[1]-60], 12, "r");
        spawnBullet("basic", 20.2+i-o,[lb[0], lb[1]-80], 12, "r");
    }

    for (var i = 0; i <3; i+=1.6){
        spawnBullet("basic", 24+i-o,br, 12, "u");
        spawnBullet("basic", 24+i-o,[br[0]-20, br[1]], 12, "u");
        spawnBullet("basic", 24+i-o,[br[0]-40, br[1]], 12, "u");
        spawnBullet("basic", 24+i-o,[br[0]-60, br[1]], 12, "u");
        spawnBullet("basic", 24+i-o,[br[0]-80, br[1]], 12, "u");
    
        spawnBullet("basic", 24.4+i-o,tl, 12, "d");
        spawnBullet("basic", 24.4+i-o,[tl[0]+20, tl[1]], 12, "d");
        spawnBullet("basic", 24.4+i-o,[tl[0]+40, tl[1]], 12, "d");
        spawnBullet("basic", 24.4+i-o,[tl[0]+60, tl[1]], 12, "d");
        spawnBullet("basic", 24.4+i-o,[tl[0]+80, tl[1]], 12, "d");
    
        spawnBullet("basic", 24.8+i-o,tr, 12, "d");
        spawnBullet("basic", 24.8+i-o,[tr[0]+20, tr[1]], 12, "d");
        spawnBullet("basic", 24.8+i-o,[tr[0]+40, tr[1]], 12, "d");
        spawnBullet("basic", 24.8+i-o,[tr[0]+60, tr[1]], 12, "d");
        spawnBullet("basic", 24.8+i-o,[tr[0]+80, tr[1]], 12, "d");
    
        spawnBullet("basic", 25.2+i-o,bl, 12, "u");
        spawnBullet("basic", 25.2+i-o,[bl[0]-20, bl[1]], 12, "u");
        spawnBullet("basic", 25.2+i-o,[bl[0]-40, bl[1]], 12, "u");
        spawnBullet("basic", 25.2+i-o,[bl[0]-60, bl[1]], 12, "u");
        spawnBullet("basic", 25.2+i-o,[bl[0]-80, bl[1]], 12, "u");
    }


    spawnBullet("ferris",  26.2-o, [rm[0]+200 , rm[1]], 8, "l", true, 0,14,1.2,6);

    spawnBullet("ferris",  27.2-o, [bl[0], bl[1]+200], 8, "u", true, 0,14,0.8,6);
    spawnBullet("ferris",  27.7-o, [tr[0], tr[1]-200], 8, "d", true, 0,14,0.8,6);

    for(var i = 0; i <= 10; i+=0.1){
        spawnBullet("basic", 33 + i-o,[lm[0], lm[1]-80 + (69*Math.sin(255*i))], 8, "r");
    }
    for(var i = 0; i <= 7; i+=0.1){
        spawnBullet("basic", 36 + i-o,[rb[0], rb[1] + (69*Math.sin(255*i))], 8, "l");
    }




    for(var i = 48; i <= 54; i+=0.7){
        spawnBullet("basic", i+0-o,lt, 12, "r");
        spawnBullet("basic", i+1-o,lm, 12, "r");
        spawnBullet("basic", i+2-o,lb, 12, "r");
    }
    for(var i = 48; i <= 54; i+=0.7){
        spawnBullet("basic", i+0-o,tl, 12, "d");
        spawnBullet("basic", i+1-o,tm, 12, "d");
        spawnBullet("basic", i+2-o,tr, 12, "d");
    }

    
    for(var i = 0; i <= 3; i+=0.1){
        spawnBullet("basic", 55 + i-o,[tm[0]+ 69*Math.sin(255*i), tm[1]], 8, "d");
    }

    for(var i = 3; i <= 6; i+=0.1){
        spawnBullet("basic", 55 + i-o,[tm[0]+ 80*Math.sin(260*i), tm[1]], 8, "d");
    }


    for(var i = lm[1]; i <=lm[1]+100; i+=5){
        for(var j = lb[0]; j <=lb[0]+100; j+=5){

            spawnBullet("basic", 62-o,[j-100, i], 20, "r");
        }
    }

    
    for(var i = tl[1]; i <=tl[1]+100; i+=5){
        for(var j = tl[0]; j <=tl[0]+100; j+=5){

            spawnBullet("basic", 62-o,[j, i-100], 20, "d");
        }
    }

    for(var i = rm[1]; i <=rm[1]+100; i+=5){
        for(var j = rb[0]; j <=rb[0]+100; j+=5){

            spawnBullet("basic", 63-o,[j, i-100], 20, "l");
        }
    }

    for(var i = br[1]; i <=br[1]+100; i+=5){
        for(var j = bm[0]; j <=bm[0]+100; j+=5){

            spawnBullet("basic", 63-o,[j, i-100], 20, "u");
        }
    }
    spawnBullet("danger", 63-o, leftDanger, 10, "u") ;
    spawnBullet("danger", 63.5-o, middleXDanger, 10, "u") ;
    spawnBullet("danger", 64-o, rightDanger, 10, "u") ;
    spawnBullet("danger", 64.5-o, middleXDanger, 10, "u") ;
    spawnBullet("danger", 64.5-o, leftDanger, 10, "u") ;

    spawnBullet("ferris",  65-o, [rm[0]+200 , rm[1]], 8, "l", true, 0,14,1.2,6);
    spawnBullet("ferris",  65-o, [rm[0]+200 , rm[1]], 8, "l", true, 0,14,0.9,6);


    spawnBullet("ferris", 65.7-o, [lm[0]-200 , lm[1]+300], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 65.7-o, [rm[0]+200 , rm[1]+300], 12, "l", true, 0,14,0.8,6);

    spawnBullet("ferris", 66.1-o, [lm[0]-200 , lm[1]+100], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 66.1-o, [rm[0]+200 , rm[1]+100], 12, "l", true, 0,14,0.8,6);

    spawnBullet("ferris", 66.5-o, [lm[0]-200 , lm[1]+100], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 66.5-o, [rm[0]+200 , rm[1]+100], 12, "l", true, 0,14,0.8,6);

    spawnBullet("ferris", 66.9-o, [lm[0]-200 , lm[1]-100], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 66.9-o, [rm[0]+200 , rm[1]-100], 12, "l", true, 0,14,0.8,6);

    spawnBullet("basic", 67.5-o,rt, 12, "l");
    spawnBullet("basic", 67.5-o,rm, 12, "l");

    spawnBullet("basic", 67.5-o,lt, 12, "r");
    spawnBullet("basic", 67.5-o,lm, 12, "r");
    
    for(let i = 0; i <= 100; i+=4){
        spawnBullet("basic", 67.8+(i/20)-o,[rb[0], rb[1]-i*8], 8, "l");
        spawnBullet("basic", 67.8+(i/20)-o,[lb[0], lb[1]-i*8], 8, "r");
    }

    for(let i = 0; i <= 100; i+=4){
        spawnBullet("basic", 67.8+(i/20)-o,[rb[0], rb[1]+i*8], 8, "l");
        spawnBullet("basic", 67.8+(i/20)-o,[lb[0], lb[1]+i*8], 8, "r");
    }

    for(var i = 0; i <= 6.7; i+=0.1){
        spawnBullet("basic", 68.5 + i-o,[rb[0], rb[1] + (69*Math.sin(255*i))], 8, "l");
    }
    for(var i = 8; i <= 17; i+=1){
        spawnBullet("basic", 69.5-o,lt, i, "r");
        spawnBullet("basic", 69.5-o,rt, i, "l");

    }
    
    for(var i = 8; i <= 17; i+=1){
        spawnBullet("basic", 71.5-o,lt, i, "r");
        spawnBullet("basic", 71.5-o,rt, i, "l");

    }

    for(var i = 8; i <= 17; i+=1){
        spawnBullet("basic", 73.5-o,lt, i, "r");
        spawnBullet("basic", 73.5-o,rt, i, "l");

        spawnBullet("basic", 73.5-o,lm, i, "r");
        spawnBullet("basic", 73.5-o,rm, i, "l");

    }

    var c = 13.8;
    
    for(var i = lm[1]; i <=lm[1]+100; i+=5){
        for(var j = lb[0]; j <=lb[0]+100; j+=5){

            spawnBullet("basic", 62-o+c,[j-100, i], 20, "r");
        }
    }

    
    for(var i = tl[1]; i <=tl[1]+100; i+=5){
        for(var j = tl[0]; j <=tl[0]+100; j+=5){

            spawnBullet("basic", 62-o+c,[j, i-100], 20, "d");
        }
    }

    for(var i = rm[1]; i <=rm[1]+100; i+=5){
        for(var j = rb[0]; j <=rb[0]+100; j+=5){

            spawnBullet("basic", 63-o+c,[j, i-100], 20, "l");
        }
    }

    for(var i = br[1]; i <=br[1]+100; i+=5){
        for(var j = bm[0]; j <=bm[0]+100; j+=5){

            spawnBullet("basic", 63-o+c,[j, i-100], 20, "u");
        }
    }
    spawnBullet("danger", 63-o+c, leftDanger, 10, "u") ;
    spawnBullet("danger", 63.5-o+c, middleXDanger, 10, "u") ;
    spawnBullet("danger", 64-o+c, rightDanger, 10, "u") ;
    spawnBullet("danger", 64.5-o+c, middleXDanger, 10, "u") ;
    spawnBullet("danger", 64.5-o+c, leftDanger, 10, "u") ;

    spawnBullet("ferris",  65-o+c, [rm[0]+200 , rm[1]], 8, "l", true, 0,14,1.2,6);
    spawnBullet("ferris",  65-o+c, [rm[0]+200 , rm[1]], 8, "l", true, 0,14,0.9,6);


    spawnBullet("ferris", 65.7-o+c, [lm[0]-200 , lm[1]+300], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 65.7-o+c, [rm[0]+200 , rm[1]+300], 12, "l", true, 0,14,0.8,6);

    spawnBullet("ferris", 66.1-o+c, [lm[0]-200 , lm[1]+100], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 66.1-o+c, [rm[0]+200 , rm[1]+100], 12, "l", true, 0,14,0.8,6);

    spawnBullet("ferris", 66.5-o+c, [lm[0]-200 , lm[1]+100], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 66.5-o+c, [rm[0]+200 , rm[1]+100], 12, "l", true, 0,14,0.8,6);

    spawnBullet("ferris", 66.9-o+c, [lm[0]-200 , lm[1]-100], 12, "r", true, 0,14,0.8,6);
    spawnBullet("ferris", 66.9-o+c, [rm[0]+200 , rm[1]-100], 12, "l", true, 0,14,0.8,6);

    spawnBullet("basic", 67.5-o+c,rt, 12, "l");
    spawnBullet("basic", 67.5-o+c,rm, 12, "l");

    spawnBullet("basic", 67.5-o+c,lt, 12, "r");
    spawnBullet("basic", 67.5-o+c,lm, 12, "r");
    
    for(let i = 0; i <= 100; i+=4){
        spawnBullet("basic", 67.8+(i/20)-o+c,[rb[0], rb[1]-i*8], 8, "l");
        spawnBullet("basic", 67.8+(i/20)-o+c,[lb[0], lb[1]-i*8], 8, "r");
    }

    for(let i = 0; i <= 100; i+=4){
        spawnBullet("basic", 67.8+(i/20)-o+c,[rb[0], rb[1]+i*8], 8, "l");
        spawnBullet("basic", 67.8+(i/20)-o+c,[lb[0], lb[1]+i*8], 8, "r");
    }

    for(var i = 0; i <= 6.7; i+=0.1){
        spawnBullet("basic", 68.5 + i-o+c,[rb[0], rb[1] + (69*Math.sin(255*i))], 8, "l");
    }
    for(var i = 8; i <= 17; i+=1){
        spawnBullet("basic", 69.5-o+c,lt, i, "r");
        spawnBullet("basic", 69.5-o+c,rt, i, "l");

    }
    
    for(var i = 8; i <= 17; i+=1){
        spawnBullet("basic", 71.5-o+c,lt, i, "r");
        spawnBullet("basic", 71.5-o+c,rt, i, "l");

    }

    for(var i = 8; i <= 17; i+=1){
        spawnBullet("basic", 73.5-o+c,lt, i, "r");
        spawnBullet("basic", 73.5-o+c,rt, i, "l");

        spawnBullet("basic", 73.5-o+c,lm, i, "r");
        spawnBullet("basic", 73.5-o+c,rm, i, "l");

    }
    spawnBullet("win", 73.5-o+c+2.5, middleYDanger, 10, "l");
   
}
