<script setup>
import { ref, onMounted } from 'vue'
import { restoreBestResult } from '@/util/utils.js'

const bestScore = ref(0)

onMounted(() => {
  bestScore.value = restoreBestResult()
})
</script>

<template>
  <div class="doctor">
    <div class="bubble">
      <p v-if="bestScore">
        Your<br> best result is<br><span>{{ bestScore }}!</span>
      </p>
      <p v-else>
        Which<br> one of the boxes<br> has an irregular<br> color?
      </p>
    </div>
    <img
      src="@/assets/eye-doctor.png"
      alt="Eye doctor"
    >
  </div>
</template>

<style lang="scss" scoped>
.doctor {
  position: relative;
  margin-top: 40px;
  margin-right: -20px;
  z-index: 50;

  .bubble {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 205px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    color: var(--color-gray);

    span {
      font-size: 36px;
      font-weight: bold;
    }
  }
}
</style>
