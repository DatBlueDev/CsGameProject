
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