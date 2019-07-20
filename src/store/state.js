let defaultCity = '北京'
try { // 如果localStorage无法使用的话，需要捕获异常
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
