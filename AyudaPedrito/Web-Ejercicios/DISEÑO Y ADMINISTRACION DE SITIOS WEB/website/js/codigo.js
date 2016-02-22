// JavaScript Document

var _aviso;
var galeria;
var _visor;
var posicion;
var _numImagen;
var _opacidad;
var velocidadY;
var pX, pY;
var aceleracion;
var animacion;
window.onload = init;

function init(){
	posicion = 0;
	galeria = new Array()
	galeria[0] = "image/banner.jpg"
	galeria[1] = "image/img001.jpg"
	galeria[2] = "image/img002.jpg"
	galeria[3] = "image/img003.jpg"
	_visor = document.getElementById("visor");
	_aviso = document.getElementById("aviso");
	_numImagen = document.getElementById("numImagen");
	_numImagen.innerHTML = posicion+1;
	_visor.src = galeria[posicion];
	_aviso.onclick = desaparecer
	window.setTimeout(mostrar,2000);
	window.setInterval(cambiarFoto,1000);
}
function cambiarFoto(){
	posicion++;
	if(posicion == galeria.length){
		posicion = 0;
	}
	_numImagen.innerHTML = posicion+1;
	_visor.src = galeria[posicion];
}

function mostrar(){
	pX = Math.random()*window.innerWidth;
	pY = Math.random()*window.innerHeight;
	_aviso.style.left = pX + "px";
	_aviso.style.top  = pY + "px";
	_aviso.style.display = "table";
}
function desaparecer(){
	//_aviso.style.display = "none";
	document.body.style.backgroundImage = "url(image/galeria2.jpg)";
	
	_opacidad = 1;
	velocidadY = -5;
	aceleracion = 0.03;
	animacion = setInterval(desvanecer,10);
}

function desvanecer(){
	_opacidad-=0.001;
	_aviso.style.opacity = _opacidad;
	velocidadY += aceleracion;
	pY+=velocidadY;
	_aviso.style.top = pY + "px";
	
	crearCajitas();
	
	if (pY>=window.innerHeight){
		clearInterval(animacion) //para eliminar setInterval
	}
}

function crearCajitas(){
	var nuevaCajita;
	nuevaCajita = new caja();
	document.body.appendChild(nuevaCajita.div);
}