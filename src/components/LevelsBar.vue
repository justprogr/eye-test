<script setup>
import { ref, inject, computed } from 'vue'
import { ANIMAL_LIST } from '@/util/consts.js'

const score = inject('score')
const vw = inject('vw')
const percent = computed(() => score.value / 29 * 100)
const animals = ref([...ANIMAL_LIST])
</script>

<template>
  <div class="levels-bar">
    <h2 class="title">
      LEVELS – WHAT ANIMAL'S EYESIGHT DO YOU HAVE?
    </h2>
    <div
      class="list"
      :style="{ backgroundSize: `${percent}%` }"
    >
      <div
        v-for="{ icon, width, range, activeFrom } in animals"
        :key="icon"
        class="list-item"
      >
        <div
          :class="{
            'badge': true,
            'badge--active': score >= activeFrom
          }"
        >
          <svg
            :width="width * Math.min(vw / 1100, 1)"
            viewBox="0 0 32 32"
          >
            <use :xlink:href="`#${icon}`" />
          </svg>
        </div>
        <span>{{ icon }}</span>
        <span>{{ range }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.levels-bar {
  color: var(--color-blue-light-1);
  text-transform: uppercase;
}

.title {
  font-size: 22px;
  padding: 0 22px;
  margin-bottom: 15px;
}

.list {
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  padding: 15px 15px;
  background-image: url(../assets/acs_bg.png);
  background-repeat: no-repeat;

  &-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-transform: none;

    .badge {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 128px;
      width: 128px;
      border-radius: 50%;
      color: var(--color-blue-light-1);
      background-color: var(--color-white);
      box-shadow: 5px 5px 0 var(--color-blue-light-2);
      margin-bottom: 8px;
      font-size: 20px;

      &--active {
        color: var(--color-white);
        background-color: var(--color-blue-light-1);
      }
    }

    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
}

@media screen and (max-width: 1010px) {
  .list-item {
    .badge {
      height: 12vw;
      width: 12vw;
    }
  }
}

@media screen and (max-width: 600px) {
  .title {
    padding: 0;
    font-size: 16px;
  }

  .list {
    padding: 8px;
    margin: 0 -8px;
    border-radius: 10px;
  }

  .list-item {
    .badge {
      box-shadow: 2px 2px 0 var(--color-blue-light-2);
    }

    span {
      font-size: 12px;
    }
  }
}
</style>
