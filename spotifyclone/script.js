console.log("welcome to Spotify")
let songIndex = 0;

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));
let songListPlay = document.querySelectorAll('.songlistplay');

let songs=[
    {songName:"Valam",filePath: "Valam Made In China 320 Kbps.mp3",coverPath:"song1.jpg"},
    {songName:"Bargad",filePath: "Bargad.mp3",coverPath:"song2.jpg"},
    {songName:"Bairan",filePath: "Bairan.mp3",coverPath:"song3.jpg"},
    {songName:"I can't fit in",filePath: "I-cant-fit-in.mp3",coverPath:"song1.jpg"},
    {songName:"Ud gaye",filePath: "Udd-Gaye.mp3",coverPath:"song2.jpg"},
    {songName:"Barsaat",filePath: "Barsaat.mp3",coverPath:"song3.jpg"}


]
let audioElement = new Audio();
audioElement.src = songs[0].filePath;

songItems.forEach((element, i) =>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// handle play/pause click.
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    
//update seekbar
let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = () => {
    songListPlay.forEach((element) => {
        let icon = element.querySelector('i');
        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
    });
};
songListPlay.forEach((element, i) => {
    element.addEventListener('click', (event) => {
        makeAllPlays();

        let icon = element.querySelector('i');
        icon.classList.remove('fa-circle-play');
        icon.classList.add('fa-circle-pause');

        audioElement.src = songs[i].filePath;
        audioElement.currentTime = 0;
        audioElement.play();

        masterSongName.innerText = songs[i].songName; 
        gif.src = songs[i].coverPath;        

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        gif.style.opacity = 1;
    });
});