<template>
  <view class>
    <view v-if="list && list.length">
      <slot></slot>
    </view>
    <view class="empty text-center" v-else>
      <image :class="`empty-img ${clsName}`" :src="src" />
      <view class="color-gray1 font-size-13">{{text || '暂无记录'}}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    text: String,
    src: {
      type: String,
      default: require("@/static/images/icon_empty.png"),
    },
    list: Array,
    clsName: String,
  },
};
</script>

<style scoped lang="less">
.empty {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  .empty-img {
    margin-bottom: 10px;
    width: 53px;
    height: 53px;
  }
  .empty-img1 {
    width: 46px;
    height: 54.5px;
  }
  .empty-img2 {
    width: 60px;
    height: 60px;
  }
  .empty-img3 {
    width: 90px;
    height: 90px;
  }
  .empty-img4 {
    width: 50.5px;
    height: 55px;
  }
  .empty-img6 {
    width: 43px;
    height: 46px;
  }
}
</style>
	

