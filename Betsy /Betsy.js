const coinSfx = new Sfx('sfx/Mario Coin.wav');
const pipeSfx = new Sfx('sfx/Mario Pipe.wav');
const powerUpSfx = new sfx('sfx/Mario Powerup.war');
const container = docment.querySelector('.content' );
let ninja;

function sfx(src) {
  this.sound = document.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute('preload' , 'auto');
  this.sound.setAttribute('controls' , 'none');
  this.sound.style.display = 'none' ;
  document.body.appendchild(this.sound);
  this.play =funtion(){
    this.sound.play();
  };
}

function Ninjas(name, age, height, color) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.color = color;

  this.coin = () => {
    //audio
    conSfx.play();
  
  
  





































//Loader
window.addEventListener('load' , () => {
  const loader = document.querSelector('style', 'opacity: 0;');
}, 500);
setTimeout(() => {
  loader.parentNode.removeChild(loader);
  document.body.style.overflow ='initial';
}, 1000);
});



