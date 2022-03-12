<script>
import { ref, computed } from 'vue'

const INIT_VALUE = 15900

export default {
  emits: ['finish'],

  setup (_, ctx) {
    const time = ref(INIT_VALUE)
    const timeSec = computed(() => Math.floor(time.value / 1000))
    const timeMs = computed(() => time.value / 100 % 10)
    const dangerZone = computed(() => timeSec.value < 6)

    let interval = null

    function start() {
      interval = setInterval(() => {
        time.value -= 100
        if (time.value <= 0) {
          stop()
          ctx.emit('finish')
        }
      }, 100)
    }

    function stop() {
      time.value = 0
      clearInterval(interval)
    }

    function resume() {
      time.value = INIT_VALUE
      if (!interval) {
        start()
      }
    }

    function skip(ms) {
      if (time.value > ms) {
        time.value -= ms
      } else {
        stop()
      }
    }

    return {
      timeMs,
      timeSec,
      dangerZone,
      start,
      stop,
      resume,
      skip
    }
  }
}
</script>

<template>
  <div
    :class="{
      'timer': true,
      'timer--danger': dangerZone
    }"
  >
    <div class="value">
      {{ timeSec }}
      <span
        v-if="dangerZone"
        class="ms"
      >.{{ timeMs }}</span>
    </div>
  </div>
</template>

<style lang="scss">
  .timer {
    color: #A1DF3C;
    font-size: 56px;
    font-weight: bold;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 98px;
    width: 98px;
    border-radius: 50%;
    background-color: #fff;
    border: 5px solid #3A9FE3;

    &--danger {
      color: #ef3d4e;
      border-color: #ef3d4e;
    }

    .value {
      display: flex;
      align-items: flex-end;
      margin-left: -2px;
    }

    .ms {
      width: 30px;
      font-size: 30px;
      text-align: left;
      padding-bottom: 3px;
    }
  }
</style>
