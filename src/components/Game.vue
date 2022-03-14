<script setup>
import { ref, inject } from 'vue'
import { saveBestResult } from '@/util/utils.js'
import Matrix from './Matrix.vue'
import Result from './Result.vue'
import Score from './Score.vue'
import Timer from './Timer.vue'

const score = inject('score')

const isGameOver = ref(false)
const errors = ref(0)
const timer = ref(null)
const matrix = ref(null)

function nextLevel() {
  score.value += 1
  timer.value.resume()
  matrix.value.init()
}

function missClick() {
  errors.value += 1
  if (errors.value > 2) {
    gameOver()
  } else {
    timer.value.skip(3000)
  }
}

function restartGame() {
  score.value = 0
  errors.value = 0
  matrix.value.init()
  isGameOver.value = false
}

function gameOver() {
  timer.value.stop()
  isGameOver.value = true
  saveBestResult(score.value)
}
</script>

<template>
  <div class="game">
    <Timer
      ref="timer"
      v-if="!isGameOver"
      @finish="gameOver"
    />
    <div :style="{ visibility: isGameOver ? 'hidden' : 'visible' }">
      <h2 class="title">
        Which one of the boxes<br> has an irregular color?
      </h2>
      <div class="body">
        <Matrix
          ref="matrix"
          @next="nextLevel"
          @miss="missClick"
        />
        <Score
          :score="score"
          :errors="errors"
        />
      </div>
    </div>
    <Result
      v-if="isGameOver"
      :errors="errors"
      @restart="restartGame"
    />
  </div>
</template>

<style lang="scss">
.game {
  position: relative;
  text-align: center;
  text-transform: uppercase;
  padding: 20px 20px 25px 25px;
  border-radius: 6px;
  background-color: var(--color-white);
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.1);

  .timer {
    position: absolute;
    top: 0%;
    right: 0%;
    transform: translate(10px, -50%);
  }

  .title {
    color: var(--color-gray);
    font-size: 26px;
    font-weight: bold;
    margin-right: 45px;
    margin-bottom: 15px;
  }

  .body {
    display: flex;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;

    .title {
      font-size: 18px;
      margin-right: 0;
    }

    .body {
      flex-direction: column;

      .score {
        margin-top: 15px;
        margin-left: 0;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        .item {
          margin: 0;
        }

        .label {
          font-size: 14px;
          text-align: left;
        }
      }
    }
  }
}
</style>
