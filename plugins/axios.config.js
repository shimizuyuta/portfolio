import axios from "axios";
export default function ({ store}) {

axios.defaults.baseURL = 'http://localhost:5000/'
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('conf',config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('response___',response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
    
  }

