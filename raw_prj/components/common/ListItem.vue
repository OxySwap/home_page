<template>
  <view>
    <view :class="`flex  ${className} `">
      <view class="text-left flex1">{{title}}</view>
      <view class="text-right flex1-5"><slot></slot></view>
    </view>
    <WhiteSpace :size="$isPc?'lg':'md'" v-if="showPTB"/>
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
  props: {
    className: {
      type: String,
    },
    title:String,
     showPTB: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
</style>
