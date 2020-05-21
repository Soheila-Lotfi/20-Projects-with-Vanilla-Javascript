
// get the elements
const video = document.getElementById('video')
const playBtn = document.getElementById('play')
const stopBtn = document.getElementById('stop')


// toggle video status

function toggleVideoStatus() {
    console.log(video)
    console.log(video.paused)
    if (video.paused) {
        video.play();
        playBtn.innerHTML = '<i class="fa fa-play fa-2x">'
    }
    else {
        video.pause();
        playBtn.innerHTML = '<i class="fa fa-pause fa-2x">'

    }

}

// stop the video

function stopVideo() {
    video.currentTime = '0';
    video.pause();
}



// Event listener

video.addEventListener('click', toggleVideoStatus);
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo)
