const baseURL = {
  API: '',
  CDN: '',
};

if (process.env.NODE_ENV === 'production') {
  baseURL.API = window.location.origin + process.env.VUE_APP_PUBLIC_PATH;
  baseURL.CDN = window.location.origin + process.env.VUE_APP_PUBLIC_PATH;
} else {
  baseURL.API = process.env.VUE_APP_BASE_API + process.env.VUE_APP_PUBLIC_PATH;
  baseURL.CDN = process.env.VUE_APP_BASE_API_TO + process.env.VUE_APP_PUBLIC_PATH;
}
// console.log('base-url.js', baseURL);
export default baseURL;
