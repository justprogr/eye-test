<script setup>
import { ref, inject, computed } from 'vue'
import { ANIMALS_ICONS } from '@/util/consts.js'

const score = inject('score')
const percent = computed(() => score.value / 29 * 100)
const animals = ref([...ANIMALS_ICONS])
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
            :style="{ width }"
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
    color: #3a8fcd;
    text-transform: uppercase;
  }

  .title {
    font-size: 22px;
    padding: 0 22px;
    margin-bottom: 15px;
  }

  .list {
    display: flex;
    border-radius: 20px;
    padding: 15px 30px;
    background-image: url(../assets/acs_bg.png);
    background-repeat: no-repeat;

    &-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-transform: none;

      &:not(:last-child) {
        margin-right: 30px;
      }

      .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 128px;
        width: 128px;
        border-radius: 50%;
        color: #3d9fe7;
        background-color: #fff;
        box-shadow: 5px 5px 0 #C5E0EE;
        margin-bottom: 8px;
        font-size: 20px;

        &--active {
          color: #fff;
          background-color: #3d9fe7;
        }
      }

      span {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
</style>
