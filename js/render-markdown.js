const renderMarkdown = (id, file) => {
    let converter = new showdown.Converter();

    let req = new XMLHttpRequest();

    req.open('GET', `${window.origin}/${file}`);
    
    req.addEventListener('load', (event) => {
        document.getElementById(id).innerHTML = converter.makeHtml(event.originalTarget.responseText);
    });
    
    req.addEventListener('error', (event) => {
        alert("Something went wrong with the XMLHttpRequest.");
        console.log(event);
    });

    req.send();
};