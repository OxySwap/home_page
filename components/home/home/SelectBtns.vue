<template>
  <view class>
    <WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
    <o-row>
      <o-col
        :span="`${$isMobile ? '20' : '6'}`"
        :offset="`${$isMobile ? '2' : '9'}`"
      >
        <view class="flex-center-center">
          <a
            :href="miningSelfLink"
            :class="` ${$isMobile ? 'width-47' : 'width-40'}`"
          >
            <button
              size="mini"
              class="submit-lg-btn width-100 handler-btn-pc-plain-primary"
            >
              选择矿池挖OXY
            </button></a
          >
          <!-- <a href="https://tearn.incre.finance/#/views/Home/index" :class="` ${
              $isMobile ? 'width-47' : 'width-40'
            }`">
            <button
              size="mini"
              class="submit-lg-btn width-100 handler-btn-pc-plain-primary"
            >
              选择机枪池挖Token
            </button></a
          > -->
        </view>
      </o-col>
    </o-row>
    <WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";
import { isLogin } from "@/tools/index";
export default {
  name: "Home",
  components: {
    WhiteSpace,
    WingBlank,
  },
  props: {
    increPoolList: Array,
  },
  data() {
    return {
      miningSelfLink: "",
    };
  },
  mounted() {
    var { hostname } = window.location;
    hostname = hostname.indexOf("www") === -1 ? "www." + hostname : hostname;
    var base_main = hostname.substring(hostname.indexOf("."));

    this.miningSelfLink = "//miningpool" + base_main;
    console.log(this.miningSelfLink);
  },
  methods: {
    gotoLink(item) {
      if (isLogin()) {
        this.$navTo.togo("/views/Home/Deposit/Index", {
          id: item.id,
          currencyId: item.currencyId,
        });
      } else {
        this.$navTo.togo("/views/Home/Login", {
          url: `/views/Home/Deposit/Index?id=${item.id}&currencyId=${item.currencyId}`,
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.interest-list {
  .interest-item1 {
    width: 100%;
  }

  .interest-item {
    height: 480px;
    .submit-lg-btn {
      width: 200px;
    }
    .submit-mobile-btn {
      width: 90px;
    }
  }
}
</style>
