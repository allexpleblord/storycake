// Use sass
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  sassLoaderOptions: {
    // Import variables and mixins globally
    data: '@import "variables"; @import "mixins";',
    includePaths: ['sass/']
  }
})