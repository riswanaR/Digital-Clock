let light=document.getElementById("light");
let dark=document.getElementById("dark");
let mode = localStorage.getItem("mode")||"light";
setMode(mode);

function changeMode(){
   
 mode = mode === "black"? "white" : "black";
    setMode(mode);
    localStorage.setItem("mode", mode);
}


function setMode(mode) {
    document.body.style.backgroundColor = mode;
    light.style.display=mode==="black"?"none":"block";
    dark.style.display=mode==="black"?"block":"none";
}

let clock=document.getElementById("clock");


setInterval(showTime, 1000);


function showTime() {
	
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		am_pm;


	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();