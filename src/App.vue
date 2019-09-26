<template>
  <div id="app">
    <app-menu></app-menu>
<!--    <div>-->
<!--      <md-radio v-model="radio" >Boolean</md-radio>-->
<!--      <md-radio v-model="radio" >String</md-radio>-->
<!--    </div>-->
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> - -->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
  </div>
</template>

<script>
import Menu from './components/Menu';
export default {
  data () {
    return {
      radio: true
    }
  },
  components: {
    appMenu: Menu
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
