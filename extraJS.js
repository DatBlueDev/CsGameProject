var willBeGodMode = false;
var TitleImage = document.getElementById("TitleImage");
var TitleScreen = document.getElementById("TitleScreen");
var ced = document.getElementById("ced");
var david = document.getElementById("gabriel");
var kyle = document.getElementById("kyle");
var aboutTitle = document.getElementById("aboutTitle");
var guideTitle = document.getElementById("HowToPlayTitle");
var levelsTitle = document.getElementById("levelsTitle");

var ref1 = document.getElementById("references1");
var ref2 = document.getElementById("references2");
var ref3 = document.getElementById("references3");
var grid = document.getElementById("grid");
var gridHelp = document.getElementById("gridHelp");
var helpParts = document.getElementsByClassName('HelpParts')


$("button").mouseenter(function() {
    try{
        hoverSoundEffect.play();
        const newAudio = hoverSoundEffect.cloneNode();
        newAudio.play();
    }
    catch(err){
        console.log("Not Yet Interacted, Cannot Play Music");
    }
}
);

gameMusic[6].addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

async function switchCharacters(){

    if (Character == 0){
        Character = 1;

        TitleArt.src = "gameSprites/sakuya.png";
        TitleImage.src = "gameSprites/gridLockB.gif";
        ced.src = "gameSprites/cedB.png";
        david.src = "gameSprites/davidB.png";
        kyle.src = "gameSprites/kyleB.png";
        aboutTitle.src = "gameSprites/aboutB.gif";
        guideTitle.src = "gameSprites/guideB.png";
        grid.src = "gameSprites/gridB.png";
        TitleArt.style.width = "500px";
        gridHelp.src = "gameSprites/gridHelpB.png";
        ref1.style.backgroundColor="rgba(150,150,255,0.45)";
        ref2.style.backgroundColor="rgba(150,150,255,0.45)";
        ref3.style.backgroundColor="rgba(150,150,255,0.45)";
        levelsTitle.src = "gameSprites/levelsB.png";
        for(var i = 0; i < helpParts.length; i++){
            helpParts[i].style.backgroundImage="linear-gradient(to right, rgba(0,0,0,0) , rgba("+ 0 + ",40,"+255+",0.2))";
            
        }
        console.log("sakuya" + Character);
        for(var i = 0; i<=255; i+=6){
            document.body.style.backgroundImage = "linear-gradient(180deg, rgba(3,2,4) , rgba("+ (255-i) + ",40,"+i+",0.2))";
            await wait(0.005);
        }
    }
    else if (Character == 1 ){
        Character = 0;
        
        TitleArt.src = "gameSprites/hakurei.png";
        TitleArt.style.width = "550px";
        TitleImage.src = "gameSprites/gridLock.gif";
        guideTitle.src = "gameSprites/guide.png";
        grid.src = "gameSprites/grid.png";
        gridHelp.src = "gameSprites/gridHelp.png";
        levelsTitle.src = "gameSprites/levels.png";

        ced.src = "gameSprites/ced.png";
        david.src = "gameSprites/david.png";
        kyle.src = "gameSprites/kyle.png";
        aboutTitle.src = "gameSprites/about.gif";
        ref1.style.backgroundColor="rgba(255, 187, 187, 0.767)";
        ref2.style.backgroundColor="rgba(255, 187, 187, 0.767)";
        ref3.style.backgroundColor="rgba(255, 187, 187, 0.767)";
        console.log("hakurei" + Character);
        for(var i = 0; i < helpParts.length; i++){
            helpParts[i].style.backgroundImage="linear-gradient(to right, rgba(0,0,0,0) , rgba("+ 200 + ",70,"+70+",0.3))";
            console.log("whopper");
            
        }
        for(var i = 0; i<=255; i+=6){
            document.body.style.backgroundImage = "linear-gradient(180deg, rgba(3,2,4) , rgba("+ (i) + ",40,"+(255-i)+",0.2))";
            await wait(0.01);
        }

    }
    console.log("switched" + Character);


}
function toggleGodMode(){
    console.log("runned godmode fudnvciton");


        willBeGodMode = true;
        console.log("turend on");
        health=1000000000;

    
}
