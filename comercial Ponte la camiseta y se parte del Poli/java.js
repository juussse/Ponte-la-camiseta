window.scroll({
  top: 0,
  left: 100,
  behavior: 'smooth'
});

function desl() {
	lin.style.animation = "deslizar 1s"
}

function mantener() {
	dd.style.animation = "mantener 1s infinite"
}

function mantener2() {
	uu.style.animation = "mantener 2s infinite"
}
function mantener3() {
	img.style.animation = "mantener 2s infinite"
	fondo.style.animation = "mantener 2s infinite"
	document.getElementById("bod").style.cssText = "overflow-y: scroll;"
}

function opaco() {
	uu.style.animation = "aparecer 1s"
	setTimeout(mantener2, 1000)
}
function opaco3() {
	fondo.style.animation = "aparecer1 2s"
}
function opaco2() {
	img.style.animation = "aparecer2 2s"
	setTimeout(opaco3, 0)
	setTimeout(mantener3, 2000)
}

function aparicion() {
	dd.style.animation = "slide 0.5s"
	setTimeout(mantener, 500)
	setTimeout(opaco, 500)

}

setTimeout(aparicion, 1500)
desl();
setTimeout(opaco2, 4000)

document.addEventListener("mousemove", parallax);
function parallax(e) {
	var ancho = screen.width;

	if(ancho>770){
		document.querySelectorAll(".fond").forEach(function(move){
			var moving_value = move.getAttribute("data-value");
			var x = (e.clientX * moving_value) / 200;
			var y = (e.clientY * moving_value) / 200;

			move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
		});
	}
}

document.addEventListener("mousemove", parallax2);
function parallax2(e) {
	var ancho = screen.width;

	if(ancho>770){
		document.querySelectorAll(".fond2").forEach(function(move){
			var moving_value = move.getAttribute("data-value");
			var x = (e.clientX * moving_value) / 180;
			var y = (e.clientY * moving_value) / 180;

			move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
		});
	}
}