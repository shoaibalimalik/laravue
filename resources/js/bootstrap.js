window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Authorization']    = "Bearer "  +  localStorage.getItem("token");
window.axios.defaults.withCredentials = true;



// let authValues = JSON.parse(localStorage.getItem("token"));
// let token = authValues ? `${authValues.tokenType} ${authValues.accessToken}` : null;
// let Api = axios.create({
//   baseURL: "http://localhost:8000/api",
//   headers: { 'Authorization': token }
// });
