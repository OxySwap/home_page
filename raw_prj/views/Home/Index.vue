<template>
  <view :class="`${$isMobile?'pd105':'pd80'}`">
    <GbHeader />

    <Introduction />
    <SelectBtns/>
    <Pool :stimulatePool="stimulatePool" />
    

    <GFooter />
    <uni-popup ref="popup">
      <Login />
    </uni-popup>
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";
import Introduction from "@/components/home/home/Introduction";
import Pool from "@/components/home/home/Pool";
import SelectBtns from "@/components/home/home/SelectBtns";



import UniPopup from "@/components/common/plugns/uni-popup/uni-popup";
import { getStimulatePool, getIncrePoolList, log } from "@/request/home";
import { mixins1 } from "@/tools/mixin";
export default {
  name: "Home",
  components: {
    WhiteSpace,
    WingBlank,
    Introduction,
    Pool,
    SelectBtns,

  
    UniPopup,
  },
  mixins: [mixins1],
  data() {
    return {
      stimulatePool: {},
     
    };
  },
  mounted() {
    this.$setPageTitle('OxySwap')
  },
  methods: {
   
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
</style>
