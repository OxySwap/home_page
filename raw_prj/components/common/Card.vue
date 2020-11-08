<template>
  <view :class="`bg-white cursor-pointer ${className}`" @tap="cardClick">
    <WingBlank>
      <WhiteSpace size="lg" v-if="showPTB"/>

      <slot></slot>
      <WhiteSpace size="lg" v-if="showPTB" />
    </WingBlank>
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";
export default {
  props: {
    className: {
      type: String,
    },
    showPTB: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    WhiteSpace,
    WingBlank,
  },
  methods:{
    cardClick(){
      this.$emit('cardClick')
    }
  }
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.card1 {
  border: 1px solid @gray3-color;
  border-radius: 20px;
}
</style>
