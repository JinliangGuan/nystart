<template>
   <ul class="profile">
     <li v-for="item in arr">{{ item }}</li>
   </ul>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      arr: ['网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱','网易','QQ邮箱','gmail','新浪邮箱']
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
