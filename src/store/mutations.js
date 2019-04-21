import {
  GET_CHANNELS,
  SET_MESSAGES
} from './mutation-types'

// mutationはstateの状態を変更する
// Vuexのストアの状態を変更できる唯一の方法は、ミューテーションをコミットすること

export default {
  // [タイプ] ハンドラー
  [SET_MESSAGES] (state, messages) {
    state.messages = messages
  },
  [GET_CHANNELS] (state, channels) {
    state.channels = channels
  }
}
