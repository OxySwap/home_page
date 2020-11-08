<script>
import { setUserLoginInfo } from "./tools";

export default {
  onLaunch: function () {
    // if (setUserLoginInfo()) {
    //   uni.redirectTo({
    //     url: "/views/Shop/ComfirmOrder",
    //   });
    // } else {
    //   // uni.redirectTo({
    //   //   url: '/views/Login/Login'
    //   // });
    // }

   
  },
  onShow: function () {
    console.log("App Show1");
  },
  onHide: function () {
    console.log("App Hide1");
  },
};
</script>

<style lang="less">
/* 头条小程序需要把 iconfont 样式放到组件外 */

@import "./assets/css/global";

view {
  width: 100%;
  box-sizing: border-box;
}

/*每个页面公共css */
page {
  height: 100%;
  min-height: 100%;
  font-size: 14px;
}

/* 原生组件模式下需要注意组件外部样式 */

.status_bar {
  height: var(--status-bar-height);
  width: 100%;
  // background: #ff7433;
  /*position: fixed;*/
  /*left: 0;*/
  /*top: 0;*/
}
.tabs-pd {
  height: 40px;
}
.nav-pd {
  height: 44px;
}
uni-toast {
  z-index: 9999999;
}
// image,
// button {
//   position: inherit;
// }
button::after {
  border: none;
}
</style>
