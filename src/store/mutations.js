import { SET_MESSAGE, GET_CHANNELS } from './mutation-types'

// mutationはstateの状態を変更する
// Vuexのストアの状態を変更できる唯一の方法は、ミューテーションをコミットすること

export default {
  // [タイプ] ハンドラー
  [SET_MESSAGE] (state, message) {
    state.messages.push(message)
  },
  [GET_CHANNELS] (state, channels) {
    state.channels = channels
  }
}
