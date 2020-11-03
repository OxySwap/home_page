<template>
  <view>
    <ModalWrapCenter
      :clsName="`modal-wrap-box ${$isMobile ? 'width-80' : ''}`"
      :showClose="true"
      title="个人信息"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <WhiteSpace />
      <WhiteSpace size="lg" />
      <view class="text-center">
        <GImage
          :src="require(`@/static/images/touxiang.png`)"
          width="40"
          height="40"
        />
        <WhiteSpace size="lg" />
        <view class="font-size-18">{{ $cutPhone(info.mobile) }}</view>
        <WhiteSpace size="lg" />
        <WingBlank>
          <view class="flex">
            <view @tap="showLpw" class="cursor-pointer">
              <GoLink text="修改登录密码" />
            </view>
            <view @tap="showPpw" class="cursor-pointer">
              <GoLink text="修改资金密码" />
            </view>
          </view>
        </WingBlank>
      </view>
      <WhiteSpace size="lg" />
      <WhiteSpace />
      <Card
        class="card1"
        :showPTB="false"
        @cardClick="cardClick('/views/Home/Invite/Index')"
      >
        <view class="flex nav-list-item">
          <view>邀请好友</view>
          <GImage
            :src="require(`@/static/images/icon_gray_arrow.png`)"
            width="8"
            height="15"
          />
        </view>
      </Card>
      <WhiteSpace size="lg" />
      <Card
        class="card1"
        :showPTB="false"
        @cardClick="cardClick('/views/Home/Deposit/Record')"
      >
        <view class="flex nav-list-item">
          <view>存币记录</view>
          <GImage
            :src="require(`@/static/images/icon_gray_arrow.png`)"
            width="8"
            height="15"
          />
        </view>
      </Card>
      <WhiteSpace size="lg" />
      <Card
        class="card1"
        :showPTB="false"
        @cardClick="cardClick('/views/Home/Bill/Index')"
      >
        <view class="flex nav-list-item">
          <view>收支记录</view>
          <GImage
            :src="require(`@/static/images/icon_gray_arrow.png`)"
            width="8"
            height="15"
          />
        </view>
      </Card>
      <WhiteSpace size="lg" />
      <Card
        class="card1"
        :showPTB="false"
        @cardClick="cardClick('/views/Home/Withdraw/Record')"
      >
        <view class="flex nav-list-item">
          <view>充提记录</view>
          <GImage
            :src="require(`@/static/images/icon_gray_arrow.png`)"
            width="8"
            height="15"
          />
        </view>
      </Card>
      <WhiteSpace />

      <view class>
        <WhiteSpace size="lg" />
        <button
          type="primary"
          size="large"
          class="submit-lg-btn handler-btn-pc-plain-primary"
          @tap="userLogout"
        >
          退出登录
        </button>
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
import GoLink from "@/components/common/GoLink";
import Card from "@/components/common/Card";
import { getUserInfo, log } from "@/request/home";
import { logout } from "@/tools/index";
export default {
  components: {
    WhiteSpace,
    WingBlank,
    ModalWrapCenter,
    GoLink,
    Card,
  },
  props: {
    show: Boolean,
  },
  mounted() {
    this.getUserInfo();
  },
  data() {
    return {
      info: {},
    };
  },
  methods: {
    getUserInfo(param) {
      getUserInfo(param).then((r) => {
        this.info = r.data.data;
      });
    },
    showLpw() {
      this.$emit("showLpw");
    },
    showPpw() {
      this.$emit("showPpw");
    },
    cardClick(url) {
      this.$emit("close");
      this.$navTo.togo(url);
    },

    userLogout() {
      logout();
      this.$showToast("退出登录成功");
      setTimeout(() => {
        this.$emit("showLogin");
      }, 1500);
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";

.modal-wrap-box {
  max-width: 400px;
  .nav-list-item {
    height: 35px;
  }
}
</style>


