<template>
  <div id="app">
    <h1 id="logo">SizeMatch</h1>
    <ItemsList></ItemsList>
  </div>
</template>

<script>
import ItemsList from './components/ItemsList.vue'

export default {
  name: 'App',
  components: {
    ItemsList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
#logo {
  margin-left: 50px;
  margin-bottom: 0;
}
</style>
