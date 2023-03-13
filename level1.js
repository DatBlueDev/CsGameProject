function bulletScript1(){
    

    



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
    for(var i =7; i <= 11; i+=1){
        spawnBullet("basic", i,tm, 10, "d");

    }
	spawnBullet("ferris", 6, [rm[0]+100, rm[1]], 7, "l", true, 0,9,1.5,2);

    for(var i =7; i <= 11; i+=1){
        spawnBullet("basic", i+0.5, bl, 10, "u");

    }
    
    spawnBullet("danger", 11, rightDanger, 10, "u");
    spawnBullet("danger", 11+0.5*1, middleXDanger, 10, "u");
    spawnBullet("danger", 11+0.5*2, leftDanger, 10, "u");
    spawnBullet("danger", 11+0.5*3, middleXDanger, 10, "u");
    spawnBullet("danger", 11+0.5*4, rightDanger, 10, "u");
    spawnBullet("danger", 11+0.5*5, middleXDanger, 10, "u");
    spawnBullet("danger", 11+0.5*6, leftDanger, 10, "u");

    spawnBullet("ferris", 14.4, [rm[0]+100, rm[1]], 7, "l", true, 0,9,1.5,2);
    spawnBullet("basic", 18, rt, 5, "l");
    spawnBullet("basic", 18, rm, 5, "l");
    spawnBullet("basic", 18.1, rt, 5, "l");
    spawnBullet("basic", 18.1, rm, 5, "l");
    spawnBullet("basic", 18.5, rt, 5, "l");
    spawnBullet("basic", 18.5, rb, 5, "l");
    spawnBullet("basic", 18.6, rt, 5, "l");
    spawnBullet("basic", 18.6, rb, 5, "l");
    spawnBullet("basic", 19, rb, 5, "l");
    spawnBullet("basic", 19, rm, 5, "l");
    spawnBullet("basic", 19.1, rb, 5, "l");
    spawnBullet("basic", 19.1, rm, 5, "l");
    spawnBullet("basic", 19.5, rt, 5, "l");
    spawnBullet("basic", 19.5, rb, 5, "l");
    spawnBullet("basic", 19.6, rt, 5, "l");
    spawnBullet("basic", 19.6, rb, 5, "l");
    spawnBullet("basic", 20, rt, 5, "l");
    spawnBullet("basic", 20, rm, 5, "l");
    spawnBullet("basic", 20.1, rt, 5, "l");
    spawnBullet("basic", 20.1, rm, 5, "l");
    spawnBullet("basic", 20.5, rb, 5, "l");
    spawnBullet("basic", 20.5, rm, 5, "l");
    spawnBullet("basic", 20.6, rb, 5, "l");
    spawnBullet("basic", 20.6, rm, 5, "l");
    spawnBullet("basic", 21, rt, 5, "l");
    spawnBullet("basic", 21, rm, 5, "l");
    spawnBullet("basic", 21.5, rb, 5, "l");
    spawnBullet("basic", 21.5, rm, 5, "l");
    spawnBullet("basic", 21.1, rt, 5, "l");
    spawnBullet("basic", 21.1, rm, 5, "l");
    spawnBullet("basic", 21.5, rb, 5, "l");
    spawnBullet("basic", 21.5, rm, 5, "l");
    spawnBullet("basic", 21.6, rb, 5, "l");
    spawnBullet("basic", 21.6, rm, 5, "l");
    spawnBullet("basic", 22, rt, 5, "l");
    spawnBullet("basic", 22, rt, 5, "l");
    spawnBullet("basic", 22.1, rt, 5, "l");
    spawnBullet("basic", 22.1, rm, 5, "l");
    spawnBullet("basic", 22.5, rt, 5, "l");
    spawnBullet("basic", 22.5, rm, 5, "l");
    spawnBullet("basic", 22.6, rt, 5, "l");
    spawnBullet("basic", 22.6, rm, 5, "l");
    spawnBullet("basic", 23.0, rb, 5, "l");
    spawnBullet("basic", 23.0, rm, 5, "l");
    spawnBullet("basic", 23.1, rb, 5, "l");
    spawnBullet("basic", 23.1, rm, 5, "l");

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

}