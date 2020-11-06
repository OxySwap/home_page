<template>
  <view :class="`wingblank-${size}`">
    <slot></slot>
  </view>
</template>

<script>
export default {
  props: {
    size: {
      type: [String],
      default: "lg",
    },
  },
};
</script>

<style scoped>
.wingblank-lg {
  padding-left: 15px;
  padding-right: 15px;
}
.wingblank-xl {
  padding-left: 30px;
  padding-right: 30px;
}
.wingblank-md {
  padding-left: 10px;
  padding-right: 10px;
}
.wingblank-sm {
  padding-left: 5px;
  padding-right: 5px;
}
</style>
	

