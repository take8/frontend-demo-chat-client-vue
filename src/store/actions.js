import { SET_MESSAGE } from './mutation-types'

// コンポーネントなどで状態変更のトリガーとなるイベントを作成
// actionで状態stateの変更は行われず、すべてmutationにcommitする

export default {
  [SET_MESSAGE] ({commit}, message) {
    commit(SET_MESSAGE, message)
  }
}
