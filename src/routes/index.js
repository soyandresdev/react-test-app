import { generateParamUrl } from '@Config/utils/helpers';
// [START] Routes Endpoints Importing
import AuthRoutes from './auth';

const routesEndpoints = {
  auth: AuthRoutes,
};
// [END] Routes Endpoints Importing

// API Base URL
export const BASE_API_URL = 'https://api.ea.com'; // TODO: Read from environment variable

// Get a page route
export const getPageRoute = (module, endpoint, params) => {
  const endpointUrl = routesEndpoints?.[module]?.pageRoutes?.[endpoint];
  return `${generateParamUrl(endpointUrl, params)}`;
};

// Get an api route
export const getApiRoute = (module, endpoint, params) => {
  const endpointUrl = routesEndpoints?.[module]?.apiRoutes?.[endpoint];
  return `${BASE_API_URL}${generateParamUrl(endpointUrl, params)}`;
};
