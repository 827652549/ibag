<template>
  <div id="app">
    Welcome to ibag
    <div id="nav">
      <p>
        goto page
        <router-link to="/a">A</router-link>
      </p>
      <p>
        goto page
        <router-link to="/b">B</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 200px;
  color: rgb(90, 88, 88);
  font-size: 40px;
}
</style>
