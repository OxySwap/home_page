<template>
  <view>
    <ModalWrapCenter
      :clsName="`modal-wrap-box ${$isMobile?'width-80':''}`"
      :showClose="true"
      title="修改登录密码"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <WhiteSpace />
      <WhiteSpace size="lg" />

      <InputItem
        placeholder="请输入新密码"
        type="password"
        label="登录密码"
        message="8~20位数字与字母组合密码"
        name="password"
        :value="password"
        :maxlength="20"
        @input="input"
      />
      <WhiteSpace size="lg" />
      <InputItem
        placeholder="请再次输入新密码"
        type="password"
        label="确认登录密码"
        message="8~20位数字与字母组合密码"
        name="newPassword"
        :value="newPassword"
        :maxlength="20"
        @input="input"
      />
      <WhiteSpace size="lg" />
      <InputItem
        placeholder="请输入短信验证码"
        label="短信验证码"
        name="captcha"
        :maxlength="6"
        :value="captcha"
        @input="input"
        type="number"
      >
        <ButtonCaptcha :mobile="mobile" />
      </InputItem>
      <view class>
        <SendCodeTo :mobile="mobile" />
        <button type="primary" size="large" class="submit-lg-btn" @tap="submit">确定</button>
        <WhiteSpace size="lg" />
        <view class="flex">
          <button
            type="primary"
            size="large"
            class="submit-lg-btn width-47 submit-cancel-btn bg-white"
            @tap="showInfo"
          >返回</button>
          <button type="primary" size="large" class="submit-lg-btn width-47 submit-cancel-btn bg-white" @tap="$emit('close')">关闭</button>
        </view>
      </view>
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
    </ModalWrapCenter>
  </view>
</template>

<script>
import ModalWrapCenter from "@/components/common/ModalWrapCenter";
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";
import InputItem from "@/components/common/InputItem";
import ButtonCaptcha from "@/components/common/ButtonCaptcha";
import SendCodeTo from "./SendCodeTo";
import { updateLoginPw, log } from "@/request/home";
import { getLoginState } from "@/tools/index";
import validator from "@/tools/validator";
import { logout } from "@/tools/index";
var flag=true
export default {
  components: {
    WhiteSpace,
    WingBlank,
    InputItem,
    ModalWrapCenter,
    ButtonCaptcha,
    SendCodeTo,
  },

  data() {
    return {
      captcha: "",
      mobile: "",
      password: "",
      newPassword: "",
    };
  },
  mounted() {
    this.getLoginState();
  },
  methods: {
    getLoginState() {
      var info = getLoginState();
      this.mobile = info.mobile;
      console.log(this.mobile);
    },
    input(val, name) {
      this[name] = val;
    },
    showInfo(){
      this.$emit('showInfo')
    },
    submit() {
      const { captcha, mobile, password, newPassword, tab } = this;
      if (validator.isEmpty(password)) {
        this.$showToast("请输入新密码");
      } else if (!validator.isPassword(password)) {
        this.$showToast("请输入8~20位数字与字母组合密码");
      } else if (validator.isEmpty(newPassword)) {
        this.$showToast("请再次输入新密码");
      } else if (newPassword !== password) {
        this.$showToast("两次密码输入不一致");
      } else if (validator.isEmpty(captcha)) {
        this.$showToast("请输入短信验证码");
      } else if (!validator.isNumber(captcha) || String(captcha).length < 6) {
        this.$showToast("短信验证码格式不正确");
      } else {
        if (flag) {
          flag = false;
          updateLoginPw({ password, captcha, newPassword })
            .then((r) => {
            
              logout();
              this.$showToast("修改成功");
              setTimeout(() => {
                
                this.$emit("showLogin");
              }, 1500);
            })
            .finally(() => {
              flag = true;
            });
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";

.modal-wrap-box {
  max-width: 400px;
  .submit-lg-btn1 {
    border: none;
    background-color: #fff !important;
    border: 1px solid @green-color;
    color: @green-color;
  }
}
</style>
	

