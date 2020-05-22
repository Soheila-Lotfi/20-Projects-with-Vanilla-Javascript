
// get the elements
const video = document.getElementById('video')
const playBtn = document.getElementById('play')
const stopBtn = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')


// toggle video status

function toggleVideoStatus() {
    console.log(video)
    console.log(video.paused)
    if (video.paused) {
        video.play();
        //update puase icon
        playBtn.innerHTML = '<i class="fa fa-play fa-2x">'
    }
    else {
        video.pause();
        // update play icon
        playBtn.innerHTML = '<i class="fa fa-pause fa-2x">'

    }

}

// stop the video

function stopVideo() {
    video.currentTime = '0';
    video.pause();
}

// set video progress
function setVideoProgress() {
    // when progress.value is 100 which is max, video is over which is video.duration
    video.currentTime = (+progress.value * video.duration) / 100;
}

// update timestamp when time updates

function updateTimestamp() {

    // when time changes, we should update progress slider and also timestamp
    progress.value = (video.currentTime * 100) / video.duration

    //get minutes
    let mins = Math.floor(video.currentTime / 60);

    if (mins < 10) {
        mins = `0${mins}`
    }
    // get seconds
    // let secs = video.currentTime - mins * 60;
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = `0${secs}`
    }

    timestamp.innerText = `${mins}:${secs}`

}


// Event listener

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('timeupdate', updateTimestamp);
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);




