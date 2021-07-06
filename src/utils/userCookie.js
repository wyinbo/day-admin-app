import Cookie from 'js-cookie';

function setCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookie.set(arr[i][0], arr[i][1]);
  }
  return true;
}

/**
 * 获取用户的cookie信息
 */
function getUserCookie() {
  return {
    username: Cookie.get('username'),
    appkey: Cookie.get('appkey'),
    role: Cookie.get('role'),
    email: Cookie.get('email'),
  };
}
/**
 * 移除cookie
 */
function removeUserCookie() {
  Cookie.remove('username');
  Cookie.remove('appkey');
  Cookie.remove('role');
  Cookie.remove('email');
  return true;
}

export default {
  setCookie,
  getUserCookie,
  removeUserCookie,
};
