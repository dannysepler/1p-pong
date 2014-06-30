/* this script will be used to code the game. 
distributing the elements comes later */

function fillWhite( ctx ) {
	ctx.fillStyle='white';
	ctx.fillRect(0,0,300,500);
}

function clear( ctx ) {
	ctx.clearRect(0,0,300,500);
	fillWhite( ctx );
}


/* ~~~~~~~ THE FIRST FUNCTION ~~~~~~~ */
function start() {
	var c = document.getElementById("board");
	var ctx = c.getContext("2d");

	// background color
	fillWhite( ctx );

	/* start message */
	ctx.font="20px Georgia";
	ctx.fillStyle='black';
	ctx.fillText("Click to Start!",70,70);

	/* line underneath the text */
	ctx.beginPath();
    ctx.moveTo(70, 80);
    ctx.lineTo(190, 80);
    ctx.stroke();

	c.onclick = function() { 
		clear( ctx );
		createPlayer();
		startTheGame();
	}
}

function move( gap ) {
	var p = document.getElementById('player');
	var margin = p.style.marginTop;
	margin = margin.slice(0, -2);	
	margin = parseInt( margin );
	margin += gap;
	if (margin < -320 || margin > -80 ) return;
	p.style.marginTop = margin.toString() + 'px';
}

function startTheGame() {
	var c = document.getElementById('board');
	var ctx = c.getContext('2d');

	document.onkeydown = function() {
	    switch (window.event.keyCode) {
	        case 38: // up arrow
	            move( -10 );
	            break;
	        case 40: // down arrow
	            move( 10 );
	            break;
	    }
	};
}

function createPlayer() {
	var c = document.getElementById("board");
	var ctx = c.getContext("2d");
	
	var player = document.createElement('div');

	player.style.width 	= '15px';
	player.style.height	= '70px';
	player.style.background= 'red';
	player.style.color		= 'black';
	player.style.border	= '1px solid black';
	player.style.position	= 'absolute';
	player.style.marginLeft = '50px';
	player.style.marginTop = '-200px';

	player.id = 'player';

	var w = document.getElementById('wrapper');
	w.appendChild(player);
}
