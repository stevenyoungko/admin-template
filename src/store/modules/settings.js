import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

const { showSettings, logoName, noBreadcrumb, layoutType } = defaultSettings

const state = {
  theme: variables.theme,
  showSettings,
  logoName,
  noBreadcrumb,
  layoutType: localStorage.getItem('layoutStatus') || layoutType || 'default'
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  SET_LAYOUT_TYPE: (state, payload) => {
    localStorage.setItem('layoutStatus', payload)
    state.layoutType = payload
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
