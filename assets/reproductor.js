var maximo=600;


window.addEventListener('load', iniciar, false);


function iniciar(){
	iniciar_video();
	iniciar_audio();
}


function iniciar_video() {
	v_medio=document.getElementById('videomedio');
	v_reproducir=document.getElementById('videoreproducir');
	v_barra=document.getElementById('videobarra');
	v_progreso=document.getElementById('videoprogreso');

	v_reproducir.addEventListener('click', v_presionar, false);
	v_barra.addEventListener('click', v_mover, false);
}


function iniciar_audio() {
	a_medio=document.getElementById('audiomedio');
	a_reproducir=document.getElementById('audioreproducir');
	a_barra=document.getElementById('audiobarra');
	a_progreso=document.getElementById('audioprogreso');

	a_reproducir.addEventListener('click', a_presionar, false);
	a_barra.addEventListener('click', a_mover, false);
}


function v_presionar() {
	if (!v_medio.paused && !v_medio.ended) {
		v_medio.pause();
		v_reproducir.innerHTML='Reproducir';
		window.clearInterval(v_bucle);
	}else{
		v_medio.play();
		v_reproducir.innerHTML='Pausa';
		v_bucle = setInterval(v_estado, 100);
	}
}


function v_estado() {
	if ((v_medio.currentTime > 14) && (v_medio.currentTime < 14.2)){
		alert('clonck!');
	}
	if (!v_medio.ended) {
		var total=parseInt(v_medio.currentTime*maximo/v_medio.duration);
		v_progreso.style.width = total + 'px';
	}else{
		v_progreso.style.width = '0px';
		v_reproducir.innerHTML = 'Reproducir';
		window.clearInterval(v_bucle);
	}
}


function v_mover(e) {
	if (!v_medio.paused && !v_medio.ended) {
		var ratonX=e.pageX-v_barra.offsetLeft;
		var nuevoTiempo=ratonX*v_medio.duration/maximo;
		v_medio.currentTime=nuevoTiempo;
		v_progreso.style.width=ratonX+'px';
	}
}


function a_presionar() {
	if (!a_medio.paused && !a_medio.ended) {
		a_medio.pause();
		a_reproducir.innerHTML='Reproducir';
		window.clearInterval(a_bucle);
	}else{
		a_medio.play();
		a_reproducir.innerHTML='Pausa';
		a_bucle = setInterval(a_estado, 1000);
	}
}


function a_estado() {
	if (!a_medio.ended) {
		var total=parseInt(a_medio.currentTime*maximo/a_medio.duration);
		a_progreso.style.width = total + 'px';
	}else{
		a_progreso.style.width = '0px';
		a_reproducir.innerHTML = 'Reproducir';
		window.clearInterval(a_bucle);
	}
}


function a_mover(e) {
	if (!a_medio.paused && !a_medio.ended) {
		var ratonX=e.pageX-a_barra.offsetLeft;
		var nuevoTiempo=ratonX*a_medio.duration/maximo;
		a_medio.currentTime=nuevoTiempo;
		a_progreso.style.width=ratonX+'px';
	}
}

