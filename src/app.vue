<template>
  <div id="app">

    <router-view></router-view>

    <m-tabbar @tabbarActionEvent='changeSelectedValue' v-show="$route.meta.navShow">
      <m-tabbar-item id='home' :isRouter="isHome">
        <img src="./assets/images/tabbar-home-normal.png" alt="" slot="icon-normal" >
        <img src="./assets/images/tabbar-home-selected.png" alt="" slot="icon-active">
        首页
      </m-tabbar-item>
      <m-tabbar-item id='me' :isRouter="isMe">
        <img src="./assets/images/tabbar-me-normal.png" alt="" slot="icon-normal" >
        <img src="./assets/images/tabbar-me-selected.png" alt="" slot="icon-active">
        我
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>

  import mTabbar from 'common/tab/tabbar.vue'
  import mTabbarItem from 'common/tab/tabbaritem.vue'

  export default {

    name: 'app',

    components: {
      mTabbar,
      mTabbarItem
    },

    data () {
      return {
        isHome: true,
        isMe: false
      }
    },

    methods: {
      changeSelectedValue: function (elValue) {
        console.log("elValue : "+elValue);
        if (elValue === 'home') {
          this.isHome = true
        } else {
          this.isHome = false
        }
        if (elValue === 'me') {
          this.isMe = true
        } else {
          this.isMe = false
        }
      }
    }

  }
</script>