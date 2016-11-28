function creatFlash(obj,nextBg,nextDOMObj,beforeBg,beforeDOMObj,occ,occ2) {
	obj.addEventListener("touchstart", function(e) {
		e.preventDefault();
		changeBg.style.backgroundImage = nextBg;
		changeBg_LT.style.backgroundImage = nextBg;
		changeBg_Before.style.backgroundImage = beforeBg;
		var eX = e.touches[0].clientX;
		var eY = e.touches[0].clientY;
		if(eX > window.innerWidth - 100 && eY > window.innerHeight * (4 / 5) && nextDOMObj.length != 0) {
			appearDire = 3;
			this.canMoveLB = true;
		}
		if(eX > window.innerWidth - 100 && eY < window.innerHeight / 5 && nextDOMObj.length != 0) {
			appearDire = 2;
			this.canMoveLT = true;
		}
		if(eX < 50 && beforeDOMObj.length != 0){
			appearDire = 4;
			this.canMoveBefore = true;
		}
		this.isCrash = false;
	}, false);
	obj.addEventListener("touchend", function() {
		this.canMoveLB = false;
		this.canMoveLT = false;
		this.canMoveBefore = false;
		if(appearDire == 3 && this.isCrash == true) {
			var moveX = shadow.xNow;
			var moveY = shadow.yNow;
			var speedX = 20 * Math.cos(shadow.x * Math.PI / 180);
			var speedY = 20 * Math.sin(shadow.x * Math.PI / 180);
			clearInterval(appearTimer);
			appearTimer = null;
			if(shadow.z < 150) {
				appearTimer = setInterval(function() {
					moveX += speedX;
					moveY += speedY;
					moveInLeftBottom(moveX, moveY, shadow, shadowIn, changeBg);
					if(moveX > window.innerWidth) {
						clearInterval(appearTimer);
						appearTimer = null;
						moveInLeftBottom(window.innerWidth, window.innerHeight, shadow, shadowIn, changeBg);
						shadow.style.display = "none";
						shadowIn.style.display = "none";
					}
				}, 15);
			} else {
				appearTimer = setInterval(function() {
					changePage.call(obj);
					function changePage() {
						moveX -= speedX;
						moveY -= speedY;
						moveInLeftBottom(moveX, moveY, shadow, shadowIn, changeBg);
						if(moveX < -window.innerWidth || moveY < -window.innerHeight) {
							clearInterval(appearTimer);
							appearTimer = null;
							moveInLeftBottom(window.innerWidth, window.innerHeight, shadow, shadowIn, changeBg);
							shadow.style.display = "none";
							shadowIn.style.display = "none";
							this.style.display = "none";
//							occPage(obj_1,obj_2);
							occ();
						}
					}
				}, 15);
			}
		}
		if(appearDire == 2 && this.isCrash == true) {
			var moveX = shadow_LT.xNow;
			var moveY = shadow_LT.yNow;
			var speedX = 20 * Math.cos(shadow_LT.x * Math.PI / 180);
			var speedY = 20 * Math.sin(shadow_LT.x * Math.PI / 180);
			clearInterval(appearTimer);
			appearTimer = null;
			if(shadow_LT.z < 150) {
				appearTimer = setInterval(function() {
					moveX += speedX;
					moveY -= speedY;
					moveInLeftTop(moveX, moveY, shadow_LT, shadowIn_LT, changeBg_LT);
					if(moveX > window.innerWidth) {
						clearInterval(appearTimer);
						appearTimer = null;
						moveInLeftTop(window.innerWidth, 0, shadow_LT, shadowIn_LT, changeBg_LT);
						shadow_LT.style.display = "none";
						shadowIn_LT.style.display = "none";
					}
				}, 15);
			} else {
				appearTimer = setInterval(function() {
					changePage.call(obj);

					function changePage() {
						moveX -= speedX;
						moveY += speedY;
						moveInLeftTop(moveX, moveY, shadow_LT, shadowIn_LT, changeBg_LT);
						if(moveX < -window.innerWidth || moveY > 2 * window.innerHeight) {
							clearInterval(appearTimer);
							appearTimer = null;
							moveInLeftTop(window.innerWidth, 0, shadow_LT, shadowIn_LT, changeBg_LT);
							shadow_LT.style.display = "none";
							shadowIn_LT.style.display = "none";
							this.style.display = "none";
							occ();
						}
					}
				}, 15);
			}
		}
		if(appearDire == 4 && this.isCrash == true) {
			var moveX = shadowBefor.xNow;
			var speedX = 20;
			clearInterval(appearTimer);
			appearTimer = null;
			if(shadowBefor.z < 100) {
				appearTimer = setInterval(function() {
					moveX -= speedX;
					moveBefore(moveX,shadowBefor,shadowIn_Before,changeBg_Before);
					if(moveX < 0) {
						clearInterval(appearTimer);
						appearTimer = null;
						moveBefore(0,shadowBefor,shadowIn_Before,changeBg_Before);
						shadowIn_Before.style.display = "none";
						shadowBefor.style.display = "none";
					}
				}, 15);
			} else {
				appearTimer = setInterval(function() {
					changePage.call(beforeDOMObj);

					function changePage() {
						moveX += speedX;
						moveBefore(moveX,shadowBefor,shadowIn_Before,changeBg_Before);
						if(moveX > window.innerWidth * 2) {
							clearInterval(appearTimer);
							appearTimer = null;
							moveBefore(window.innerWidth,shadowBefor,shadowIn_Before,changeBg_Before);
							shadowIn_Before.style.display = "none";
							shadowBefor.style.display = "none";
//							this.style.display = "none";
							this.style.display = "block";
							occ2();
						}
					}
				}, 15);
			}
		}

	}, false);
	var add = 0;
	obj.addEventListener("touchmove", function move(e) {
		add++;
		if(this.canMoveLB) {
			this.isCrash = true;
			var eXFinal = e.touches[0].clientX;
			var eYFinal = e.touches[0].clientY;
			moveInLeftBottom(eXFinal, eYFinal, shadow, shadowIn, changeBg);
		}
		if(this.canMoveLT) {
			this.isCrash = true;
			var eXFinal = e.touches[0].clientX;
			var eYFinal = e.touches[0].clientY;
			moveInLeftTop(eXFinal, eYFinal, shadow_LT, shadowIn_LT, changeBg_LT);
		}
		if(this.canMoveBefore){
			this.isCrash = true;
			var eXFinal = e.touches[0].clientX;
			moveBefore(eXFinal,shadowBefor,shadowIn_Before,changeBg_Before);
		}
		// console.log(add);
	}, false);
}