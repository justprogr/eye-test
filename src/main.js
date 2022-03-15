import { createApp, ref } from 'vue'
import App from './App.vue'

const score = ref(0)
const vw = ref(0)

function onResize() {
  vw.value = window.innerWidth
}

window.addEventListener('resize', onResize)
onResize()

createApp(App)
  .provide('score', score)
  .provide('vw', vw)
  .mount('#app')
