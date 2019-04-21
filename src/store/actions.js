import {
  GET_CHANNELS,
  SET_MESSAGES
} from './mutation-types'

// コンポーネントなどで状態変更のトリガーとなるイベントを作成
// actionで状態stateの変更は行われず、すべてmutationにcommitする

/**
 * メッセージ用APIのパスを返す
 * @param {*} channelName
 */
const messagesPath = channelName => 'https://us-central1-frontend-demo-chat.cloudfunctions.net/v1/channels/' + channelName + '/messages'

/**
 * メッセージを取得する
 * @param {*} channelName チャネル名
 */
async function fetchMessages (channelName) {
  const response = await fetch(messagesPath(channelName))
  // console.log(response)
  const json = await response.json()
  return json.messages
}

export default {
  [GET_CHANNELS] ({commit}) {
    async function fetchChannels () {
      const response = await fetch('https://us-central1-frontend-demo-chat.cloudfunctions.net/v1/channels')
      // console.log(response)
      const json = await response.json()
      commit(GET_CHANNELS, json.channels)
    }

    fetchChannels()
  },

  async GET_MESSAGES ({commit}, channelName) {
    const messages = await fetchMessages(channelName)
    commit(SET_MESSAGES, messages)
  },

  async POST_MESSAGES ({commit}, {channelName, message}) {
    // fetch()の第2引数は送信パラメータ
    const response = await fetch(messagesPath(channelName), {
      method: 'POST',
      body: JSON.stringify({
        body: message
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    // POSTがOKならサーバのメッセージを取得しコミットする
    if (json.result === 'ok') {
      const messages = await fetchMessages(channelName)
      commit(SET_MESSAGES, messages)
    }
  }
}
