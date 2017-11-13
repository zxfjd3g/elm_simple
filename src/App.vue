<template>
  <div>
    <transition name="router-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <!--<transition name="router-fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>-->
    <foot-guide v-show="$route.meta.isTop"></foot-guide>
    <svgIcon></svgIcon>
  </div>
</template>

<script>
  import svgIcon from 'components/common/svg'
  import footGuide from 'components/footer/footGuide'


  export default {
    components: {
      svgIcon,
      footGuide
    },
  }
</script>

<style lang="scss">
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter, .router-fade-leave-to {
    opacity: 0;
  }
</style>
