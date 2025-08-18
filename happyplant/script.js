function aaa() {
	fir = new Array(45);
	sec = new Array(6);
	for (i = 0; i < 45; i++) fir[i] = i + 1;
	for (i = 0; i < 6; i++) {
		ran = parseInt(Math.random()*fir.length);
		sec[i] = fir[ran];
		fir.splice(ran,1); //뽑은 번호 지우기

		//배열 섞기 출처 : http://hashcode.co.kr/questions/1474
		for (h = fir.length; h; h -= 1) {
			j = Math.floor(Math.random() * h);
			x = fir[h - 1];
			fir[h - 1] = fir[j];
			fir[j] = x;
		}

	}

	//무작위로 뽑은 번호를 오름차순으로 배치
	for (i = 0; i < 6; i++) {
		for (j = 0; j <= i; j++) {
			if(sec[i] <= sec[j]) {
				k = sec[i];
				sec[i] = sec[j];
				sec[j] = k;
			}
		}
	} 
	document.getElementById('ddd').innerHTML = sec;
}