/* this script will be used to code the game. 
distributing the elements comes later */

$( document ).ready(function() {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.fillStyle = 'blue';
	context.font = 'bold 16px Arial';
	context.fillText('Zibri', 100, 100);

	$( '#board' ).click(function() {
		$( this ).html('');
	});	

});

/*
//function createPlayer() {
	var player = document.createElement('div');

	player.style.width 	= '30px';
	div.style.height	= '100px';
	div.style.background= 'red';
	div.style.color		= 'black';

	canvas.appendChild(div);
//}
*/