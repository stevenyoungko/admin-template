module.exports = {
  /**
   * @type {Number}
   * @description 變更開發port 這邊權重是最小的 process.env.port > process.env.npm_config_port > settings.port
   */
  port: 9487,
  /**
   * @type {String}
   * @description 變更document.title 預設 PS-admin
   */
  title: 'PS-admin',
  /**
   * @type {String}
   * @description 左上角LOGO字串
   */
  logoName: '♞ Drive Thru',
  /**
   * @type {boolean}
   * @description 設定是否使用 麵包屑功能
   */
  noBreadcrumb: false,
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: false,
  /**
   * @type {string}
   * @description set TokenKey in LocalStorage Detail Check @/utils/auth.js
   */
  acessTokenKey: 'vue_admin_template_token',
  /**
   * @type {boolean}
   * @description 設定devServe 是否使用Mock Server Data | ps: 設定過要重新跑一次 yarn serve
   */
  devUseMock: true
}
