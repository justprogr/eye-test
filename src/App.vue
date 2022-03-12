<script setup>
import Game from '@/components/Game'
import Doctor from '@/components/Doctor'
import LevelsBar from '@/components/LevelsBar'
</script>

<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        EYE TEST
        <span class="subtitle">
          – Free colour vision test
        </span>
      </h1>
    </div>
  </header>
  <div class="main">
    <div class="container">
      <div class="game-area">
        <Doctor />
        <Game />
      </div>
      <LevelsBar />
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

body {
  font-family: 'Helvetica', Arial, sans-serif;
  background-image: url('./assets/bg-pattern.gif');
  background-repeat: repeat;
}

.container {
  margin: 0 auto;
  max-width: 1010px;
  padding: 0 20px;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 8px 0;
  background-color: #fff;
  box-shadow:
    0 -2px 0 rgba(18, 115, 180, .2) inset,
    0 0 15px rgba(0, 0, 0, .38);

  .logo {
    color: #2c6dac;
    font-size: 28px;
    font-weight: bold;
    display: flex;
    align-items: center;

    .subtitle {
      font-size: 22px;
      margin-left: 10px;
    }
  }
}

.main {
  margin-top: 48px;
  padding: 57px 0;
}

.game-area {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 40px;
}
</style>
