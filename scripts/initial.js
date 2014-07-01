/* this script will be used to code the game. 
distributing the elements comes later */

/* FUNCTIONS THAT GENERALLY JUST DO GOOD THINGS */
function toInt( margin ) { return parseInt( margin.slice(0, -2) ); }

function toString( int ) { return int.toString + 'px'; }

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

    var started = false;

	c.onclick = function() { 
		if (!started) {
			started = true;
			clear( ctx );
			createPlayer();
			createBall();
			startTheGame();
		}
	}
}

function move(ID, gap, direction ) {
	var p = document.getElementById(ID);
	if (direction == 'up') var margin = p.style.marginTop;
	else var margin = p.style.marginLeft;

	margin = margin.slice(0, -2);	
	margin = parseInt( margin );
	margin += gap;
	
	if (ID == 'player' && (margin < -320 || margin > -80)) return;
	
	if  (direction == 'up') p.style.marginTop = margin.toString() + 'px';
	else p.style.marginLeft = margin.toString() + 'px';
}

function startTheGame() {
	var c = document.getElementById('board');
	var ctx = c.getContext('2d');

	var dx = Math.floor((Math.random() * 5) + 3);
	var dy = Math.floor((Math.random() * 5) + 3);
		 // generate random number b/w 3 and 7

	document.onkeydown = function() {
	    switch (window.event.keyCode) {
	        case 38: // up arrow
	            move('player', -10, 'up' );
	            break;
	        case 40: // down arrow
	            move('player', 10, 'up' );
	            break;
	    }
	};
	
	var MAIN_INTERVAL = setInterval(function() {
		var bstyle = document.getElementById( 'ball' ).style;
		var left = toInt( bstyle.marginLeft );
		var top  = toInt( bstyle.marginTop  );

		/* CHANGE DIRECTIONS IF NECESSARY */
		if ( left > 480 /*|| left < 70 */) dx *= -1; // set left and right parameters
		if ( top < -300 || top > -30 ) dy *= -1; // set top and bottom paramaters

		/* INCREMENT COUNTER */
		if (left > 480) {
			var p = document.getElementById('counter').innerHTML;
			p = toInt( p );
			p++;
			document.getElementById('counter').innerHTML = p;
		}

		/* BOUNCE OFF BUMPER (or don't) */
		var pTop = toInt(player.style.marginTop);
		if (left < 70)
			if ( pTop - top < 40 ) dx *= -1;
			else { // die gracefully
				document.getElementById('ball').style.background = 'red';
				clearInterval( MAIN_INTERVAL );

			}

		/* CALL MOVEMENT FUNCTIONS */
		move('ball', dy, 'up');
		move('ball', dx, 'left');
	}, 10); // set how quickly the bottom moves
	
}

function createPlayer() {
	var c = document.getElementById("board");
	var ctx = c.getContext("2d");
	
	var player = document.createElement('div');

	player.style.width 	= '15px';
	player.style.height	= '70px';
	player.style.background= 'green';
	player.style.color		= 'black';
	player.style.border	= '1px solid black';
	player.style.position	= 'absolute';
	player.style.marginTop = '-200px';
	player.style.marginLeft = '50px';

	player.id = 'player';

	document.getElementById('wrapper').appendChild(player);
}

function createBall() {
	var c = document.getElementById('board');
	var ctx = c.getContext('2d');

	var ball = document.createElement('div');

	ball.style.width 	 = '15px';
	ball.style.height	 = '15px';
	ball.style.background= 'black';
	ball.style.position  = 'absolute';
	ball.style.marginLeft= '250px';
	ball.style.marginTop = '-170px';

	ball.id = 'ball';

	document.getElementById('wrapper').appendChild(ball);
}