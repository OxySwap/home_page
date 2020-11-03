<template>
  <image
    :src="src"
    @tap="onTap"
    :class="clsName"
    :style="{'width':width?width+'px':0,'height':height?height+'px':0,}"
  />
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
      console.log('???????')
      this.$emit("onImgTap");
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
</style>
