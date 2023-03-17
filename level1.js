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
    // for(var i =7; i <= 10.7; i+=0.9){
    //     spawnBullet("basic", i,tm, 8, "d");
    //     spawnBullet("basic", i+0.5, bl, 8, "u");


    // }
    

    spawnBullet("win", 82, rb, 6, "l");


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
}
function bulletScript4(){


    spawnBullet("basic",0.22, rt, 14, "l")
    spawnBullet("basic",0.32, rt, 14, "l")
    spawnBullet("basic",0.42, rt, 14, "l")

    spawnBullet("basic",0.64, rm, 14, "l")
    spawnBullet("basic",0.74, rm, 14, "l")
    spawnBullet("basic",0.84, rm, 14, "l")

    spawnBullet("basic",1.06, rb, 14, "l")
    spawnBullet("basic",1.16, rb, 14, "l")
    spawnBullet("basic",1.26, rb, 14, "l")

    spawnBullet("basic",1.4, rt, 14, "l")
    spawnBullet("basic",1.6, rm, 14, "l")
    spawnBullet("basic",1.8, rb, 14, "l")

    spawnBullet("basic",2.22-0.15, lt, 14, "r")
    spawnBullet("basic",2.32-0.15, lt, 14, "r")
    spawnBullet("basic",2.42-0.15, lt, 14, "r")

    spawnBullet("basic",2.64-0.15, lm, 14, "r")
    spawnBullet("basic",2.74-0.15, lm, 14, "r")
    spawnBullet("basic",2.84-0.15, lm, 14, "r")

    spawnBullet("basic",3.06-0.15, lb, 14, "r")
    spawnBullet("basic",3.16-0.15, lb, 14, "r")
    spawnBullet("basic",3.26-0.15, lb, 14, "r")

    spawnBullet("basic",3.4-0.15, lt, 14, "r")
    spawnBullet("basic",3.6-0.15, lm, 14, "r")
    spawnBullet("basic",3.8-0.15, lb, 14, "r")

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

    spawnBullet("basic",6.22 -0.45, bl, 14, "u")
    spawnBullet("basic",6.32-0.45, bl, 14, "u")
    spawnBullet("basic",6.42-0.45, bl, 14, "u")

    spawnBullet("basic",6.64-0.45, bm, 14, "u")
    spawnBullet("basic",6.74-0.45, bm, 14, "u")
    spawnBullet("basic",6.84-0.45, bm, 14, "u")

    spawnBullet("basic",7.06-0.45, br, 14, "u")
    spawnBullet("basic",7.16-0.45, br, 14, "u")
    spawnBullet("basic",7.26-0.45, br, 14, "u")

    spawnBullet("basic",7.4-0.45, bl, 14, "u")
    spawnBullet("basic",7.6-0.45, bm, 14, "u")
    spawnBullet("basic",7.8-0.45, br, 14, "u")

    spawnBullet("basic",8.22-0.6, rt, 14, "l")
    spawnBullet("basic",8.32-0.6, rt, 14, "l")
    spawnBullet("basic",8.42-0.6, rt, 14, "l")

    spawnBullet("basic",8.64-0.6, rm, 14, "l")
    spawnBullet("basic",8.74-0.6, rm, 14, "l")
    spawnBullet("basic",8.84-0.6, rm, 14, "l")

    spawnBullet("basic",9.06-0.6, rb, 14, "l")
    spawnBullet("basic",9.16-0.6, rb, 14, "l")
    spawnBullet("basic",9.26-0.6, rb, 14, "l")

    spawnBullet("basic",9.4-0.6, rt, 14, "l")
    spawnBullet("basic",9.6-0.6, rm, 14, "l")
    spawnBullet("basic",9.8-0.6, rb, 14, "l")

    spawnBullet("basic",8.22-0.6, lt, 14, "r")
    spawnBullet("basic",8.32-0.6, lt, 14, "r")
    spawnBullet("basic",8.42-0.6, lt, 14, "r")

    spawnBullet("basic",8.64-0.6, lm, 14, "r")
    spawnBullet("basic",8.74-0.6, lm, 14, "r")
    spawnBullet("basic",8.84-0.6, lm, 14, "r")

    spawnBullet("basic",9.06-0.6, lb, 14, "r")
    spawnBullet("basic",9.16-0.6, lb, 14, "r")
    spawnBullet("basic",9.26-0.6, lb, 14, "r")

    spawnBullet("basic",9.4-0.6, lt, 14, "r")
    spawnBullet("basic",9.6-0.6, lm, 14, "r")
    spawnBullet("basic",9.8-0.6, lb, 14, "r")

    spawnBullet("basic",10.22-0.75, tl, 14, "d")
    spawnBullet("basic",10.32-0.75, tl, 14, "d")
    spawnBullet("basic",10.42-0.75, tl, 14, "d")

    spawnBullet("basic",10.64-0.75, tm, 14, "d")
    spawnBullet("basic",10.74-0.75, tm, 14, "d")
    spawnBullet("basic",10.84-0.75, tm, 14, "d")

    spawnBullet("basic",11.06-0.75, tr, 14, "d")
    spawnBullet("basic",11.16-0.75, tr, 14, "d")
    spawnBullet("basic",11.26-0.75, tr, 14, "d")

    spawnBullet("basic",11.4-0.75, tl, 14, "d")
    spawnBullet("basic",11.6-0.75, tm, 14, "d")
    spawnBullet("basic",11.8-0.75, tr, 14, "d")

    spawnBullet("basic",10.22-0.75, bl, 14, "u")
    spawnBullet("basic",10.32-0.75, bl, 14, "u")
    spawnBullet("basic",10.42-0.75, bl, 14, "u")

    spawnBullet("basic",10.64-0.75, bm, 14, "u")
    spawnBullet("basic",10.74-0.75, bm, 14, "u")
    spawnBullet("basic",10.84-0.75, bm, 14, "u")

    spawnBullet("basic",11.06-0.75, br, 14, "u")
    spawnBullet("basic",11.16-0.75, br, 14, "u")
    spawnBullet("basic",11.26-0.75, br, 14, "u")

    spawnBullet("basic",11.4-0.75, bl, 14, "u")
    spawnBullet("basic",11.6-0.75, bm, 14, "u")
    spawnBullet("basic",11.8-0.75, br, 14, "u")

    spawnBullet("basic",12.22-0.9, rt, 14, "l")
    spawnBullet("basic",12.32-0.9, rt, 14, "l")
    spawnBullet("basic",12.42-0.9, rt, 14, "l")

    spawnBullet("basic",12.64-0.9, rm, 14, "l")
    spawnBullet("basic",12.74-0.9, rm, 14, "l")
    spawnBullet("basic",12.84-0.9, rm, 14, "l")

    spawnBullet("basic",13.06-0.9, rb, 14, "l")
    spawnBullet("basic",13.16-0.9, rb, 14, "l")
    spawnBullet("basic",13.26-0.9, rb, 14, "l")

    spawnBullet("basic",13.4-0.9, rt, 14, "l")
    spawnBullet("basic",13.6-0.9, rm, 14, "l")
    spawnBullet("basic",13.8-0.9, rb, 14, "l")

    spawnBullet("basic",12.22-0.9, lt, 14, "r")
    spawnBullet("basic",12.32-0.9, lt, 14, "r")
    spawnBullet("basic",12.42-0.9, lt, 14, "r")

    spawnBullet("basic",12.64-0.9, lm, 14, "r")
    spawnBullet("basic",12.74-0.9, lm, 14, "r")
    spawnBullet("basic",12.84-0.9, lm, 14, "r")

    spawnBullet("basic",13.06-0.9, lb, 14, "r")
    spawnBullet("basic",13.16-0.9, lb, 14, "r")
    spawnBullet("basic",13.26-0.9, lb, 14, "r")

    spawnBullet("basic",13.4-0.9, lt, 14, "r")
    spawnBullet("basic",13.6-0.9, lm, 14, "r")
    spawnBullet("basic",13.8-0.9, lb, 14, "r")

    spawnBullet("basic",14.22-1.05, tl, 14, "d")
    spawnBullet("basic",14.32-1.05, tl, 14, "d")
    spawnBullet("basic",14.42-1.05, tl, 14, "d")

    spawnBullet("basic",14.64-1.05, tm, 14, "d")
    spawnBullet("basic",14.74-1.05, tm, 14, "d")
    spawnBullet("basic",14.84-1.05, tm, 14, "d")

    spawnBullet("basic",15.06-1.05, tr, 14, "d")
    spawnBullet("basic",15.16-1.05, tr, 14, "d")
    spawnBullet("basic",15.26-1.05, tr, 14, "d")

    spawnBullet("basic",15.4-1.05, tl, 14, "d")
    spawnBullet("basic",15.6-1.05, tm, 14, "d")
    spawnBullet("basic",15.8-1.05, tr, 14, "d")

    spawnBullet("basic",14.22-1.05, bl, 14, "u")
    spawnBullet("basic",14.32-1.05, bl, 14, "u")
    spawnBullet("basic",14.42-1.05, bl, 14, "u")

    spawnBullet("basic",14.64-1.05, bm, 14, "u")
    spawnBullet("basic",14.74-1.05, bm, 14, "u")
    spawnBullet("basic",14.84-1.05, bm, 14, "u")

    spawnBullet("basic",15.06-1.05, br, 14, "u")
    spawnBullet("basic",15.16-1.05, br, 14, "u")
    spawnBullet("basic",15.26-1.05, br, 14, "u")

    spawnBullet("basic",15.4-1.05, bl, 14, "u")
    spawnBullet("basic",15.6-1.05, bm, 14, "u")
    spawnBullet("basic",15.8-1.05, br, 14, "u")

}