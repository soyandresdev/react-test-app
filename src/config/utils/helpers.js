/**
 * @author Med Shaaban <ahmedshaaban00@outlook.com>
 * @description This function is used to replace the params in an endpoint.
 * @example generateParamUrl('auth', 'GET_USER_INFO', {userId : 241}) // where GET_USER_INFO: 'getUserInfo/:userId'.
 * @param endpoint: the endpoint url.
 * @param params: The object which represents the params names as keys and their values.
 */
export const generateParamUrl = (endpoint, params = {}) => {
  const url = Object.keys(params).reduce((prev, current) => {
    return prev.replace(new RegExp(`:${current}`, 'g'), params[current]);
  }, endpoint);
  return url || endpoint;
};
