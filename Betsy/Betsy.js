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
    coinSfx.play();
  
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


const promUser =() => {
  let name = prompt('Pick a name:') || 'Ninja' ;
let age;
let height;
let color;

this.getAge = () => {
  age = prompt('Pick an age:') || '18';
  age = parseInt(age);
if (isNaN(age)) {
this.getAge();
} else {
  return;
}
};
  
  this.getHeight = () => {
    height = prompt('Pick height: 1, 2, 3, 4') || 4;
    height = parseInt(height);
    if (height === 1 || height === 2 || height=== 3 || height === 4) {
      height = height * 64;
      return;
    } else {
      this.getHeight();
    }
  };

this.getColor = () => {
  color = prompt('Choose color: Red Blue Green') || 'red';
  color = color.toLowerCase();
  if (color === 'red' || color === "blue' || color === 'green') {
      return;
} else {
  this.getColor();
}
};

this.appendImg = () => {
  img = document.createElement('img');
  let size ='width:' + height + 'px;height:' + height + 'px;';
  if (color === 'blue') {
    img.setAttribute('src', 'imgs/ninja1.png');
    img.setAttribute('style', size);
    container.appendchild(img);
  } else if (color === 'green') {
    img.setAttribute('src' , 'imgs/ninja2.png');
    img.setAttribute('style',size);
    container.appendChild(img);
  } else if (color === 'red') {
    img.setAttribute('src' , 'imgs/ninja3.png');
    img.setAttribute('style',size);
    container.appendChild(img);
  }
};

  this.changeBtns = () => {
    const btn = document.querySeletor('button');
    const btnContainer = document.querySelector('.btns-container');
    btnContainer.removeChild(btn);
    btnContainer.innerHTML =
      "<button onclik='ninja.coin()' id='btnCoin'>Coin</button> \n <button onclick='ninja.pipe()'id='btnPipe'>Pipe</button> \n button onclick='ninja.powerUp'() id='btnPowerUp'>Power Up</button>"; 
const newBtns = document.querySelectorAll('button');
  for (let i  = 0; i < newBtns.length; i++) {
    newBtns[i].style.setProperty('margin-Ieft' , '1.5erm');
  }
    
// Add floor 
    const floor = document.createElement('div');
    floor.setAttribute('class' , 'floor');
    contaainer.appendChild(floor);
    floor.innHTML =
      'Name: ' +
      ninja.name +
      '\xa0\za0\xa0Age: ' +
      ninja.age +
      '\xa0\za0\xa0Height: ' +
      ninja.height +
      'px' +
      '\za0\xa0\xa0Color: ' +
      ninla.color;
  };

this.getAge();
this.getHeight();
this.getColor();

ninja = new Nonjas(name, age, height, color);

this.appendImg();
this.changeBtns();
};
      
























//Loader
window.addEventListener('load' , () => {
  const loader = document.querSelector('style', 'opacity: 0;');
}, 500);
setTimeout(() => {
  loader.parentNode.removeChild(loader);
  document.body.style.overflow ='initial';
}, 1000);
});



