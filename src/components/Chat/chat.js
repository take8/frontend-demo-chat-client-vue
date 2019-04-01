import { mapGetters, mapActions } from 'vuex'
import { SET_MESSAGE, GET_CHANNELS } from '../../store/mutation-types'

export default {
  name: 'chat',

  mounted () {
    this.GET_CHANNELS()
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
      SET_MESSAGE,
      GET_CHANNELS
    ]),

    sendMessage () {
      this.SET_MESSAGE(this.message)
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
