import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Foo from '@/components/foo'
// import Bar from '@/components/bar'
import User from '@/components/user'
import UserProfile from '@/components/profile'
import UserPost from '@/components/posts'
import None from '@/components/none'

const Foo = ()=>import('@/components/foo'); //懒加载写法
const Bar = ()=>import('@/components/bar');

Vue.use(Router)

var onOff = true;

const router = new Router({
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return{x:0,y:0}
    if(savedPosition){
      console.log(123)
      // return savedPosition;
    }else{
      console.log(456)
      return {x:0,y:0}
    }

  },
  routes: [
    {
     	path:'/user/:id',
        name:'user',
      	component:User,
        props:true,
        meta:{msg:'我是META_a'},
        children:[
            {
              path:'profile',
              name:'profile',
              meta:{msg:'我是META_b'},
              component:UserProfile
            },
            {
              path:'posts',
              component:UserPost
            },
            {
              path:'', //添加了一个无子路由的路由
              redirect:'profile'
              // component:None
            },
          ]
          
        },
    {
      path: '/',
      name: 'HelloWorld',
      components:{
        default:HelloWorld,
        a:Foo,
        b:Bar
      }

    },
    {
      path:'/foo',
	  name:'foo',   
	//   beforeEnter:(to,from,next)=>{
    //     console.log('我是路由独享守卫');
    //     if(Math.random()>0.5){
    //         next('/bar')
    //     }
    //     next();
    //   },
      component:Foo
    },
    {
      path:'/bar',
      name:'bar',
      component:Bar
    },
    {
      path:'*',
      component:None
    }
  ]
})

router.beforeEach((to,from,next)=>{
  // console.log('我是全局前置守卫');
  // console.log(to,from,next);
  next();
})

export default router;