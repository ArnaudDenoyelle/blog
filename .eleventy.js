module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles')
  eleventyConfig.addPassthroughCopy('assets')
  return {
    passthroughFileCopy: true
  }
}
