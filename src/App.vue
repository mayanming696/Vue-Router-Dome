<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <p>
      <button @click='goBack'>后退</button>
      <button @click="goGo">前进</button>
      <button @click="goPush">返回指定页面</button>
    </p>
    <router-link to="/">Home</router-link>|
    <router-link to="/params/1996/Marco">Params</router-link>|
    <router-link to="/">goHome</router-link>|
    <router-link to="/params/1997/June">goParams</router-link>|
    <router-link to="/Hi1">Hi1</router-link>|
    <router-link to="/Marco">Marco</router-link>|
    <router-link to="/18151">404,瞎写的页面</router-link>|
    <transition name="fake" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    goGo () {
      this.$router.go(1)
    },
    goPush () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fake-enter {
  opacity:0;
}
.fake-leave{
  opacity:1;
}
.fake-enter-active{
  transition:opacity .8s;
}
.fake-leave-active{
  opacity:0;
  transition:opacity .8s;
}
</style>
