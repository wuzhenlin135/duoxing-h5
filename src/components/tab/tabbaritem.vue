<template>
  <a class="m-tabbar-item" :class="{'is-active':isActive}" @click="goToRouter">
    <div class="m-tabbar-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></div>
    <div class="m-tabbar-item-icon" v-show="isActive"><slot name="icon-active"></slot></div>
    <div class="m-tabbar-item-text"><slot></slot></div>
  </a>
</template>

<script type="text/ecmascript-6">

  export default{
    props: {
      id: {
        type: String
      },
      isRouter: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isActive () {
        return this.isRouter
      }
    },
    methods: {
      goToRouter () {
        this.$parent.$emit('tabbarActionEvent', this.id)
        // 判断是否为路由跳转
        this.$router.push(this.id)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-tabbar-item
    flex: 1
    text-align: center
    .m-tabbar-item-icon
      padding-top: 5px
      padding-bottom 1px
      img
        width: 25px
        height: 25px
    .m-tabbar-item-text
      font-size: 10px
      font-weight: bold
      color:#949494
    &.is-active
      .m-tabbar-item-text
        color: #f7893b
</style>