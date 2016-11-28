		function jugementDeg(x1, y1, x2, y2) {
			var _x = Math.abs(x2 - x1);
			var _y = Math.abs(y2 - y1);
			return 360 * Math.atan(_y / _x) / (2 * Math.PI);
		}

		function spaceMin(x1, y1, x2, y2) {
			var _x = Math.abs(x2 - x1);
			var _y = Math.abs(y2 - y1);
			return Math.sqrt(_x * _x + _y * _y) / 2;
		}

		function moveInLeftBottom(x, y, obj1, obj2, obj3) {
			obj1.style.display = "block";
			obj1.style.left = x + "px";
			obj1.style.top = y + "px";
			obj2.style.display = "block";
			obj1.x = jugementDeg(x, y, window.innerWidth, window.innerHeight);
			obj1.z = spaceMin(x, y, window.innerWidth, window.innerHeight);
			obj1.style.webkitTransform = "rotate(" + (-90 + 2 * obj1.x) + "deg)";
			obj1.style.backgroundImage = "-webkit-linear-gradient(-" + (90 - obj1.x) + "deg,rgba(0,0,0,0.7) " + obj1.z + "px,rgba(250,250,250,0.5) " + obj1.z + "px,rgba(250,250,250,0) " + (obj1.z + 30) + "px,rgba(255,255,255,0) 100px)";
			obj2.style.transform = "translate3d(" + (obj1.z * Math.cos(obj1.x * Math.PI / 180) - window.innerWidth + x) + "px," + (-window.innerHeight + y + obj1.z * Math.sin(obj1.x * Math.PI / 180)) + "px,0) rotate(" + obj1.x + "deg)";
			obj3.style.transform = "rotate(" + (-1 * obj1.x) + "deg) translate3d(" + (-window.innerWidth + obj1.z * Math.cos(obj1.x * Math.PI / 180)) + "px," + obj1.z * Math.sin(obj1.x * Math.PI / 180) + "px,0)";
			obj1.xNow = x;
			obj1.yNow = y;
		}

		function moveInLeftTop(x, y, obj1, obj2, obj3) {
			obj1.style.display = "block";
			obj1.style.left = x + "px";
			obj1.style.top = y + "px";
			obj2.style.display = "block";
			obj1.x = jugementDeg(x, y, window.innerWidth, 0);
			obj1.z = spaceMin(x, y, window.innerWidth, 0);
			obj1.style.webkitTransform = "rotateY(180deg) rotateZ(" + (2 * obj1.x + 90) + "deg)";
			obj1.style.backgroundImage = "-webkit-linear-gradient(-" + (90 - obj1.x) + "deg,rgba(0,0,0,0.7) " + obj1.z + "px,rgba(250,250,250,0.5) " + obj1.z + "px,rgba(250,250,250,0) " + (obj1.z + 30) + "px,rgba(250,250,250,0) 100px)";
			obj2.style.transform = "translate3d(" + (x - window.innerWidth + obj1.z * Math.cos(obj1.x * Math.PI / 180)) + "px," + (y - 2 * window.innerHeight - obj1.z * Math.sin(obj1.x * Math.PI / 180)) + "px,0) rotate(" + (-obj1.x) + "deg)";
			obj3.style.transform = "rotate(" + obj1.x + "deg) translate3d(" + (-obj1.z * Math.cos(obj1.x * Math.PI / 180) - x) + "px," + (obj1.z * Math.sin(obj1.x * Math.PI / 180) + window.innerHeight - y) + "px,0)";
			obj1.xNow = x;
			obj1.yNow = y;
		}
		function moveBefore(x,obj1,obj2,obj3){
			obj1.style.display = "block";
			obj1.style.transform = "translateX("+x+"px)"
			obj2.style.display = "block";
			obj1.z = x/2;
			obj1.style.backgroundImage = "-webkit-linear-gradient(right,rgba(0,0,0,0.7) " + obj1.z + "px,rgba(250,250,250,0.5) " + obj1.z + "px,rgba(250,250,250,0) " + (obj1.z + 30) + "px,rgba(250,250,250,0) 100px)";
			obj2.style.transform = "translateX("+(x/2)+"px)";
			obj3.style.transform = "translateX("+(window.innerWidth - x/2)+"px)";
			obj1.xNow = x;
		}
