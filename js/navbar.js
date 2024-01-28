(() => {
    const getCurrentPage = () => {
        const parts = window.location.pathname.split('/');
        return parts.at(parts.length - 1);
    };


    const getNavbarHtml = (currentPage) => {
        const getDepthStr = () => {
            const base = window.location.pathname;
            const depth = base.split('/').length - 2;
            let depthStr = "";
            for(let i = 0; i < depth; i++) {
                depthStr += '../'
            }
            return depthStr;
        }

        const depthStr = getDepthStr();

        const getHomePage = (page) => {
            switch (page) {
                case 'index.html': return `<strong>James Meyer</strong>`;
                default: return `<a href="${depthStr}index.html">Home</a>`;
            }
        };

        const getPageList = (currentPage) => {
            const pages = [
                { href: `${depthStr}site/resume.html`, text: "Resume" },
                { href: `${depthStr}site/articles.html`, text: "Articles" },
                { href: `${depthStr}site/blogs.html`, text: "blogs.html" },
                { href: `${depthStr}site/tutorials.html`, text: "tutorials.html" }
            ];

            return pages.filter(x => x.href !== currentPage)
                .map(x => `<li><a href="${x.href}">${x.text}</a></li>`)
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