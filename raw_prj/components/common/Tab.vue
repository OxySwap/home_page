<template>
  <view>
    <view
      :class="`tabs ${className} text-center ${
        $isMobile ? 'font-size-16' : 'font-size-18'
      }`"
      v-if="$isPc"
    >
      <text v-if="tabs">
        <text
          v-for="item in tabs"
          :key="item.tab"
          :class="`tab   ${tab === item.tab ? 'selected' : ''} cursor-pointer`"
          @tap="selectTab(item.tab)"
        >
          <text>{{ item.text }}</text>
        </text>
      </text>
      <text v-if="!tabs" class="color-font-defult">订单号：{{ id }}</text>
      <view class="filter-type flex-center-end" v-if="showFilter">
        <text class="mr15">筛选币种</text>

        <view class="pos-relative width-auto">
          <button
            class="handler-btn-pc-primary width-auto handler-btn-pc-plain-primary margin-0 cursor-pointer"
            size="mini"
            @tap="toggleShow"
          >
            {{ selectText }}
          </button>

          <view v-show="show">
            <view
              class="filter-select-list bg-white text-center font-size-14 green-shadow translateX-50 cursor-pointer"
            >
              <view
                :class="`bd-bottom cursor-pointer ${
                  select === item.id ? 'color-green' : ''
                }`"
                v-for="item in list"
                :key="item.id"
                @tap="selectCurrency(item)"
                >{{ item.name }}</view
              >
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-else>
      <view class="flex mobile-tabs">
        <button
          v-for="item in tabs"
          :key="item.tab"
          @tap="selectTab(item.tab)"
          :class="`  ${
            tab === item.tab ? 'handler-btn-pc-primary' : 'submit-cancel-btn'
          } width-auto border-radius-5 cursor-pointer`"
          size="mini"
        >
          {{ item.text }}
        </button>
      </view>
    </view>
    <WhiteSpace size="xl" v-if="$isPc" />
    <WhiteSpace v-if="$isPc" />
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";
import UniTransition from "@/components/common/plugns/uni-transition/uni-transition.vue";
import { getCurrencyList, log } from "@/request/home";
export default {
  props: {
    className: {
      type: [String],
    },
    tabs: [Array, null],
    tab: Number,
    showFilter: {
      type: Boolean,
      default: true,
    },
    id: [Number, String],
    currencyId: [Number, String],
  },
  components: {
    WhiteSpace,
    WingBlank,
    UniTransition,
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
    selectTab(tab) {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      });
      this.$emit("selectTab", tab);
    },
    toggleShow() {
      this.show = !this.show;
    },
    selectCurrency(item, show) {
      this.selectText = item.name;
      this.select = item.id;

      if (!show) {
     
        this.toggleShow();
        this.$emit("selectCurrency", item.id);
      }
    },
    getCurrencyList() {
      getCurrencyList({}).then((r) => {
        this.list = [{ name: "全部", id: 0 }, ...r.data.data];
        if (this.currencyId) {
          var item = this.list.find((el, i) => {
            return parseInt(el.id) === parseInt(this.currencyId);
          });
          item && this.selectCurrency(item, true);
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.tabs {
  color: @gray9-color;
  position: relative;
  .tab {
    margin-right: 50px;
  }
  .selected {
    color: @font-defult-color;
  }
  .tab:last-child {
    margin-right: 0;
  }
  .filter-type {
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    .handler-btn-pc-primary {
      border-radius: 15px;
    }
  }
  .filter-select-list {
    position: absolute;
    left: 50%;
    top: 45px;
    z-index: 5;
    width: 100px;
    line-height: 35px;
  }
}
.mobile-tabs {
  background-color: #fff;
  height: 55px;
  z-index: 555;
  position: fixed;
  top: 104px;
  left: 0;
  padding: 0 15px;
}
button {
  margin: 0;
}
</style>
	

