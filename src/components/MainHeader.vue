<template>
  <div class="main-header">
    <!-- 按钮 -->
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
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
    return {};
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
