/**
 * Vuexのstoreのエントリポイント
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

// インポート
Vue.use(Vuex)

// コンポーネント間にまたがって使用されるデータ
const state = {
  messages: [],
  channels: []
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
