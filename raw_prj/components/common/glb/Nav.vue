<template>
  <view class>
    <view class="nav-mask"></view>
    <view class="text-center nav-box bg-white">
      <view class="bd-top active"><a :href="homeLink">首页</a></view>
      <view class="bd-top"><a :href="exchangeLink">交易</a></view>

      <view class="bd-top"><a :href="miningSelfLink">矿池</a></view>
      <!-- <view class="bd-top "
        ><a href="https://tearn.incre.finance/#/views/Home/index">机枪池</a>
      </view> -->
    </view>
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";

export default {
  components: {
    WhiteSpace,
    WingBlank,
  },
  props: ["active"],
  data() {
    return {
      homeLink: "",
      exchangeLink: "",
      miningSelfLink: "",
    };
  },
  mounted() {
    var { hostname } = window.location;
      hostname =
      hostname.indexOf("www") === -1 ? "www." + hostname : hostname;
    var base_main = hostname.substring(hostname.indexOf("."));
   
    this.homeLink = "//www" + base_main;
    this.exchangeLink = "//app" + base_main;
    this.miningSelfLink = "//miningpool" + base_main;
    console.log(this.homeLink, this.exchangeLink, this.miningSelfLink);
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.nav-mask {
  position: fixed;
  top: 59px;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  z-index: 777;
}
.active a {
  color: @green-color;
}
.nav-box {
  position: fixed;
  width: 100%;
  left: 0;
  top: 59px;
  z-index: 888;
  line-height: 50px;
}
</style>
