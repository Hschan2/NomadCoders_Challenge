import "../scss/styles.scss";

const audio = document.getElementById('audio');
const playPause = document.getElementById('play');
const playIcon = document.querySelector('.play');
const pauseIcon = document.querySelector('.pause');

function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playPause.title = "Pause";
      audio.play();
   } else {
      playPause.title = "Play";
      audio.pause();
   }
}

playpause.addEventListener('click', togglePlayPause);