const audioPlayer=document.getElementById('audio-player');
const playButton=document.getElementById('play-btn');
const pauseButton=document.getElementById('pause-btn');
const nextButton=document.getElementById('next-btn');
const previousButton=document.getElementById('prev-btn');
const progress=document.getElementById('progress');
const songList=document.querySelectorAll('.songs li')
const currSong=document.getElementById('id1');
let isPlaying=false;
let currentSongIndex=0;
const song=["song1.mp3","song2.mp3",'song3.mp3','song4.mp3','song5.mp3'];//array of songs
function playSong(songIndex) {
    audioPlayer.src=song[songIndex];
    audioPlayer.play();
    isPlaying=true;
    playButton.style.display='none';
    pauseButton.style.display='inline-block';
    currSong.innerText="Song Playing-Song"+(songIndex +1);
}//function to update and play the song


function playNext() {
 currentSongIndex=(currentSongIndex + 1) % song.length;
 playSong(currentSongIndex);
}//function to play the next Song

function playPrevious() {
    currentSongIndex=(currentSongIndex-1 + song.length) % song.length;
    playSong(currentSongIndex); 
}//function to play Previous Song

function playPause() {
    if(isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
    playButton.style.display=isPlaying ? 'none' : 'inline-block';
    pauseButton.style.display=isPlaying ? 'inline-block':'none';
    currSong.innerText="Song Playing-Song"+(currentSongIndex + 1);
}//function to toggle play/pause state


//function to update progress Bar
function UpdateprogressBar(){
    const percent=(audioPlayer.currentTime/audioPlayer.duration) * 100;
    progress.style.width=percent + '%';
}

//adding click event Listeners to play,pause,next,previous buttons
/*playButton.addEventListener('click',playPause); 
pauseButton.addEventListener('click',playPause); 
nextButton.addEventListener('click',playNext); 
previousButton.addEventListener('click',playPrevious); 

songList.forEach((song,index) => {
    song.addEventListener('click',()=>{
        currentSongIndex=index;
        playSong(currentSongIndex);
    })
});
//update progress bar on timeupdate event
audioPlayer.addEventListener('timeupdate',UpdateprogressBar);*/