module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('content/_assets');

  return {
    dir: {
      input: 'content',
      output: '_site',
    },
  };
};
