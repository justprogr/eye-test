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
    <div class="label">
      Score
    </div>
    <div class="value">
      {{ score }}
    </div>
    <div class="label">
      Errors
    </div>
    <div class="value">
      {{ errors }}
    </div>
  </div>
</template>

<style lang="scss">
.score {
  width: 135px;
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;

  .label {
    font-size: 20px;
    font-weight: bold;
  }

  .value {
    color: #fff;
    background-color: #3d9fe7;
    font-size: 28px;
    font-weight: bold;
    border-radius: 6px;
    padding: 4px;
    margin-top: 5px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &:last-child {
      background-color: #d92c3b;
    }
  }
}
</style>
