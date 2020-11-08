<template>
  <view class>
     <WhiteSpace size="xl" v-if="!isMobile()"/>
    <view class="footer-box">
      <o-row>
        <o-col :span="`${isMobile()?'22':'12'}`" :offset="`${isMobile()?'1':'6'}`">
          <WhiteSpace size="xl" v-if="!isMobile()"/>
          <view :class="`text-center color-gray1 footer ${isMobile()?'font-size-10 footer1':''}`">
            <view class>推特</view>
            <view class>电报</view>

            <view class>GitHub</view>
            <view class>智能合约</view>
            <view class>白皮书</view>
          </view>
        </o-col>
      </o-row>
    </view>
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
    return {};
  },
  mounted() {},
  mixins: [mixin],
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";

.footer-box {
  position: fixed;
  bottom: -1px;
  left: 0;
  width: 100%;
  background-color: #fff;
  .footer {
    height: 50px;
    vertical-align: middle;

    view {
      width: auto;
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .footer1 {
    height: 60px;
    padding-top: 5px;
    box-sizing: border-box;
  }
}
</style>
