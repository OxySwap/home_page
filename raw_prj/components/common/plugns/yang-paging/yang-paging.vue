<template>
  <view>
    <view style="width: 100%;">
      <view class="fy">
        <view v-if="first" @click="init(1)" :style="[customStyle]" class="fy-sw-btn">首页</view>
        <view v-if="arrow" :style="[customStyle]" @click="upper" class="fy-sw-btn">
          <slot name="arrow-left">上页</slot>
        </view>
        <view
          v-for="(item,index) in page"
          :key="index"
          @click="init(item)"
          :style="{background:HN_back(index),color:HN_color(index),'border-radius':`${radius}px`}"
        >{{item}}</view>
        <view v-if="zpage>5&&current!==zpage" :style="{'border-radius':`${radius}px`}">...</view>
        <view v-if="arrow" :style="[customStyle]" @click="next" class="fy-sw-btn">
          <slot name="arrow-right">下页</slot>
        </view>
        <view v-if="first" @click="init(zpage)" :style="[customStyle]" class="fy-sw-btn">尾页</view>
      </view>
      <!-- <view class="btn-view" v-if="true">
        <view>当前页：{{ current }}，数据总量：{{ total }},{{zpage}}条，每页数据：{{ pageSize }}</view>
      </view>-->
    </view>
  </view>
</template>
<script>
export default {
  name: "paging",
  props: {
    arrow: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [Number, String],
      default: 1,
    },
    first: {
      type: Boolean,
      default: true,
    },
    total: {
      type: [Number, String],
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 0,
    },
    footer: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: "#00BFFF",
    },
    color: {
      type: String,
      default: "#ffffff",
    },
    activebackground: {
      type: String,
      default: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
    },
    activecolor: {
      type: String,
      default: "#ffffff",
    },
    radius: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      page: [],
      zpage: 0,
      current: -1,
      customStyle: {},
    };
  },
  created() {
    this.jx();

    this.customStyle = {
      background: this.background,
      color: this.color,
      "border-radius": `${this.radius}px`,
    };
  },
  watch: {
    total() {
      this.current = -1;
      this.jx();
    },
    pageSize() {
      this.jx();
    },
    value(val) {
      this.init(val);
    },
  },
  methods: {
    jx() {
      let that = this;
      let total = parseInt(that.total);
      let pageSize = parseInt(that.pageSize);
      let zpage = parseInt(total / pageSize);
      if (total / pageSize > zpage) {
        zpage++;
      }
      that.zpage = zpage;
      if (this.current === -1) {
        this.init(this.value);
      } else {
        const value = this.current > this.zpage ? this.zpage : this.current;
        this.init(value);
      }
    },
    upper() {
      this.init(this.current - 1);
    },
    next() {
      this.init(this.current + 1);
    },
    init(curren) {
      if (curren === this.current) {
        return;
      }

      let arr = [];
      curren = curren < 1 ? 1 : curren;
      curren = curren > this.zpage ? this.zpage : curren;
      if (this.current != -1) this.$emit("changes", curren);
      this.current = this.page = curren;
      if (this.zpage < 5) {
        for (let i = 1; i <= this.zpage; i++) {
          arr.push(i);
        }
        this.page = arr;
        return;
      }

      if (curren <= 3) {
        arr = [1, 2, 3, 4, 5];
        this.page = arr;
        return;
      }

      if (curren >= this.zpage - 2) {
        arr = [
          this.zpage - 4,
          this.zpage - 3,
          this.zpage - 2,
          this.zpage - 1,
          this.zpage,
        ];
        this.page = arr;
        return;
      }
      arr = [curren - 2, curren - 1, curren, curren + 1, curren + 2];
      this.page = arr;
      return;
    },
    HN_back: function (e) {
      let a =
        this.current == this.page[e] ? this.activebackground : this.background;
      return a;
    },
    HN_color: function (e) {
      let a = this.current == this.page[e] ? this.activecolor : this.color;
      return a;
    },
  },
  onLoad() {},
};
</script>
<style scoped lang="less">
@charset "UTF-8";
@import "@/assets/css/base.less";
.fy {
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: center;
}

.fy view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 25px;
  width: auto;
  height: 25px;
  font-size: 14px;
  margin-left: 5px;
  border: 1px solid @gray3-color;
}
.fy-sw-btn {
  padding: 0 5px;
}
.btn-view {
  margin-top: 20px;
}
</style>
