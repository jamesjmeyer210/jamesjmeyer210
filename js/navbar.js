'use strict';

(() => {
    const getCurrentPage = () => {
        const parts = window.location.pathname.split('/');
        return parts.at(parts.length - 1);
    };


    const getNavbarHtml = (currentPage) => {
        const getDepth = () => {
            return window.location.pathname.split('/').length - 2;
        }

        const depth = getDepth();
        console.debug("depth: " + depth);

        const getDepthStr = () => {
            let depthStr = "";
            for(let i = 0; i < depth; i++) {
                depthStr += '../'
            }
            return depthStr;
        }

        const getSiteStr = () => {
            switch (depth) {
                case 0: return 'site/';
                default: return getDepthStr() + 'site/';
            }
        }

        const depthStr = getDepthStr();

        const getHomePage = (page) => {
            switch (page) {
                case '': return `<strong>James Meyer</strong>`;
                case 'index.html': return `<strong>James Meyer</strong>`;
                default: return `<a href="${depthStr}index.html">Home</a>`;
            }
        };

        const getPageList = (currentPage) => {
            console.debug("currentPage: " + currentPage);
            console.debug("siteStr: " + getSiteStr());

            const pages = [
                { href: `resume.html`, text: "Resume" },
                { href: `articles.html`, text: "Articles" },
                { href: `blogs.html`, text: "Blogs" },
                { href: `tutorials.html`, text: "Tutorials" }
            ];

            return pages.filter(x => x.href !== currentPage)
                .map(x => `<li><a href="${getSiteStr() + x.href}">${x.text}</a></li>`)
                .join('');
        };

        return `${getHomePage(currentPage)}
                <ul>
                    ${getPageList(currentPage)}
                </ul>`;
    }

    const currentPage = getCurrentPage();

    const nav = document.createElement("nav");
    nav.id = "navbar";
    nav.innerHTML = getNavbarHtml(currentPage);
    const navScript = document.getElementById('navbar');
    navScript.replaceWith(nav);
})();