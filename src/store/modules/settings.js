import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

const { showSettings, logoName, noBreadcrumb, layoutType } = defaultSettings
const checkLayout = ['default', 'xuanya']

const state = {
  theme: variables.theme,
  showSettings,
  logoName,
  noBreadcrumb,
  layoutType: checkLayout.includes(localStorage.getItem('layoutStatus'))
    ? localStorage.getItem('layoutStatus')
    : layoutType
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  SET_LAYOUT_TYPE: (state, payload) => {
    if (checkLayout.includes(payload)) {
      state.layoutType = payload
    } else {
      state.layoutType = 'default'
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  setLayoutType({ state, commit }, layout) {
    commit('SET_LAYOUT_TYPE', layout || 'default')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
