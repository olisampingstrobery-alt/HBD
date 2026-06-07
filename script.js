const text =
"fadilah lucu imuft baik hati dan tidak sombonk, INFO NILAI PKN 34 BOSSSS";

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

// ============================
// LOADING SCREEN
// ============================
document.getElementById('startBtn').addEventListener('click', function () {
  const loading = document.getElementById('loading-screen');
  loading.style.transition = 'opacity 1s';
  loading.style.opacity = '0';
  setTimeout(() => { loading.style.display = 'none'; }, 1000);
});

// ============================
// TYPING EFFECT
// ============================
const texts = [
  "Happy Birthday, fadilah lucu imuft baik hati dan tidak sombonk 🎂",
  "BTW TUTOR NILAI PKN 34 DONG🏆",
  "Semoga hari-harimu penuh kebahagiaan 🎉",
  "Semangat terus calon mahasiswa! 📚",
  "Semoga impianmu segera tercapai ✨",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing');

function type() {
  const current = texts[textIndex];

  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex--);
  } else {
    typingEl.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500); // pause sebelum hapus
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 40 : 80);
}

type();

// ============================
// BUNGA JATUH
// ============================
const flowers = ['🌸', '🌺', '🌷', '💐', '🌼'];

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.fontSize = (Math.random() * 20 + 15) + 'px';
  flower.style.animationDuration = (Math.random() * 4 + 4) + 's';
  flower.style.animationDelay = (Math.random() * 2) + 's';
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 8000);
}

setInterval(createFlower, 600);

// ============================
// SURPRISE BUTTON → JUMPSCARE
// ============================
const surpriseBtn = document.getElementById('surpriseBtn');
const jumpscare   = document.getElementById('jumpscare');
const video       = document.getElementById('jumpscareVideo');
const popup       = document.getElementById('popup');

surpriseBtn.addEventListener('click', function () {
  // Tampilkan jumpscare fullscreen
  jumpscare.style.display = 'flex';
  video.currentTime = 0;
  video.play();
});

// Setelah video selesai → munculkan popup birthday
video.addEventListener('ended', function () {
  jumpscare.style.display = 'none';
  popup.style.display     = 'flex';

  // Popup hilang otomatis setelah 5 detik
  setTimeout(() => { popup.style.display = 'none'; }, 5000);
});

// Klik layar saat jumpscare = skip video
jumpscare.addEventListener('click', function () {
  video.pause();
  jumpscare.style.display = 'none';

  // Tetap munculkan popup meski di-skip
  popup.style.display = 'flex';
  setTimeout(() => { popup.style.display = 'none'; }, 5000);
});

// Klik popup untuk tutup manual
popup.addEventListener('click', function () {
  popup.style.display = 'none';
});