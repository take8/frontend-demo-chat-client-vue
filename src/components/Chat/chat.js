export default {
  name: 'chat',
  methods: {
    sendMessage () {
      this.messages.push(this.message)
      this.message = ''
    }
  },
  // data: 現在のコンポーネントでのみ有効なデータの定義
  data () {
    return {
      channels: ['general', 'random'],
      message: '',
      // フォームで入力したデータ
      messages: []
    }
  }
}
