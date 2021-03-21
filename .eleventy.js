const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const livePosts = function(post) {
  return post.data.draft === false;
}

module.exports = function(eleventyConfig) {
  /* Add syntax highlighting for code */
  eleventyConfig.addPlugin(syntaxHighlight);

  /* Add menu support */
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  /* Pass through - stop eleventy touching */
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/_headers');

  /* Create a Posts collection */
  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("./src/posts/*.md")
    .filter(livePosts)
    .reverse();
  });

  /* Create a Projects collection */
  eleventyConfig.addCollection("projects", function (collection) {
    return collection.getFilteredByGlob("./src/projects/*.md").reverse();
  });

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
