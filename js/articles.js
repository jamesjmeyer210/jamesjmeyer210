'use strict';

(async () => {
    const getArchiveOrgHtml = (url) => {
        if(url == null) {
            return `[not archived]`;
        }
        else {
            return `<a target="_blank" href="${url}">[archive.org]</a>`;
        }
    }

    const response = await fetch(`${window.location.origin}/resources/articles.json`);
    const articles = await response.json();
    console.assert(Array.isArray(articles));

    let html = '';
    for(let i = 0; i < articles.length; i++){
        let section = articles[i];
        console.assert(typeof(section) === 'object');

        const subArticles = section['articles'];
        console.assert(Array.isArray(subArticles));

        html += `<div>`
        html += `<h2>${section['source']} [${subArticles.length}]</h2>`
        html += `<ul>`
        for(let j = 0; j < subArticles.length; j++){
            const article = subArticles[j];
            html += `
            <li>
                <em>${article['date']}</em> <strong>${article['title']}</strong>
                <a target="_blank" href="${article['originalUrl']}">[link]</a>
                ${getArchiveOrgHtml(article['archiveOrgUrl'])}
            </li>`
        }
        html += `</ul>`
        html += `</div>`
    }

    const main = document.createElement("main");
    main.id = "articles";
    main.innerHTML = html;
    const articleScript = document.getElementById('articles');
    articleScript.replaceWith(main);
})();