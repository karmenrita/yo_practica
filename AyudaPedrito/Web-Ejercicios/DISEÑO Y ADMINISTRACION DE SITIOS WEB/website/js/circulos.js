// JavaScript Document

function caja(){
	this.div = document.createElement("div"),
	this.div.style.height = "50px";
	this.div.style.width = "50px";
	this.div.style.borderRadius = "50%";
	this.div.style.backgroundColor = "#fc0";
	this.div.style.position ="absolute";
	this.div.style.left = Math.random()*window.innerWidth + "px";
	this.div.style.top  = Math.random()*window.innerHeight + "px";
	var obj = this;
	this.div.onclick = desaparecer;
	function desaparecer(){
		this.parentNode.removeChild(obj.div);
	}
}