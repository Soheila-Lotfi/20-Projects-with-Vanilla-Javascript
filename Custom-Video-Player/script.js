
// get the elements
const video = document.getElementById('video')
const playBtn = document.getElementById('play')


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



// Event listener

video.addEventListener('click', toggleVideoStatus);
playBtn.addEventListener('click', toggleVideoStatus);
