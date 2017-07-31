import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'

import Main from '../components/Main'
import Classify from '../components/Classify'
import Find from '../components/Find'
import Shopping from '../components/Shopping'
import My from '../components/My'
import Login from '../components/Login'
import Register from '../components/Register'
import MainList from '../components/Main_components/MainList'
import MainBMList from '../components/Main_components/MainBMList'
import MainBList from '../components/Main_components/MainBList'
import MainSBList from '../components/Main_components/MainSBList'
import MainSOpacity from '../components/Main_components/MainSOpacity'

import ClassifyBList from '../components/Classify_components/ClassifyBList'

//import ShoppingBanner from '../components/Shoppingcomponents/ShoppingBanner'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/main',name:'main',component: Main},
//  {path: '/classify',name: 'classify',component: Classify},
//  {path: '/classifyblist/:id',name: 'classifyblist',component: ClassifyBList},
    
  {path: '/classify',name: 'classify',component: Classify,children:[
  	{path: '/classifyblist/:id',name: 'classifyblist',component: ClassifyBList},
  ]},
		
    
    {path: '/find',name: 'find',component: Find},
    {path: '/shopping',name: 'shopping',component: Shopping},
    
//  {path: '/shopping',name: 'shopping',component: Shopping},
    
    {path: '/mainsopacity',name: 'mainsopacity',component: MainSOpacity},
    {path:'/mainlist/:goodId',name:'mainlist',component:MainList},
    {path:'/mainblist/:articleId',name:'mainblist',component:MainBList},
    {path:'/mainsblist/:id',name:'mainsblist',component:MainSBList},

    {path:'/mainbmlist/:id',name:'mainbmlist',component:MainBMList},
    {path: '/my',name: 'my',component: My},

//  {path: '/my',name: 'my',component: My,children:[
//	    {path: 'login',name: 'login',component: Login},
//	    {path: 'register',name: 'register',component: Register}
//  ]},
    {path: '/my/login',name: 'login',component: Login},
    {path: '/my/register',name: 'register',component: Register},

    {path:'/',redirect:'/main'},
    {path:'*',redirect:'/main'}
  ]
})
