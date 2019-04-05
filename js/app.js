'use strict';

Picture.allPics = [];

var totalSelections = 0;

var numImages = 3;
var maxSelections = 25;

function Picture(name, fileUrl){
  this.name = name;
  this.fileUrl = fileUrl;
  Picture.allPics.push(this);
  this.displayed = false;
  this.numClicks = 0;
  this.timesShown = 0;
  this.imgId = '';
}

Picture.prototype.setDisplay = function(status){
  this.displayed = status;
};

Picture.prototype.increaseShown = function(){
  this.timesShown = this.timesShown + 1;
};

Picture.prototype.increaseClicked = function(){
  this.numClicks = this.numClicks + 1;
};

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
new Picture('Sweep', 'img/sweep.png');
new Picture('Tauntaun', 'img/tauntaun.jpg');
new Picture('Unicorn', 'img/unicorn.jpg');
new Picture('USB', 'img/usb.gif');
new Picture('Water Can', 'img/water-can.jpg');
new Picture('Wine Glass', 'img/wine-glass.jpg');

// display random goat images
function generateRandomPic() {
  var randomIdx = Math.floor(Math.random() * Picture.allPics.length);
  return randomIdx;
}

function setListeners()
{
  var imgObject1 = document.getElementById('img1');
  imgObject1.addEventListener('click', displayPic);

  var imgObject2 = document.getElementById('img2');
  imgObject2.addEventListener('click', displayPic);

  var imgObject3 = document.getElementById('img3');
  imgObject3.addEventListener('click', displayPic);
}

function setPicDisplayStatus(filePath, displayStatus){
  for(var p=0; p<Picture.allPics.length; p++){
    var picFilePath = Picture.allPics[p].fileUrl;
    if(filePath === picFilePath){
      Picture.allPics[p].setDisplay(displayStatus);
      break;
    }
  }
}

function picClicked(filePath){
  for(var p=0; p<Picture.allPics.length; p++){
    var picFilePath = Picture.allPics[p].fileUrl;
    if(filePath === picFilePath){
      Picture.allPics[p].increaseClicked();
      break;
    }
  }
}

function displayPic() {
  var shownAlready = true;
  var randomIdx = 0;
  totalSelections = totalSelections + 1;
  picClicked(this.getAttribute('src'));
  while(shownAlready){
    randomIdx = generateRandomPic();
    shownAlready = Picture.allPics[randomIdx].displayed;
  }
  setPicDisplayStatus(Picture.allPics[randomIdx].fileUrl, true);
  setPicDisplayStatus(this.getAttribute('src'), false);
  Picture.allPics[randomIdx].increaseShown();
  this.src = Picture.allPics[randomIdx].fileUrl;
  checkMaxClicks();
}

function checkMaxClicks(){
  if(maxSelections === totalSelections) {
    removeListeners();
    writeResults();
  }
}

function removeListeners(){
  var imgObject1 = document.getElementById('img1');
  imgObject1.removeEventListener('click', displayPic);

  var imgObject2 = document.getElementById('img2');
  imgObject2.removeEventListener('click', displayPic);

  var imgObject3 = document.getElementById('img3');
  imgObject3.removeEventListener('click', displayPic);
}

function writeResults(){
  var tableObj = document.getElementById('results-table');
  for(var t=0; t<Picture.allPics.length; t++){
    var newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${Picture.allPics[t].numClicks} votes for ${Picture.allPics[t].name}</td>`;
    tableObj.appendChild(newRow);
  }
}

setListeners();
