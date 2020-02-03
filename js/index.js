(function(){
    
	const output = 'Loading components...' +
		'index.html' +
		'terminal.css' +
		'index.js' +
		'Component loaded succesfully!' +
		'. ___[ James Meyer ]___ .' +
		'. ___[ Software Engineer ]___ .';

	var i = 0;
	var speed = 50;

	function typeWriter() {
		if (i < output.length) {
			document.getElementById("terminal").innerHTML += output.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	typeWriter();

})();