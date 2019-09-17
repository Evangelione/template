import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  
  @font-face {
    font-family: 'iconfont';  /* project id 1315086 */
    src: url('//at.alicdn.com/t/font_1315086_6upi17q5l7o.eot');
    src: url('//at.alicdn.com/t/font_1315086_6upi17q5l7o.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1315086_6upi17q5l7o.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1315086_6upi17q5l7o.woff') format('woff'),
    url('//at.alicdn.com/t/font_1315086_6upi17q5l7o.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1315086_6upi17q5l7o.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
