'use strict';

const showArticle = (articleUrl) => {
    const getOrCreateArticle = (id) => {
        let element = document.getElementById(id);
        if (element === null || element === undefined) {
            element = document.createElement('article');
            element.id = id;
        }
        return element;
    }

    fetch(articleUrl)
        .then(res => res.text())
        .then(text => {
            const converter = new showdown.Converter();
            const html = converter.makeHtml(text);

            const article = getOrCreateArticle('current-article');
            article.innerHTML = html;

            const main = document.getElementById('main');
            main.appendChild(article);
        });
};