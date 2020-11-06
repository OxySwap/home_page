<template>
  <view :class="`whitespace-${size}`"></view>
</template>

<script>
export default {
  props: {
    size: {
      type: [String],
      default: "md",
    },
  },
};
</script>

<style scoped>
.whitespace-xs {
  height: 3px;
}
.whitespace-sm {
  height: 5px;
}
.whitespace-md {
  height: 9px;
}
.whitespace-lg {
  height: 15px;
}
.whitespace-xl {
  height: 20px;
}
</style>
	

