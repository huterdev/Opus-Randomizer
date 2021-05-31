var path = 'audio/';
var fileName = 'Opus_'
var fileType = '.mp3';
var fileAmount = 3;
var audio = null;
var isPlaying = false;

var randomBtn = document.getElementById("RandomBtn");
var playBtn = document.getElementById("PlayBtn");
var resetBtn = document.getElementById("ResetBtn");

randomBtn.addEventListener("click", function() {randomAudio(true)});
playBtn.addEventListener("click", OnButton);
resetBtn.addEventListener("click", resetAudio);

function OnButton() {
    if (!isPlaying) {
        playAudio();
    } else {
        pauseAudio();
    }
}

function playAudio() {
    if (audio === null) {
        randomAudio(false);
    }

    audio.play();
    isPlaying = true;

    playBtn.firstChild.src = "graphics/Pause_Circle.png";

    audio.onended = function() {
        pauseAudio();
        resetAudio();
    }
}

function pauseAudio() {
    audio.pause();
    isPlaying = false;

    playBtn.firstChild.src = "graphics/Play_Circle.png";
}

function resetAudio() {
    if (audio != null) {
        audio.currentTime = 0;
    }

    spinButton(resetBtn.firstChild);
}

function randomAudio(spin) {
    let rand = Math.ceil(Math.random() * fileAmount);
    let file = path + fileName + rand.toString() + fileType;

    if (isPlaying) {
        pauseAudio();
    }

    audio = new Audio(file);

    if (!isPlaying) {
        playAudio();
    }
    
    if (spin) {
        spinButton(randomBtn.firstChild);
    }
}



function spinButton(element) {
    element.className = "spinDice";
    element.addEventListener("animationend", function() {element.classList.remove("spinDice")} );
}

