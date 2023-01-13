var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var colors = ["#ff0000", "#ff4000", "#ff8000", "#ffbf00", "#ffff00", "#bfff00", "#80ff00", "#40ff00", "#00ff00", "#00ff40", "#00ff80", "#00ffbf", "#00ffff", "#00bfff", "#0080ff", "#0040ff", "#0000ff", "#4000ff", "#8000ff", "#bf00ff", "#ff00ff", "#ff00bf", "#ff0080", "#ff0040", "#ff0000"],
	box = document.getElementById("mv"),
	currentColor = Math.floor(25 * Math.random() + 1),
	win = window,
	ww = win.innerWidth,
	wh = win.innerHeight,
	translateX = Math.floor(Math.random() * ww + 1),
	translateY = Math.floor(Math.random() * wh + 1),
	boxWidth = box.offsetWidth,
	boxHeight = box.offsetHeight,
	boxTop = box.offsetTop,
	boxLeft = box.offsetLeft,
	xMin = -boxLeft,
	yMin = -boxTop,
	xMax = win.innerWidth - boxLeft - boxWidth,
	yMax = win.innerHeight - boxTop - boxHeight,
	request = null,
	direction = "se",
	speed = 4,
	timeout = null;


function init() {
	request = requestAnimationFrame(init), move()
	box.innerHTML = "            <pre>\n\
,-.___,-.\n\
\\_/_ _\\_/\n\
  )O_O(\n\
 { (_) }\n\
  `-^-'\n\
            </pre>"
}

function update() {
	xMin = -boxLeft, yMin = -boxTop, xMax = win.innerWidth - boxLeft - boxWidth, yMax = win.innerHeight - boxTop - boxHeight
}

function move() {
	setDirection(), setStyle(box, {
		transform: "translate3d(" + translateX + "px, " + translateY + "px, 0)"
	})
}

function setDirection() {
	switch (direction) {
		case "ne":
			translateX += speed, translateY -= speed;
			break;
		case "nw":
			translateX -= speed, translateY -= speed;
			break;
		case "se":
			translateX += speed, translateY += speed;
			break;
		case "sw":
			translateX -= speed, translateY += speed
	}
	setLimits()
}

function setLimits() {
	translateY <= yMin && ("nw" == direction ? direction = "sw" : "ne" == direction && (direction = "se"), switchColor()), translateY >= yMax && ("se" == direction ? direction = "ne" : "sw" == direction && (direction = "nw"), switchColor()), translateX <= xMin && ("nw" == direction ? direction = "ne" : "sw" == direction && (direction = "se"), switchColor()), translateX >= xMax && ("ne" == direction ? direction = "nw" : "se" == direction && (direction = "sw"), switchColor())
}

function switchColor() {
	for (var e = Math.floor(25 * Math.random() + 1); e == currentColor;) e = Math.floor(25 * Math.random() + 1);
	setStyle(box, {
		color: colors[e]
	}), currentColor = e
}

function getVendor() {
	var e = navigator.userAgent.toLowerCase();
	return {
		opera: "-o-",
		chrome: "-webkit-",
		safari: "-webkit-",
		firefox: "-moz-",
		trident: "-ms-",
		msie: "-ms-"
	}[(/opera/.exec(e) || /msie/.exec(e) || /firefox/.exec(e) || /(chrome|safari)/.exec(e) || /trident/.exec(e))[0]]
}

function setStyle(e, t) {
	var o, i = getVendor(),
		n = "";
	for (o in t) n += o + ": " + t[o] + ";", n += i + o + ": " + t[o] + ";";
	e.style.cssText += n
}
init(), window.addEventListener("resize", function (e) {
	clearTimeout(timeout), timeout = setTimeout(update, 100)
}, !1);
setInterval(function () {
	if (document.getElementsByTagName("cursor")[0].innerText == "_") {
		document.getElementsByTagName("cursor")[0].innerText = " "
	} else {
		document.getElementsByTagName("cursor")[0].innerText = "_"
	}
}, 500)

}