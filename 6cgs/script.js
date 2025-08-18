var slideIndexA = 1;
showDivsA(slideIndexA);

function plusDivsA(n) {
  showDivsA(slideIndexA += n);
}

function showDivsA(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesA");
  if (n > x.length) {slideIndexA = 1} 
  if (n < 1) {slideIndexA = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndexA-1].style.display = "block"; 
}

var slideIndexB = 1;
showDivsB(slideIndexB);

function plusDivsB(n) {
  showDivsB(slideIndexB += n);
}

function showDivsB(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesB");
  if (n > x.length) {slideIndexB = 1} 
  if (n < 1) {slideIndexB = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndexB-1].style.display = "block"; 
}

var slideIndexC = 1;
showDivsC(slideIndexC);

function plusDivsC(n) {
  showDivsC(slideIndexC += n);
}

function showDivsC(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesC");
  if (n > x.length) {slideIndexC = 1} 
  if (n < 1) {slideIndexC = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndexC-1].style.display = "block"; 
}


var slideIndexD = 1;
showDivsD(slideIndexD);

function plusDivsD(n) {
  showDivsD(slideIndexD += n);
}

function showDivsD(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesD");
  if (n > x.length) {slideIndexD = 1} 
  if (n < 1) {slideIndexD = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndexD-1].style.display = "block"; 
}


var slideIndexE = 1;
showDivsE(slideIndexE);

function plusDivsE(n) {
  showDivsE(slideIndexE += n);
}

function showDivsE(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesE");
  if (n > x.length) {slideIndexE = 1} 
  if (n < 1) {slideIndexE = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndexE-1].style.display = "block"; 
}


var slideIndexF = 1;
showDivsF(slideIndexF);

function plusDivsF(n) {
  showDivsF(slideIndexF += n);
}

function showDivsF(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesF");
  if (n > x.length) {slideIndexF = 1} 
  if (n < 1) {slideIndexF = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndexF-1].style.display = "block"; 
}




