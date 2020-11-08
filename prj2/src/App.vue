<template>
  <view :class="`${isMobile()?'pd105':'pd80'}`">
    <Header />

    <Introduction />
    <SelectBtns/>
    <Pool :stimulatePool="stimulatePool" />
    
    <Footer />
  </view>
</template>

<script>
import Header from "@/components/common/glb/Header";
import Footer from "@/components/common/glb/Footer";

import Introduction from "@/components/home/home/Introduction";
import Pool from "@/components/home/home/Pool";
import SelectBtns from "@/components/home/home/SelectBtns";
import { mixin } from "@/utils";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Introduction,
    Pool,
    SelectBtns,
  },
  data() {
    return {
      stimulatePool: {},
     
    };
  },
  mounted() {
  },
  methods: {
  },
  mixins: [mixin],
};
</script>


<style lang="less">

@import "./assets/css/global.less";

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

