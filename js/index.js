(function(){
    
    var i = 0;
    var txt = 'Loading components...';
    var speed = 50;

    const typeWriter = () => {
        if (i < txt.length) {
            document.getElementById("terminal-content").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}());