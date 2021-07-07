<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="[
        $router.currentRoute.matched[1] ? $router.currentRoute.matched[1].name : '',
      ]"
      :default-open-keys="[$router.currentRoute.matched[0].name]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <!-- 实现登录路由消失的方案一，通过filter进行数据过滤-->
      <a-sub-menu
        v-for="route in $store.state.menuRoutes.filter((item) => !item.meta.hiddle)"
        :key="route.name"
      >
        <template v-if="!route.meta.hiddle">
          <span slot="title">
            <a-icon :type="route.meta.icon" />
            <span>{{ route.meta.title }}</span>
          </span>
          <a-menu-item v-for="child in route.children" :key="child.name">
            <router-link :to="{ name: child.name }">
              <a-icon :type="child.meta.icon" />
              {{ child.meta.title }}
            </router-link>
          </a-menu-item>
        </template>
      </a-sub-menu>

      <!-- 实现登录路由消失的方案二，最外层进行循环，里面一层进行判断 -->
      <!-- <template v-for="route in $store.state.menuRoutes">
        <a-sub-menu v-if="!route.meta.hiddle"  :key="route.name">
          <span slot="title">
            <a-icon type="mail" />
            <span>{{ route.meta.title }}</span>
          </span>
          <a-menu-item v-for="child in route.children" :key="child.name">{{
            child.meta.title
          }}</a-menu-item>
        </a-sub-menu>
      </template> -->
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
  },
};
</script>
