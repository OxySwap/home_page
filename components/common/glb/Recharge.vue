<template>
  <view>
    <ModalWrapCenter
      :clsName="`modal-wrap-box ${$isMobile ? 'width-80' : ''}`"
      :showClose="true"
      title="充值"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <view class="text-center">
        <WhiteSpace size="lg" />
        <view class="code-wrap">
          <tki-qrcode
            v-if="info"
            class="img2"
            cid="qrcode1"
            ref="qrcode"
            :val="info"
            :size="size"
            :unit="unit"
            :background="background"
            :foreground="foreground"
            :pdground="pdground"
            :icon="icon"
            :iconSize="iconsize"
            :lv="lv"
            :onval="onval"
            :loadMake="loadMake"
            :usingComponents="true"
          />
        </view>
        <WhiteSpace size="lg" />
      </view>
      <WhiteSpace size="lg" />
      <Card class="card1" :showPTB="false">
        <WhiteSpace size="xs" />
        <view class="flex ov-hd">
          <text class="flex1 wrap-text">{{ info }}</text>
          <GImage
            :src="require(`@/static/images/icon_copy.png`)"
            width="15"
            height="15"
            clsName="ml-5"
            @onImgTap="copy(info)"
          />
        </view>
        <WhiteSpace size="xs" />
      </Card>
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <GoLink text="充值记录" url="/views/Home/Withdraw/Record" />

      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <Notice text="请勿向以上地址充值非ETH和ERC20代币:USDT/USDC/IFS" />
      <WhiteSpace size="lg" />
      <WhiteSpace />
    </ModalWrapCenter>
  </view>
</template>

<script>
import ModalWrapCenter from "@/components/common/ModalWrapCenter";
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";
import GoLink from "@/components/common/GoLink";
import Card from "@/components/common/Card";
import Notice from "@/components/common/Notice";
import { getRechargeAddress, log } from "@/request/home";
import uniCopy from "@/js_sdk/xb-copy/uni-copy.js";
export default {
  components: {
    WhiteSpace,
    WingBlank,

    ModalWrapCenter,
    Card,
    Notice,
    GoLink,
  },
  data() {
    return {
      info: '',

      size: 200, // 二维码大小
      unit: "px", // 单位
      background: "#fff", // 背景色
      foreground: "#000", // 前景色
      pdground: "#000", // 角标色
      icon: "", // 二维码图标
      iconsize: 94, // 二维码图标大小
      lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
      onval: true, // val值变化时自动重新生成二维码
      loadMake: true, // 组件加载完成后自动生成二维码
      src: "", // 二维码生成后的图片地址或base64
    };
  },
  mounted() {
    this.getRechargeAddress();
  },
  methods: {
    getRechargeAddress(param) {
      getRechargeAddress(param).then((r) => {
        this.info = r.data.data;
      });
    },
        copy(content) {
      uniCopy({
        content,
        success: (res) => {
          this.$showToast(res)
        
        },
        error: (e) => {
           this.$showToast(e)
        
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";

.modal-wrap-box {
  max-width: 400px;
  .token-item {
    height: 60px;
  }
}
.card1 {
  vertical-align: middle;
  border-radius: 5px;
}
</style>
	

