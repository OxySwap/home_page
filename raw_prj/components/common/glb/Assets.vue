<template>
  <view>
    <ModalWrapCenter
      :clsName="`modal-wrap-box ${$isMobile?'width-80':''}`"
      :showClose="true"
      title="我的资产"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <WhiteSpace />
      <WhiteSpace size="lg" />
      <Card class="card1 text-center">
        <view class="color-second">总资产</view>
        <WhiteSpace />
        <view class="font-size-20">${{info.total}}</view>
      </Card>
      <WhiteSpace size="lg" />
      <view class="token-list">
        <view class="flex bd-bottom token-item" v-for="(item,i) in info.list" :key="i">
          <view class="flex-center">
            <GImage :src="item.icon" width="30" height="30" clsName="mr5 border-radius-50" />
            {{item.name}}
          </view>
          <view class="text-right font-size-13">
            <view>{{$isEmpty(item.amount)}}</view>
            <WhiteSpace size="xs" />
            <view class="color-second">≈${{item.price}}</view>
          </view>
        </view>
      </view>

      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <view class="flex">
        <button type="primary" size="large" class="submit-lg-btn width-47" @tap="toggleRecharge">充值</button>
        <button
          type="primary"
          size="large"
          class="submit-lg-btn width-47 handler-btn-pc-plain-primary bg-white"
          @tap="withdraw"
        >提币</button>
      </view>
      <WhiteSpace size="lg" />
      <WhiteSpace />
    </ModalWrapCenter>
  </view>
</template>

<script>
import ModalWrapCenter from "@/components/common/ModalWrapCenter";
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";

import Card from "@/components/common/Card";
import { getAssets, log } from "@/request/home";
export default {
  components: {
    WhiteSpace,
    WingBlank,

    ModalWrapCenter,
    Card,
  },

  data() {
    return {
      info: {},
    };
  },
  mounted() {
    this.getAssets();
  },
  methods: {
    toggleRecharge() {
      this.$emit("toggleRecharge");
    },
    getAssets(param) {
      getAssets(param).then((r) => {
        this.info = r.data.data;
      });
    },
    withdraw() {
      this.$emit("close");
      this.$navTo.togo("/views/Home/Withdraw/Index");
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
</style>
	

