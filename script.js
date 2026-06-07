const text =
"siah TUA , INFO NILAI PKN 34 BOSSSS";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

document
.getElementById("startBtn")
.addEventListener("click",()=>{

document
.getElementById("loading-screen")
.style.display="none";

confetti({
particleCount:200,
spread:180
});

});


const particles = [
"images/bunga1.png",
"images/bunga2.png",
"images/bunga3.png",
"images/hati.png",
"images/bintang.png"
];

function createFlower(){

const flower =
document.createElement("img");

flower.src =
particles[Math.floor(Math.random()*particles.length)];

flower.classList.add("flower");

flower.style.left =
Math.random()*100+"vw";

flower.style.width =
(25+Math.random()*20)+"px";

flower.style.animationDuration =
(6+Math.random()*8)+"s";

document.body.appendChild(flower);

setTimeout(()=>{
flower.remove();
},15000);

}


setInterval(createFlower,300);

document
.getElementById("surpriseBtn")
.addEventListener("click",()=>{

document
.getElementById("popup")
.style.display="flex";

confetti({

particleCount:300,
spread:200,
origin:{y:.6}

});

setTimeout(()=>{

document
.getElementById("popup")
.style.display="none";

},4000);

});