<template>
  <view>
    <view class="header-box">
      <o-row>
        <o-col span="22" offset="1">
          <view
            :class="`bg-white flex-center-between header ${
              isMobile() ? 'header1' : ''
            }`"
          >
            <a href="/" class="flex-center-between">
              <GImage
                :src="
                  isMobile()
                    ? require(`@/static/images/logo32_1.png`)
                    : require(`@/static/images/logo1.png`)
                "
                :width="isMobile() ? 24 : 155"
                :height="isMobile() ? 24 : 30"
              />
            </a>

            <view
              class="flex-center-between nav-list font-size-16 translate-50 text-center"
              v-if="!isMobile()"
            >
              <view class="active"><a :href="homeLink">首页</a></view>
              <view class><a :href="exchangeLink">交易</a></view>

              <view><a :href="miningSelfLink">矿池</a></view>
            </view>

            <view class="flex-center-between width-auto header-right">
            </view>
          </view>
        </o-col>
      </o-row>

    </view>
    <WhiteSpace v-if="!isMobile()" />
    <WhiteSpace size="xl" v-if="!isMobile()" />
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import { mixin } from '@/utils';

export default {
  components: {
    WhiteSpace,
  },
  props: ["active"],
  data() {
    return {
      show: false,
      homeLink: "",
      exchangeLink: "",
      miningSelfLink: "",
    };
  },
  mounted() {
    var { hostname } = window.location;
    hostname = hostname.indexOf("www") === -1 ? "www." + hostname : hostname;
    var base_main = hostname.substring(hostname.indexOf("."));

    this.homeLink = "//www" + base_main;
    this.exchangeLink = "//app" + base_main;
    this.miningSelfLink = "//miningpool" + base_main;
    console.log(this.homeLink, this.exchangeLink, this.miningSelfLink);
  },
  mixins: [mixin],
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.header {
  height: 80px;
  .header-right {
    min-width: 50px;
  }
  .nav-list {
    width: 360px;
    position: absolute;
    .active a {
      color: @green-color;
    }
  }
  .my-assets {
    width: 120px;
    height: 40px;
    line-height: 40px;
  }
  .my-assets1 {
    width: 75px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
  }
}
.header1 {
  height: 60px;
}
.header-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
}
.header-menu {
  position: absolute;
  left: 50%;
}
</style>
