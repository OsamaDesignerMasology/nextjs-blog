const withImages = require('next-images')
module.exports = withImages();
 

// const withImages = require('next-images')
// module.exports = withImages({
//   serverRuntimeConfig: {
//     // variables here will only be available on the server side
//   },
//   publicRuntimeConfig: {
//     // variables here will be available on both server and client

//     // note, was using dev api values as fallbacks but changed to 'not-found' to help troubleshoot envs that aren't configured correctly. It's quicker to identify and fix the problem.
//     // ended up putting dev env vars in the package.json, 'dev' npm script
//     BACKEND_API_BASE_URL: process.env.BACKEND_API_BASE_URL || 'not-found',
//     AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'not-found',
//     AUTH0_CLIENTID: process.env.AUTH0_CLIENTID || 'not-found',
//     AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || 'not-found',
//     NODE_ENV: process.env.NODE_ENV || 'not-found',
//     BITBUCKET_BUILD_NUMBER: process.env.BITBUCKET_BUILD_NUMBER,
//   },
// })
