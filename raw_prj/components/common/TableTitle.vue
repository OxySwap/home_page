<template>
  <WingBlank>
    <view :class="`flex color-gray1 ${$isMobile?'font-size-16':''} text-center`">
      <view
        v-for="(item,i) in list"
        :key="item"
        :class="`${item==='操作'?'flex1-5':'flex1'}  ${i===0?'text-left':i===list.length-1?'text-right':''} `"
      >{{item}}</view>
    </view>
    <WhiteSpace size="lg" />
  </WingBlank>
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
    list: Array,
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
