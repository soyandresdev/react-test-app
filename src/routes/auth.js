const moduleURL = '/auth';

const apiRoutes = Object.freeze({
  SEND_LOGIN: '/login',
  TEST_PARAM: '/test/:what/',
});

const pageRoutes = Object.freeze({
  LOGIN_PAGE: `${moduleURL}/login`,
  TEST_PARAM: '/test-api/:what/',
});

export default { apiRoutes, pageRoutes };
