// JavaScript Document

var barratop;
var cajaaviso;

var muestras;
var galeria;
var posicion;
var bretroceder;
var bavanzar;
var intervalo;
var cajanumero;

    window.onload = init;
    function init()
    {
		galeria = new Array();
		galeria[0] = "banner/africa.jpg";
		galeria[1] = "banner/basket.jpg";
		galeria[2] = "banner/cabana.jpg";
		galeria[3] = "banner/campamento.jpg";
		galeria[4] = "banner/catarata.jpg";
		galeria[5] = "banner/chimpance.jpg";
		galeria[6] = "banner/elefantes.jpg";
		galeria[7] = "banner/macchupicchu.jpg";
		galeria[8] = "banner/viajero.jpg";
		posicion = 0;
		
        barratop = document.getElementById("top-nav");
        cajaaviso = document.getElementById("aviso");
		
		muestra = document.getElementById("visor");
		bretroceder = document.getElementById("btnretroceder");
		bavanzar = document.getElementById("btnavanzar");
		cajanumero = document.getElementById("leyenda");
		muestra.src = galeria[posicion];
		cajanumero.innerHTML = posicion + 1;
		intervalo = setInterval(animacion, 3000);
		
		bavanzar.onclick = avanzar;
		
        //window.alert("No debo espiar a las personas xD")
        document.title = "Soy 3Dcero q se respeta";
        document.body.style.backgroundColor="#8A011B";
        barratop.style.backgroundColor="#9B8402";
        cajaaviso.onclick = cambiar;
        setTimeout(mostrar, 3000);
    }
    function cambiar()
    {
        barratop.style.backgroundColor="#FF8E43"
    }

    function mostrar()
    {
        cajaaviso.style.display="block";
    }
	
	function avanzar(){
		clearInterval(intervalo);
		intervalo = setInterval(animacion, 3000);
		animacion();
	}
	
	function animacion(){
		posicion++;
		if(posicion == galeria.length){
			posicion = 0;
		}
		cajanumero.innerHTML = posicion + 1;
		muestra.src = galeria[posicion];
	}
