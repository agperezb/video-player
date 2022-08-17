const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

function handlePlay() {
    $video.play();
    $pause.hidden = false;
    $play.hidden = true;
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}

function handleBackward() {
    $video.currentTime -= 10;
}

function handleForward() {
    $video.currentTime += 10;
}

$video.addEventListener('loadedmetadata', handleLoadedMetadata);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoadedMetadata() {
    $progress.max = $video.duration;
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput);

function handleInput() {
    $video.currentTime = $progress.value;
}
