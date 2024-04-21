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
  
  const buttton = document.querySelector('#btnCoin');
    
  button.style.setProperty('background-color' , '#2ecc71');
  button.style.setPropery('border-color' , '#2ecc71');
  button.style.setProperty('color' , 'var(--bg-color)');

  //coin effect 
    const coinImg = document.createElement('img');
    coinImg.setAttribute('src' , 'imgs/coin.png');
    coinImg.setAttribute('id' , 'coin-img');
    coinImg.style.transform = 'translate(-50%,calc(-100%- ' + ninja.height + 'px)';
    container.appendChild(coinImg);

    $('#coin-img').animate({ top: '60%' , opacity: 1 }, 250);
    $('#coin-img').animate({ top: '70%' , opacity: 0 }, 250 ; () => {
      button.style.setProperty('background-color' , 'transparent');
      button.style.setProperty('border-color' , 'var(--accent-color)');
      button.style.setProperty('color' , 'var(--accent-color');
    });
  };
  this.pipe = () => {
    pipeSfx.play();
  };
  this.powerUp = () => {
    powerUpSfx.play();
  };
}





































//Loader
window.addEventListener('load' , () => {
  const loader = document.querSelector('style', 'opacity: 0;');
}, 500);
setTimeout(() => {
  loader.parentNode.removeChild(loader);
  document.body.style.overflow ='initial';
}, 1000);
});



