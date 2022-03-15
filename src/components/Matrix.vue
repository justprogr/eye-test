<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import { randomColor, levelGrid, colorDiff, applyColorDiff, rgbToCss } from '@/util/utils.js'

const emit = defineEmits(['next', 'miss'])

const color = ref('gray')
const activeColor = ref('gray')

const matrixSize = ref(2)
const squaresNumber = computed(() => matrixSize.value ** 2)

const styles = computed(() => ({
  'grid-template-rows': `repeat(${matrixSize.value}, 1fr)`,
  'grid-template-columns': `repeat(${matrixSize.value}, 1fr)`
}))

const activeSquare = ref(-1)
const score = inject('score')

function init() {
  const diff = colorDiff(score.value + 1)
  const rgb = randomColor(diff)
  color.value = rgbToCss(rgb)
  matrixSize.value = levelGrid(score.value + 1)
  activeColor.value = rgbToCss(applyColorDiff(rgb, diff))
  activeSquare.value = Math.floor(Math.random() * squaresNumber.value) + 1
}

onMounted(() => {
  init()
})

defineExpose({
  init
})

function squareClick(index) {
  if (index === activeSquare.value) {
    emit('next')
  } else if (score.value) {
    emit('miss')
  }
}
</script>

<template>
  <div
    :style="styles"
    class="matrix"
  >
    <div
      v-for="i in squaresNumber"
      :key="i"
      class="cell"
      :class="{ 'its-me': i === activeSquare }"
      @click="squareClick(i)"
    />
  </div>
</template>

<style lang="scss" scoped>
.matrix {
  width: 340px;
  height: 340px;
  max-width: 340px;
  max-height: 340px;
  display: grid;
  grid-row-gap: 4px;
  grid-column-gap: 4px;

  .cell {
    cursor: pointer;
    border-radius: 8px;
    background-color: v-bind(color);
  }

  .its-me {
    background-color: v-bind(activeColor);
  }

  @media screen and (max-width: 600px) {
    width: calc(100vw - 74px);
    height: calc(100vw - 74px);
  }
}
</style>
