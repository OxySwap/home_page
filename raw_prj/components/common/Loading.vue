<template>
  <view class>
    <view v-if="!loading">
      <slot></slot>
    </view>
    <view v-else>
      <view class="loading text-center" v-if="!type||type!=='more'">
        <image class="loading-img" src="@/static/images/yd-loading1.gif" />
      </view>
      <view  v-else-if="type==='more'">
        <uni-load-more status="loading" :iconSize="18" />
      </view>
    </view>
  </view>
</template>

<script>
import uniLoadMore from "@/components/common/plugns/uni-load-more/uni-load-more.vue";
export default {
  props: {
    loading: Boolean,
    type: String,
  },
  components: {
    uniLoadMore,
  },
};
</script>

<style scoped lang="less">
.loading {
  width: 100%;
  margin-top: 50px;
  .loading-img {
    margin-bottom: 50px;
    width: 80px;
    height: 80px;
  }
}
</style>
	

