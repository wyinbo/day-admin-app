<template>
  <div class="main-header">
    <!-- 按钮 -->
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <a-breadcrumb v-if="currentRoutes.length > 1">
        <a-breadcrumb-item>{{
          currentRoutes[0] ? currentRoutes[0].meta.title : ''
        }}</a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{ name: currentRoutes.name }">{{
            currentRoutes[1] ? currentRoutes[1].meta.title : ''
          }}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        {{ this.$store.state.user.username }}
        <a-icon type="down" />
      </li>
      <li class="login-out" @click="loginOut">退出</li>
      <!-- <li class="login-in" @c></li> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentRoutes: this.$router.currentRoute.matched,
    };
  },
  watch: {
    $route() {
      console.log(this.$router);
      this.currentRoutes = this.$router.currentRoute.matched;
    },
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    loginOut() {
      this.$store.dispatch('loginOut');
      this.$router.push('/login');
    },
  },
};
</script>
