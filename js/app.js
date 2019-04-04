'use strict';

Picture.allPics = [];

var totalSelections = 0;

function Picture(name, fileUrl){
  this.name = name;
  this.fileUrl = fileUrl;
  Picture.allPics.push(this);
  this.justShown = false;
  this.numClicks = 0;
  this.timesShown = 0;
  this.imgId = '';
}

new Picture('Bag', 'img/bag.jpg');
new Picture('Banana', 'img/banana.jpg');
new Picture('Bathroom', 'img/bathroom.jpg');
new Picture('Boots', 'img/boots.jpg');
new Picture('Breakfast', 'img/breakfast.jpg');
new Picture('Bubblegum', 'img/bubblegum.jpg');
new Picture('Chair', 'img/chair.jpg');
new Picture('Cthulhu', 'img/cthulhu.jpg');
new Picture('Dog Duck', 'img/dog-duck.jpg');
new Picture('Dragon', 'img/dragon.jpg');
new Picture('Pen', 'img/pen.jpg');
new Picture('Pet Sweep', 'img/pet-sweep.jpg');
new Picture('Scissors', 'img/scissors.jpg');
new Picture('Shark', 'img/shark.jpg');
new Picture('Sweep', 'img/sweep.jpg');
new Picture('Tauntaun', 'img/tauntaun.jpg');
new Picture('Unicorn', 'img/unicorn.jpg');
new Picture('USB', 'img/usb.jpg');
new Picture('Water Can', 'img/water-can.jpg');
new Picture('Wine Glass', 'img/wine-glass.jpg');