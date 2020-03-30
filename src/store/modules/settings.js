import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

const { showSettings, logoName, noBreadcrumb, layoutType } = defaultSettings

const state = {
  theme: variables.theme,
  showSettings,
  logoName,
  noBreadcrumb,
  layoutType
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  SET_LAYOUT_TYPE: (state, payload) => {
    const checkArray = ['default', 'xuanya']
    console.log('payload', payload)
    if (checkArray.includes(payload)) {
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
