import { createApp, ref } from 'vue'
import App from './App.vue'

const score = ref(0)

createApp(App)
  .provide('score', score)
  .mount('#app')
