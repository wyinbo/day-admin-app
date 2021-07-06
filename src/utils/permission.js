/**
 * 存储的是对应的权限
 */
const roleToRoute = {
  coustomer: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
  ],
  admin: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
    {
      name: 'Category',
    },
  ],
};
/**
 * 过滤掉没有权限的路由
 * @param {String} role
 * @param {Array} routes
 */
export default function getMenuRoute(role, routes) {
  const allowRoutesName = roleToRoute[role].map((item) => item.name); // 拿到角色对应所有的name
  const resultRouters = routes.filter((r) => {
    const obj = r;
    if (allowRoutesName.indexOf(obj.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((c) => allowRoutesName.indexOf(c.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRouters;
}
