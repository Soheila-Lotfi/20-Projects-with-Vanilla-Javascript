
// get the elements
const video = document.getElementById('video')
const playBtn = document.getElementById('play')
const stopBtn = document.getElementById('stop')
const progress = document.getElementById('progress')


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



// Event listener

video.addEventListener('click', toggleVideoStatus);
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);




