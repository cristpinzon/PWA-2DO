<template>
  <div id="app">
    <header>
      <div class="container" style="display:flex">
        <img class="logo" src="./assets/logo.png" alt="Vue.js PWA">
        <span>2do</span>
      </div>
      
    </header>
    <main>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
      <!-- <router-view></router-view> -->
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
  display: flex;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.logo {
  height: 56px;
}

.main-screen {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 70vh;
}

.center {
  align-items: center;
  justify-content: center;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.container {
  max-width: 768px;
  align-self: center
}

@media (min-width: 576px) {  }
@media (min-width: 768px) {  }
@media (min-width: 992px) {  }
@media (min-width: 1200px) {  }

</style>
