<template>
  <view>
    <view class="bg-gray7 border-radius-25">
      <WingBlank>
        <view
          :class="`flex  ${$isMobile?'font-size-16':''} text-center flex-center-center table-row `"
        >
       <slot></slot>
        </view>
      </WingBlank>
    </view>
    <WhiteSpace size="lg" />
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
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.table-row {
  height: 70px;
}
</style>
