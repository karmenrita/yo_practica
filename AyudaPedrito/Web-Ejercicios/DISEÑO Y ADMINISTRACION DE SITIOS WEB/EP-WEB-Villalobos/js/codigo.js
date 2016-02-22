// JavaScript Document

var cajaaviso;

	window.onload = init;
    function init()
    {
		alert("Bienvenido a mi web");
		document.title = "Historia";
		cajaaviso = document.getElementById("aviso");
        setTimeout(mostrar, 1000);
		
	}
	function mostrar()
    {
        cajaaviso.style.display="block";
    }