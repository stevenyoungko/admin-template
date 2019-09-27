const path = require('path')
const express = require('express')
const proxy = require('http-proxy-middleware')
// var expressStaticGzip = require('express-static-gzip');
const port = process.env.PORT || 8080
const app = express()
let _env

console.log('NODE_ENV', process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'development':
    _env = path.join(__dirname, '../.env.development')
    break
  case 'production':
    _env = path.join(__dirname, '../.env.production')
    break
  default:
    console.error('NODE_ENV is undefined')
}

const config = require('dotenv').config({ path: _env })
console.log('.env config', config)

// app.use(
//   process.env.VUE_APP_BASE_API,
//   proxy({
//     target: process.env.VUE_APP_TARGET_API,
//     ws: false,
//     changeOrigin: true,
//     pathRewrite: {
//       ['^' + process.env.VUE_APP_BASE_API]: ''
//     }
//   })
// )

// serve pure static assets
// app.use(expressStaticGzip(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../dist')))
app.listen(port, function() {
  console.log(`Server Already on ${port}`)
})
