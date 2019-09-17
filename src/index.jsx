import React from 'react'
import ReactDOM from 'react-dom'
import { Toast } from 'antd-mobile'
import { configure } from 'mobx'
import axios from 'axios'
import qs from 'qs'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ErrorCode from '@/config/errorcode'

// mobx严格模式 生产环境使用observed 开发使用always
configure({ enforceActions: 'always' })

// 请求拦截器
axios.interceptors.request.use(
  config => {
    Toast.loading('Loading...', 0)
    // 转为formdata数据格式
    config.data = qs.stringify(config.data)
    return config
  },
  error => Promise.reject(error),
)

axios.interceptors.response.use(
  config => {
    Toast.hide()
    if (config.data.errorCode !== ErrorCode.SUCCESS) {
      if (
        config.data.errorCode === ErrorCode.NOTICKET ||
        config.data.errorCode === ErrorCode.TIMEOUT
      ) {
        window.location.href = '/newpage/#/login'
      }
      if (config.data.error === ErrorCode.SUCCESS) {
        return config
      }
      Toast.fail(config.data.errorMsg, 2)
    }
    return config
  },
  error => {
    Toast.fail('网络错误，请刷新页面重试')
    return Promise.reject(error)
  },
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
