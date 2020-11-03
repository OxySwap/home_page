<template>
  <view class>
    <view class="send-code-to color-gray8" v-if="mobile">验证码将发送至手机号: {{$cutPhone(mobile)}}</view>
    <view class="send-code-to  color-gray8" v-if="text">{{text}}</view>
  </view>
</template>

<script>


export default {
  props: {
    mobile: {
      type: [Number, String],
    },
    text:String
  },
  methods: {
   
  },
};
</script>

<style scoped lang="less">
.send-code-to {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  font-size: 12px;

}
</style>
