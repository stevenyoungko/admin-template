const path = require('path')
const express = require('express')
const proxy = require('http-proxy-middleware')
const config = require('dotenv').config({ path: path.join(__dirname, '../.env.development') })
// var expressStaticGzip = require('express-static-gzip');
const port = process.env.PORT || 8080
const app = express()

console.log(config)

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
  console.log(`Server Ready on ${port}`)
})
