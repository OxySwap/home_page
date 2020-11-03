<template>
  <view :class="`modal-wrap-center ${clsName}`">
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <view class="text-right">
        <GImage
          :src="require(`@/static/images/btn_close.png`)"
          :width="$isMobile?14:18"
          :height="$isMobile?14:18"
          @onImgTap="onClose"
           clsName="cursor-pointer"
        />
      </view>
      <view
        class="  text-center  modal-header font-size-18"
        v-if="title"
      >{{title}}</view>

      <slot></slot>
    </WingBlank>
  </view>
</template>

<script>
import WingBlank from "@/components/common/WingBlank";
import WhiteSpace from "@/components/common/WhiteSpace";
export default {
  components: {
    WingBlank,
    WhiteSpace,
  },
  props: {
    clsName: {
      type: String,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    title: String,
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClose() {
      console.log(this.$listeners);
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-wrap-center {
  z-index: 2014;
  width: 65%;
  top: 50%;
  left: 50%;
  border-radius: 20px;
  position: fixed;
  max-height: 100%;
  background-color: #fff;
  transform: translate(-50%, -50%);
}
.modal-header {
}
</style>
	

