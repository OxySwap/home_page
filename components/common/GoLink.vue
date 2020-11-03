<template>
  <view :class="`text-center cursor-pointer  color-dark-green ${className} `" @tap="goLink">
    <text class="tb-ud1">{{text}}</text>
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
    text: String,
    url: String,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goLink() {
      if (this.url) {
        console.log(this.url);
        uni.navigateTo({url:this.url});
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
</style>
