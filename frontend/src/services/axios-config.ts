import axios from 'axios'

const { VITE_REACT_API_URL } = import.meta.env

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
axios.defaults.baseURL = VITE_REACT_API_URL
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
  request => {
    // console.log(request)
    // const token = authUtility.getToken()
    // if (token) {
    //   request.headers.Authorization = `Token ${token}`
    // }
    // Edit request config
    return request
  },
  error => {
    // console.log(error);
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    // console.log(response);
    // Edit response config
    return response
  },
  error => {
    // if (error?.response?.status === 401) {
    //   // authUtility.removeToken()
    //   const navigate = useNavigate()
    //   navigate('/login')
    // }
    // console.log(error);
    return Promise.reject(error)
  }
)
