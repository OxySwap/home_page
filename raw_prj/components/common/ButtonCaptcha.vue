<template>
  <button
    :class="`btn1 ${clsName}`"
    size="small"
    type="primary"
    :disabled="endTime !== 60"
    @click="sendSms"
  >
    {{status ? `重新获取` : '获取验证码'}}
    {{ endTime !== 60 ? `(${endTime})` : ''}}
  </button>
</template>

<script>
import WingBlank from "@/components/common/WingBlank";
import validator from "@/tools/validator";
import { sendCode } from "@/request/home";
export default {
  components: {
    WingBlank,
  },

  data() {
    return {
      status: false,
      endTime: 60,
    };
  },
  destroyed() {
    clearInterval(this.t);
  },
  props: {
    mobile: {
      type: [Number, String],
    },
    clsName: String,
    isRegister:Boolean
  },

  methods: {
    sendSms() {
      console.log(mobile);
      const { mobile } = this;
      if (validator.isEmpty(mobile)) {
        this.$showToast("请输入手机号");
      } else if (!validator.isPhone(mobile)) {
        this.$showToast("手机号格式不正确");
      } else {
        var url=this.isRegister?'captcha/code':'captcha/mobile'
        sendCode(url,{ mobile }).then((r) => {
          this.endTime = this.endTime - 1;
          this.status = true;
          this.t = setInterval(() => {
            this.endTime = this.endTime - 1;
            if (this.endTime === 0) {
              this.endTime = 60;
              clearInterval(this.t);
            }
          }, 1000);
        });
      }
      // 请求接口
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";

.btn1 {
  color: #fff;
  border: none;
  background-color: @green-color;
  min-width: 60px;
  height: 30px;
  padding: 0 8px;
  font-size: 12px;
  line-height: 30px;
  border-radius: 15px;
  width: auto;
}
uni-button:after {
  display: none;
}
button[disabled][type="primary"] {
 background-color: @green-color;
}
</style>
