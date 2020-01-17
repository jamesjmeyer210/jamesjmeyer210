(function(){
    
    const speed = 50;

    const typeWriter = (str, i) => {
        if (i < str.length) {
            document.getElementById("terminal").innerHTML += str.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
	
	const txt = {
		startup: [
			'Loading components...',
			'index.html',
			'terminal.css',
			'index.js',
			'Component loaded succesfully!'
		],
		header: [
			'. ___[ James Meyer ]___ .',
			'. ___[ Software Engineer ]___ .'
		],
	}
	
	console.log(txt);
	
	const renderTxt = (lines) => {
		console.log(lines);
		lines.forEach((line) => {
			console.log(line);
			let i = 0;
			typeWriter(line, i);
		});
	}
	
	renderTxt(txt.startup);
	renderTxt(txt.header);
})();