<template>
  <view class="text-center">
    <GImage :src="src" :width="width" :height="height" />
    <WhiteSpace />
    <view :class="` ${$isMobile?'font-size-30':'font-size-30'}`">{{title}}</view>
    <view v-if="text">
      <WhiteSpace size="lg" />
      {{text}}
    </view>
    <WhiteSpace size="xl" />
    <WhiteSpace />
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
    text: String,
    title: String,
    src: {
      type: String,
      default: require(`@/static/images/zhuce1.png`),
    },
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String],
    },
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
.nav-mask {
  position: fixed;
  top: 59px;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  z-index: 777;
}
.nav-box {
  position: fixed;
  width: 100%;
  left: 0;
  top: 59px;
  z-index: 888;
  line-height: 50px;
}
</style>
