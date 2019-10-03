const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env.development') })
const appName = process.env.APP_NAME
const port = process.env.PORT || 8080

module.exports = {
  apps: [{
    name: `${appName}:${port}`,
    script: 'server/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
