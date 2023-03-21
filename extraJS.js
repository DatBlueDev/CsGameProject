var willBeGodMode = false;

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

setInterval(function(){
    console.log("gtestes");
    a =document.createElement("div");
    a.setAttribute("class", "effect");
    a.setAttribute("class", "spin");
    a.setAttribute("class", "w3-animate-bottom");

}, 10);
function toggleGodMode(){
    console.log("runned godmode fudnvciton");


        willBeGodMode = true;
        console.log("turend on");
        health=1000000000;

    
}
