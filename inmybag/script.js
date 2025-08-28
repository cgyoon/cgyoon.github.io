function bgmSelect() {
  var x = document.getElementById("songs").value;
  document.getElementById("bgm").src =  x + ".mp4";
  document.getElementById("nowplaying").innerHTML = "현재 재생 중인 노래 제목은" + x + "입니다";
}