document.addEventListener('DOMContentLoaded', () =>{
let btn=document.querySelector('.btn');
let image = document.querySelector('#flashlight');
let audio = document.querySelector('#audio');
let hum = document.querySelector('#hum');
let body = document.body;

btn.addEventListener('click', ()=>{
body.classList.toggle("on");
lightchange();
if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
}
});


function lightchange(){
    if(image.src.includes("guy_dark")){
        image.src = "Uh Ohv2-1.png.png";
        hum.play();
        setTimeout(() => {
            image.src = "Uh Oh (unshaded)v2-1.png";
        }, 1700);
    } else {
        image.src = "Uh Ohv2-1.png.png";
    }
}
});