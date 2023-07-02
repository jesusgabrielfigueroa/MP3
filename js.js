const play = document.querySelector("#play");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const audio = document.querySelector("#audio");
const relleno = document.querySelector("#relleno");
const add = document.querySelector("#add");
const contAdd = document.querySelector("#cont-add");
const yes = document.querySelector("#yes");
const back = document.querySelector("#back");
const cho = document.querySelector("#cho");
const name = document.querySelector("#name");
const MusicName = document.querySelector("#music-name");

var index = 0;
var pause = false;

document.addEventListener("load", function(){
	console.log("yes");
})



// BARRA DE TIEMPO


var segundo = 0;
var se = 1;

audio.addEventListener("timeupdate", function(){
	segundo = audio.currentTime.toFixed(0);
	if(segundo == se){
		se++;
		segundo++;
	}
	relleno.style.width = `${(se / audio.duration.toFixed(0))*100}%`;
	// console.log(`${(se / audio.duration.toFixed(0))*100}%`);
})


// BTN AÑADIR



add.onclick = function(){
	contAdd.classList.toggle("close");
}


var songs = [];
var names = [];
var music;

function rest(){
	audio.pause();
	pause = false;
	play.classList.remove("pause");
	relleno.style.width = "0%";
	segundo = 0;
	se = 1;
}

yes.onclick = function(){
	rest();
	let file = cho.files[0];
	const reader = new FileReader();
	reader.onload = function(e){
		music = reader.result;
		songs.push(music);
		index = songs.length;
		audio.src = songs[index - 1];
		names.push(MusicName.value);
		name.innerText = names[index - 1];
		MusicName.value = "";
		pau();
	}
	reader.readAsDataURL(file);
	
}

back.onclick = ()=>{
	cho.value = "";
	MusicName.value = "";
	contAdd.classList.add("close");
}

function pau(){
	if(pause){
		audio.play();
	}
	else{
		audio.pause();
	}
}


// BOTON PLAY

function pla(){
	if(pause){
		audio.pause();
		pause = false;
	}
	else{
		audio.play();
		pause = true;
	}
}



play.onclick = ()=>{
	play.classList.toggle("pause");
	pla();
}


// CHANGE MUSIC



left.onclick = async function(){
	if(index > 1){
		index--;
		audio.src = songs[index - 1];
		name.innerText = names[index - 1];
		segundo = 0;
		se = 1;
		relleno.style.width = `0%`;
		pau();
	}
}

right.onclick = function(){
	if(index < songs.length){
		index++;
		audio.src = songs[index - 1];
		name.innerText = names[index - 1];
		segundo = 0;
		se = 1;
		relleno.style.width = `0%`;
		pau();
	}
}

