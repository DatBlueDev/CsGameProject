var hoverSoundEffect = new Audio('gameSoundEffects/menuclick.wav');
$("button").mouseenter(function() {
    hoverSoundEffect.play();
});