var imgArray = new Array();
imgArray[0] = "bg11.jpg";
imgArray[1] = "bg3.jpg";
imgArray[2] = "bg9.jpg";
imgArray[3] = "bg8.jpg";
imgArray[4] = "bg7.jpg";
imgArray[5] = "bg6.jpg";
imgArray[6] = "bg1.jpg";
imgArray[7] = "bg4.jpg";
imgArray[8] = "bg10.jpg";
imgArray[9] = "bg5.jpg";

function showImage(){
  var imgNum = Math.round(Math.random()*9);
  var objImg = document.getElementById("introImg");
  objImg.src = imgArray[imgNum];
}