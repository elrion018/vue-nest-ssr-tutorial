module.exports = {
  productionSourceMap: false,
  outputDir: './resources',
  assetsDir: 'static',
  pages: {
    index: {
      entry: `frontend/main.ts`,
      template: `resources/templates/index.html`,
    },
  },
};
