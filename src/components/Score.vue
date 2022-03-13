<script setup>
defineProps({
  score: {
    type: Number,
    default: 0
  },
  errors: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="score">
    <div class="item">
      <div class="label">
        Score
      </div>
      <div class="value">
        {{ score }}
      </div>
    </div>
    <div class="item">
      <div class="label">
        Errors
      </div>
      <div class="value">
        {{ errors }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.score {
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;

  .item {
    width: 135px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &:last-child {
      .value {
        background-color: var(--color-red);
      }
    }
  }

  .label {
    font-size: 20px;
    font-weight: bold;
  }

  .value {
    color: var(--color-white);
    background-color: var(--color-blue-light-1);
    font-size: 28px;
    font-weight: bold;
    border-radius: 6px;
    padding: 4px;
    margin-top: 5px;
  }
}
</style>
