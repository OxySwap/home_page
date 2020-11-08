<template>
  <view>
    <o-row v-if="$isPc">
      <o-col span="16" offset="4">
        <view class="flex-center cursor-pointer" @tap="goBack">
          <GImage
            :src="require(`@/static/images/jiantou@3x.png`)"
            width="8"
            height="15"
            clsName="mr15"
          />
          <text>返回</text>
        </view>
      </o-col>
    </o-row>
    <view v-else>
      <view class="bd-top bd-bottom nav-bar-box">
        <WingBlank>
          <view class="text-center pos-relative nav-bar">
            <GImage
              :src="require(`@/static/images/icon_back.png`)"
              width="6"
              height="11"
              clsName="nav-img translateY-50 cursor-pointer"
              @onImgTap="goBack"
            />

            <view class="font-size-16">{{title}}</view>
            <view class="nav-select translateY-50 font-size-13 flex-center-end cursor-pointer" v-if="showFilter" @tap="toggleShow">
              <text class="mr5">{{selectText||'筛选'}}</text>
              <GImage :src="show?require(`@/static/images/icon_t_arrow.png`):require(`@/static/images/icon_b_arrrow.png`)" width="11" height="6" />
            </view>
            <view v-show="show">
              <view class="nav-select-list bg-white text-center font-size-14 green-shadow">
                <view
                  :class="`bd-bottom cursor-pointer ${select===item.id?'color-green':''}`"
                  v-for="item in list"
                  :key="item.id"
                  @tap="selectCurrency(item)"
                >{{item.name}}</view>
              </view>
            </view>
          </view>
        </WingBlank>
      </view>
    </view>
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";
import { getCurrencyList, log } from "@/request/home";
export default {
  components: {
    WhiteSpace,
    WingBlank,
  },
  props:{
     showFilter: {
      type: Boolean,
      default: true,
    },
    title:String
  },

  data() {
    return {
      show: false,
      select: 0,
      selectText: "全部",
      list: [],
    };
  },
  mounted() {
    this.getCurrencyList();
  },
  methods: {
    goBack() {
      console.log("0?????????????");
      uni.navigateBack();
    },

    toggleShow() {
      this.show = !this.show;
    },
    selectCurrency(item) {
      this.selectText = item.name;
      this.select = item.id;
      this.$emit("selectCurrency", item.id);
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      });
      this.toggleShow();
    },
    getCurrencyList() {
      getCurrencyList({}).then((r) => {
        this.list = [{ name: "全部", id: 0 }, ...r.data.data];
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.nav-bar-box {
  position: fixed;
  width: 100%;
  left: 0;
  top: 59px;
  z-index: 666;
  background-color: #fff;
  .nav-select-list {
    position: absolute;
    right: 0;
    top: 50px;
    z-index: 5;
    width: 70px;
    line-height: 30px;
  }
}
.nav-bar {
  height: 45px;
  line-height: 45px;
  .nav-img,
  .nav-select {
    position: absolute;
  }
  .nav-img {
    left: 0;
  }
  .nav-select {
    right: 0;
    width: auto;
  }
}
</style>
