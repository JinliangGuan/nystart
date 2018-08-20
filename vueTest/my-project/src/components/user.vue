<template>
  <div class="hello">
    <!-- <h2>username is:{{ this.$route.params.id }}</h2> -->
    <h2>username is:{{ id }}</h2>
    <p>
      <router-link v-bind:to="'/user/'+id+'/profile'">show profile</router-link>
      | 
      <router-link v-bind:to="'/user/'+id+'/posts'">show posts</router-link>
    </p>
    <div class="user-box">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'this is user'
    }
  },
  props:['id'],
  computed:{
  },
  // beforeRouteLeave(to,from,next){
  //   var ans = window.confirm('您即将离开本页面');
  //   if(ans){
  //     next()
  //   }else{
  //     next(false)
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .user-box{
    width:200px;
    margin:0 auto;
    border:1px solid #000;
  }
  .v-enter,.v-leave-to{
    opacity:0;
    color:green;
  }
  .v-enter-active,.v-leave-active{
    transition: opacity 0.5s;
  }

</style>
