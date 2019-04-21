import { mapGetters, mapActions } from 'vuex'
import {
  GET_CHANNELS
} from '../../store/mutation-types'

export default {
  name: 'chat',

  mounted () {
    this.GET_CHANNELS()
    this.GET_MESSAGES(this.$route.params.channelName)
  },

  // 算出プロパティ(キャッシュされる)
  computed: {
    // getters
    ...mapGetters([
      'messages',
      'channels'
    ])
  },

  methods: {
    // actions
    ...mapActions([
      GET_CHANNELS,
      'GET_MESSAGES',
      'POST_MESSAGES'
    ]),

    sendMessage () {
      this.POST_MESSAGES({
        'channelName': this.$route.params.channelName,
        'message': this.message
      })
      this.message = ''
    }
  },

  // data: 現在のコンポーネントでのみ有効なデータの定義
  data () {
    return {
      message: ''
    }
  }
}
