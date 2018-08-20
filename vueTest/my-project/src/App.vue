<template>
  <div id="app">
    <h1>hello App</h1>
    <p>
      <router-link to="/user/foo">Go to UserFoo</router-link>
      | 
      <router-link to="/user/bar">Go to UserBar</router-link>
    </p>
    <div>
      <button v-on:click="homeFn">home</button>
      |
      <button v-on:click="queryFn">query</button>
    </div>
    <div>
      <button v-on:click="forwardFn">前进</button>
      <button v-on:click="backFn">后退</button>
    </div>
    <transition name="app-ts" mode="out-in">
      <router-view></router-view>
    </transition>
    <transition name="app-ts" mode="out-in">
      <router-view class="view_a" name="a"></router-view>
    </transition>
    <transition name="app-ts" mode="out-in">
      <router-view class="view_b" name="b"></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeFn:function(){
      this.$router.push({path:'/'})
    },
    queryFn:function(){
      this.$router.push({path:'user',query:{part:'A',lang:'cn'}})
    },
    forwardFn(){
      this.$router.go(1)
    },
    backFn(){
      this.$router.go(-1)
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
  a{
    text-decoration:none;
  }
  .router-link-active{
    color:red;
    font-weight:bold;
  }
  .app-ts-enter,.app-ts-leave-to{
    opacity:0;
    color:red;
  }
  .app-ts-enter-active,.app-ts-leave-active{
    transition: opacity 1s;
  }

</style>
