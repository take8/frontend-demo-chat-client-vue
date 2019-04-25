export default {
  name: 'message-list',
  // "data"の代わりに"props"を定義するイメージ?
  props: {
    'messages': {
      type: Array, // データの型(String, Number, Boolean, Function, Object, Array, Symbolのいずれか)
      default: [], // デフォルト値
      required: true // 必須か
      // その他にも"validator"(検証するための関数を定義するイメージ)などの要素もある
    }
  }
}
