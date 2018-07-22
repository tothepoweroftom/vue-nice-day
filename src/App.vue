<template>
  <div id="app">
    <div id="content">
       <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-items: center;
  display: flex;
  flex-direction: column;
}

#content {
  background-color: #fbfbfb;
  border: 1px solid rgb(51, 51, 51);
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  max-width: 800px;
  min-height: 510px;
  padding: 32px;
  position: relative;
  width: 100%;
  z-index: 1;
}
</style>
