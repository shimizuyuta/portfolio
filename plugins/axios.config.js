
export default ({ store,$axios }) => {
  $axios.defaults.baseURL = 'http://localhost:5000/'
  $axios.interceptors.request.use(request => {
    // request.headers = {
    //   ...store.getters['main/GET_REQUEST_HEADER'],
    //   ...request.headers
    // };
    console.log('res',request)
    console.log('res',store.$auth)
    console.log('res',store.state)
    console.log(request.headers);
    console.log(store)
    return request;
  });
};


// export default function({ $axios }) {
//   $axios.defaults.baseURL = 'http://localhost:5000/'

//   $axios.onRequest(config => {
//     console.log('config____',config)
//     config.headers.client = window.localStorage.getItem("client")
//     config.headers["access-token"] = window.localStorage.getItem("access-token")
//     config.headers.uid = window.localStorage.getItem("uid")
//     config.headers["token-type"] = window.localStorage.getItem("token-type")
//   })

//   $axios.onResponse(response => {
//     console.log('response___111_',response)
//     if (response.headers.client) {
//       localStorage.setItem("access-token", response.headers["access-token"])
//       localStorage.setItem("client", response.headers.client)
//       localStorage.setItem("uid", response.headers.uid)
//       localStorage.setItem("token-type", response.headers["token-type"])
//     }
//   })
//         $axios.onError(err => {
//         // error({
//         //   statusCode: err.response.status,
//         //   message: err.response.message
//         // })
//         console.log(err,'error____')
//         return Promise.resolve(err)
//       })

// }

  //  export default function ({ $axios,context }) {
  //   // const { $axios, $auth} = content
  //   console.log(context,'context')
  //   $axios.defaults.baseURL = 'http://localhost:5000/'
    
  //   $axios.interceptors.response.use(((res) =>{
  //     console.log('res_______a',res)
  //   }))

  //   $axios.interceptors.response.use((response) => {
  //     console.log('res1111',response)
  //     return response
  //   })

  //   $axios.onRequest((config) => {
  //     console.log('Making request to ' + config.url)
  //     let a = localStorage.getItem('idToken');
  //     console.log(a)
  //     console.log(config,'token')
  //     if (config.token) {
  //       console.log('addddddddddtoken')
  //       config.headers.Authorization = `Bearer ${config.token}`
  //       delete config.token
  //     }
  //     return config
  //   })

  //     $axios.onError(err => {
  //       // error({
  //       //   statusCode: err.response.status,
  //       //   message: err.response.message
  //       // })
  //       console.log(err,'error____')
  //       return Promise.resolve(err)
  //     })
  // }

  // export default function (context) {
  //   console.log(context)
  //   const $router = context.app.router
  //   const {$axios, $auth} = context
  //   $axios.defaults.baseURL = 'http://localhost:5000/'
  //   $axios.interceptors.response.use((response) => {
  //     console.log('res1111',response)
  //     return response
  //   }, async function (error) {
  //     if ($auth.loggedIn) {
  //       const originalRequest = error.config
  //       if (
  //         error.response.status === 401 &&
  //         error.response.data.message === 'Token has expired' &&
  //         !originalRequest._retry
  //       ) {
  //         originalRequest._retry = true
  //         return await $axios.post('api/auth/refresh').then(res => {
  //           $auth.setUserToken(res.data.access_token)
  //           $axios.setToken(res.data.access_token, 'Bearer')
  //           originalRequest.headers.Authorization = 'Bearer ' + res.data.access_token
  //           return $axios.request(originalRequest)
  //         }).catch(err => {
  //           //error handling
  //         })
  //       }
  //     }
  //     if (error.response.status === 500 && (
  //       error.response.data.message === 'Token has expired and can no longer be refreshed' ||
  //       error.response.data.message === 'The token has been blacklisted'
  //     )) {
  //       await $router.push({name: 'admin-login'})
  //     }
  //     return Promise.reject(error)
  //   })
  // }