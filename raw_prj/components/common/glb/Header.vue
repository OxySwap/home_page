<template>
  <view>
    <view class="header-box">
      <o-row>
        <o-col span="22" offset="1">
          <view
            :class="`bg-white flex-center-between header ${
              $isMobile ? 'header1' : ''
            }`"
          >
            <a href="/" class="flex-center-between">
              <GImage
                :src="
                  $isMobile
                    ? require(`@/static/images/logo32_1.png`)
                    : require(`@/static/images/logo1.png`)
                "
                :width="$isMobile ? 24 : 155"
                :height="$isMobile ? 24 : 30"
              />
              <!-- <view :class="`font-size-18 ${$isMobile ? 'ml-5' : 'ml-15'} flex1`"> Incre.Finance</view> -->
            </a>

            <view
              class="flex-center-between nav-list font-size-16 translate-50 text-center"
              v-if="$isPc"
            >
              <view class="active"><a :href="homeLink">首页</a></view>
              <view class><a :href="exchangeLink">交易</a></view>

              <view><a :href="miningSelfLink">矿池</a></view>
              <!-- <view
                ><a href="https://tearn.incre.finance/#/views/Home/index"
                  >机枪池</a
                >
              </view> -->
            </view>

            <GImage
              :src="require(`@/static/images/leimu.png`)"
              v-if="$isMobile"
              width="17"
              height="14.5"
              @onImgTap="onImgTap"
              clsName="cursor-pointer header-menu translateX-50"
            />
            <view class="flex-center-between width-auto header-right">
              <!-- <view
                @tap="isLogin('popup')"
                :class="`${
                  $isMobile ? 'my-assets1' : 'my-assets'
                } bg-green color-white border-radius-20 text-center flex1 cursor-pointer`"
                >我的资产</view
              >
              <GImage
                :src="require(`@/static/images/zhuce.png`)"
                :width="$isMobile ? 30 : 42"
                :height="$isMobile ? 30 : 42"
                @onImgTap="isLogin('popup4')"
                clsName="ml-15 cursor-pointer"
              /> -->
            </view>
          </view>
        </o-col>
      </o-row>
      <Nav v-show="show" />
      <uni-popup ref="popup">
        <Assets
          @toggleRecharge="togglePop('popup', 'popup1')"
          @close="closeMask('popup')"
        />
      </uni-popup>
      <uni-popup ref="popup1">
        <Recharge @close="closeMask('popup1')" />
      </uni-popup>

      <uni-popup ref="popup3">
        <UpdateLoginPw
          @close="closeMask('popup3')"
          @showLogin="togglePop('popup3', 'popup2')"
          @showInfo="togglePop('popup3', 'popup4')"
        />
      </uni-popup>
      <uni-popup ref="popup4">
        <MyInfo
          @close="closeMask('popup4')"
          @showLogin="togglePop('popup4', 'popup2')"
          @showLpw="togglePop('popup4', 'popup3')"
          @showPpw="togglePop('popup4', 'popup5')"
        />
      </uni-popup>
      <uni-popup ref="popup5">
        <UpdatePayPw
          @close="closeMask('popup5')"
          @showInfo="togglePop('popup5', 'popup4')"
        />
      </uni-popup>
      <uni-popup ref="popup6">
        <ForgetPw
          @close="closeMask('popup6')"
          @showLogin="togglePop('popup6', 'popup2')"
        />
      </uni-popup>
    </view>
    <WhiteSpace v-if="$isPc" />
    <WhiteSpace size="xl" v-if="$isPc" />
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";

import Nav from "./Nav";
import Assets from "./Assets";
import Recharge from "./Recharge";

import MyInfo from "./MyInfo";
import UpdateLoginPw from "./UpdateLoginPw";
import UpdatePayPw from "./UpdatePayPw";
import ForgetPw from "./ForgetPw";
import UniPopup from "@/components/common/plugns/uni-popup/uni-popup";
import { mixins1 } from "@/tools/mixin";
import { isLogin } from "@/tools/index";
export default {
  components: {
    WhiteSpace,
    WingBlank,
    Nav,

    UniPopup,
    Assets,
    Recharge,
    MyInfo,
    UpdateLoginPw,
    UpdatePayPw,
    ForgetPw,
  },
  props: ["active"],
  mixins: [mixins1],
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
  methods: {
    onImgTap() {
      this.show = !this.show;
    },
    togglePop(key1, key2) {
      this.closeMask(key1);
      if (key2 === "popup2") {
        this.$navTo.togo("/views/Home/Login");
        return;
      }
      this.open(key2);
    },

    isLogin(key) {
      if (isLogin()) {
        this.open(key);
      } else {
        this.$navTo.togo("/views/Home/Login");
      }
    },

    msgTap() {
      this.open("popup5");
    },
  },
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
