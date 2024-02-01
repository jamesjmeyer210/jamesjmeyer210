# A Little Javascript Never Hurt

Well, I finally got around to updating my personal website.
In the spirit of my [previous post](../blogs/just-do-it.html), from 3 years ago,
I've made some updates to this website.
They're fairly minimal, but for someone who's spent 95% of his time *not* writing Javascript, the tiny bit I've sprinkled
onto my website it significant.

Before, I had zero javascript on this website.
I also didn't do anything with it.
What I always wanted to do, and finally got around to, is implementing Markdown to HTML rendering.
Markdown has a special place in my heart because it was really all I needed to know in order to write for 
[BitcoinTechWeekly](../articles.html).

Since this site is hosted on GitHub, I had two markdown strategies:
1. Use the gh-pages framework and write the whole site in markdown.
2. Use some javascript and render convert the markdown in HTML on the client.

I opted for the latter.
While I'm all for fully static websites, I just don't want to be bound to framework like that.
Eventually, I do want to transfer this website off of GitHub, and run it as a fully-fledged web-server.
Then, I won't have to rely on client-side rendering and the javascript I sprinkle on top can be for other aesthetic purposes.

## The Design

I wanted to eliminate as much need for copy-pasting without having to rely on a router.
So I divided the site between the actual HTML pages and the resources, like so:
```text
resources/
  blogs/
    a-little-js-never-hurt.md
    just-do-it.md
  blogs.json
site/
  blogs/
    a-little-js-never-hurt.html
    just-do-it.html
  blogs.html    
```

### All the Blogs

When `blogs.html` executes its script, it retrieves `blogs.json`, which has a list of data related to the various blog
posts I've written:
```json
[
  {
    "title": "Just Do It",
    "href": "just-do-it.html",
    "date": "2021-03-30"
  },
  //...
]
```
That list is rendered into a list via javascript.

### The Blog Template

Then, each blog has a standard template:
```html
<!DOCTYPE html>
<html>
<head>
    <!-- head -->
</head>
<body class="font-default">
<!-- navbar -->
<main id="main"></main>
<footer>
    <a href="#navbar">Back to top</a>
</footer>
<!-- dependencies -->
<script type="application/javascript" src="../../js/blog.js"></script>
<script>
    showArticle('../../resources/blogs/a-little-js-never-hurt.md');
</script>
</body>
</html>
```

### Rendering the Blog

The only dependency is `showdown.js`.
Once that loads, the `showArticle` function is executed, which renders the Markdown file inside the `<main>` element.
The script to do that is quite simple:
```javascript
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
```

## Conclusion

I need to do two things next:
- [ ] Dynamically render a sidebar for each article.
- [ ] Add a syntax highlighting plugin for showdown.

Altogether it's pretty simple and a lot faster than WordPress.