import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const {
  // serverRuntimeConfig,
  publicRuntimeConfig
} = getConfig()


export const BACKEND_API_BASE_URL = publicRuntimeConfig.BACKEND_API_BASE_URL;
export const NODE_ENV = publicRuntimeConfig.NODE_ENV;
export const BITBUCKET_BUILD_NUMBER = publicRuntimeConfig.BITBUCKET_BUILD_NUMBER;
export const PAGINATION_ROWS_PER_PAGE = 50;

export const auth0Config = {
  "domain": publicRuntimeConfig.AUTH0_DOMAIN,
  "clientId": publicRuntimeConfig.AUTH0_CLIENTID,
  "audience": publicRuntimeConfig.AUTH0_AUDIENCE
};