import { mapGetters, mapActions } from 'vuex'
import { SET_MESSAGE } from '../../store/mutation-types'

export default {
  name: 'chat',

  // 算出プロパティ(キャッシュされる)
  computed: {
    // getters
    ...mapGetters([
      'messages'
    ])
  },

  methods: {
    // actions
    ...mapActions([
      SET_MESSAGE
    ]),

    sendMessage () {
      this.SET_MESSAGE(this.message)
      this.message = ''
    }
  },

  // data: 現在のコンポーネントでのみ有効なデータの定義
  data () {
    return {
      channels: ['general', 'random'],
      message: ''
    }
  }
}
