const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  /* Add syntac highlighting for code */
  eleventyConfig.addPlugin(syntaxHighlight);
  /* Pass through - stop eleventy touching */
  eleventyConfig.addPassthroughCopy('src/images')

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
