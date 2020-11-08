<template>
  <view>
    <view class="flex">
      <view class="flex1">{{title}}</view>
      <view class="text-right flex-center-end flex1">
       <slot></slot>
      </view>
    </view>
    <WhiteSpace size="lg" v-if="showPd" />
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

  data() {
    return {};
  },
  props: {
    title: String,
    showPd: {
      type: Boolean,

      default: true,
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
</style>
