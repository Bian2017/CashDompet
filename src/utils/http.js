import axios from 'axios'
import qs from 'qs'

const defaultConfig = {
  // baseURL: 'http://api.cashdompetpro.com/',
  transformRequest: [
    function(data, headers) {
      if (headers['Content-Type'] === 'application/json') {
        return JSON.stringify(data)
      } else {
        return data
      }
    }
  ],
  paramsSerializer: function(params) {
    let paramKeyValue = qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true, allowDots: true })
    return paramKeyValue
  },
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*'
  }
}

const http = axios.create(defaultConfig)

// 响应拦截
http.interceptors.response.use(
  response => {
    const data = response.data || {}

    if (true === data.success) {
      return data.data
    } else {
      return Promise.reject(data)
    }
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 请求拦截
http.interceptors.request.use(
  config => {
    if (config.method === 'get' && config.data) {
      let params = ''

      Object.keys(config.data).forEach((key, index) => {
        if (index === 0) {
          params += '?' + key + '=' + config.data[key]
        } else {
          params += '&' + key + '=' + config.data[key]
        }
      })
      config.url += params
    }
    return config
  },
  error => Promise.reject(error)
)

export default {
  $get(url, config) {
    const _config = this.mergeConfig(config)

    return http.get(url, _config)
  },
  $post(url, data, config) {
    const _config = this.mergeConfig(config)

    return http.post(url, data, _config)
  },
  mergeConfig(config = {}) {
    const headers = Object.assign({}, defaultConfig.headers, config.headers)
    const _config = Object.assign({}, defaultConfig, config)

    _config.headers = headers

    return _config
  }
}
