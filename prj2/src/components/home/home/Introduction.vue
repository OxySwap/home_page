<template>
  <view class="home-intro text-center">
    <GImage
      :src="require(`@/static/images/logo97.png`)"
      :width="isMobile() ? 48 : 90"
      :height="isMobile() ? 48 : 90"
    />
    <WhiteSpace size="lg" />

    <GImage
      :src="require(`@/static/images/logo2.png`)"
      :width="isMobile() ? 150 : 300"
      :height="isMobile() ? 30 : 60"
    />

    <WhiteSpace size="lg" />

    <WhiteSpace />
    <o-row>
      <o-col
        :span="`${isMobile() ? '16' : '10'}`"
        :offset="`${isMobile() ? '4' : '7'}`"
      >
        <view
          :class="`color-gray1 line-height-30 ${
            isMobile() ? 'font-size-14' : ''
          }`">
          OxySwap是集合了DEX、流动性挖矿的去中心化金融平台。OxySwap旨在为用户提供更加便捷和安全的价值交换和价值增长的的场所，让用户在去中心化的环境中体验区块链世界金融产品并获得超高的价值增益。
        </view>
      </o-col>
    </o-row>
    <WhiteSpace />
    <WhiteSpace size="xl" />
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import { mixin } from '@/utils';

export default {
  name: "Home",
  components: {
    WhiteSpace,
  },
  mixins: [mixin],
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
</style>
