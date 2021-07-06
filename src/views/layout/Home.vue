<template>
  <div class="home-container">
    <!-- 左侧区域菜单栏 -->
    <MenuList />
    <!-- 右侧展示区 -->
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <MainHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MenuList from '../../components/MenuList.vue';
import MainHeader from '../../components/MainHeader.vue';

export default {
  components: {
    MenuList,
    MainHeader,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import url('~@/assets/css/home.less');
</style>
