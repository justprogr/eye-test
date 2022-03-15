<script setup>
import { inject, computed } from 'vue'
import { getAnimalByScore } from '@/util/utils.js'
import { ANIMAL_LIST } from '@/util/consts.js'

const score = inject('score')
const animal = computed(() => getAnimalByScore(ANIMAL_LIST, score.value))

defineProps({
  errors: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['restart'])

function restartGame() {
  emit('restart')
}
</script>

<template>
  <div class="result">
    <div>
      <div class="values">
        <span>SCORE: {{ score }}</span>
        <span>ERRORS: {{ errors }}</span>
      </div>
      <div
        v-if="animal"
        class="description"
      >
        <svg
          :style="{ width: animal.width }"
          class="youranimal"
          viewBox="0 0 32 32"
        >
          <use :xlink:href="`#${animal.icon}`" />
        </svg>
        <h3 class="character-title">
          {{ animal.icon }}
        </h3>
        <p>{{ animal.description }}</p>
      </div>
      <button
        class="play-btn"
        @click="restartGame"
      >
        <span>Play again</span>
        <svg viewBox="0 0 32 32">
          <use xlink:href="#playagain" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.result {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  padding: 20px 20px 40px 55px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1010px) {
    padding: 20px 30px;
  }
}

.youranimal {
  color: var(--color-blue-light-1);
}

.values {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
}

.description {
  color: var(--color-gray);
  padding: 14px;
  font-size: 18px;
  background-color: var(--color-blue-light-3);
  border-radius: 6px;
  max-width: 340px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;

  .character-title {
    font-size: 22px;
    margin-bottom: 8px;
  }

  p {
    user-select: text;
    text-transform: none;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 15px;
    }
  }
}

.play-btn {
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 340px;
  height: 50px;
  color: var(--color-white);
  font-size: 21px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 6px;
  border: none;
  background-color: var(--color-blue-light-1);

  svg {
    position: absolute;
    width: 28px;
    height: 28px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
