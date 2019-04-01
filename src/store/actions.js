import { SET_MESSAGE, GET_CHANNELS } from './mutation-types'

// コンポーネントなどで状態変更のトリガーとなるイベントを作成
// actionで状態stateの変更は行われず、すべてmutationにcommitする

export default {
  [SET_MESSAGE] ({commit}, message) {
    commit(SET_MESSAGE, message)
  },
  [GET_CHANNELS] ({commit}) {
    fetch('https://us-central1-frontend-demo-chat.cloudfunctions.net/v1/channels').then(response => {
      // console.log(response)
      return response.json()
    }).then(json => {
      commit(GET_CHANNELS, json.channels)
    })
  }
}
