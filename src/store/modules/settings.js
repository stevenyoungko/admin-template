import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

const { showSettings, logoName, noBreadcrumb } = defaultSettings

const state = {
  theme: variables.theme,
  showSettings,
  logoName,
  noBreadcrumb
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
