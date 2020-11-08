<template>
  <image
    :src="src"
    @tap="onTap"
    :class="clsName"
    :style="{'width':width?width+'px':0,'height':height?height+'px':0,}"
  />
</template>

<script>

export default {
  components: {
  },
  props: {
    src: String,
    clsName: String,
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
  methods: {
    onTap() {
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
</style>
