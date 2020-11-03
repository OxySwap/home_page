<template>
  <div class="_showModal" v-show="show">
    <div class="_shade"></div>
    <div class="_modalBox" @click="closeModal" @touchmove.stop.prevent>
      <div class="_modal">
        <WingBlank size="lg">
          <slot name="title">
            <div class="title" v-show="title">{{ title }}</div>
          </slot>
          <slot name="content">
            <div class="content">{{ content }}</div>
          </slot>
          <slot name="btn">
            <div class="flex">
              <button
                type="primary"
                size="large"
                v-show="showCancel"
                @click.stop="clickBtn('cancel')"
                class="submit-lg-btn width-47 submit-cancel-btn bg-white"
              >
                {{ cancelText }}
              </button>
              <button
                type="primary"
                size="large"
                :class="`submit-lg-btn ${
                  showCancel ? 'width-47' : 'width-100'
                }`"
                @click.stop="clickBtn('confirm')"
              >
                {{ confirmText }}
              </button>
              <!-- <div class="cancel btn" v-show="showCancel" :style="cancelColor" @click.stop="clickBtn('cancel')">{{cancelText}}</div>
              <div class="confirm btn" :style="confirmColor" @click.stop="clickBtn('confirm')">{{confirmText}}</div>-->
            </div>
          </slot>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    </div>
  </div>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";
export default {
  computed: {
    show() {
      return this.$modalStore.state.show;
    },
    title() {
      return this.$modalStore.state.title;
    },
    content() {
      return this.$modalStore.state.content;
    },
    showCancel() {
      return this.$modalStore.state.showCancel;
    },
    cancelText() {
      return this.$modalStore.state.cancelText;
    },
    cancelColor() {
      return "color:" + this.$modalStore.state.cancelColor;
    },
    confirmText() {
      return this.$modalStore.state.confirmText;
    },
    confirmColor() {
      return "color:" + this.$modalStore.state.confirmColor;
    },
  },
  components: {
    WhiteSpace,
    WingBlank,
  },
  methods: {
    closeModal() {
      this.$modalStore.commit("hideModal");
    },
    clickBtn(res) {
      if (res === "cancel"||!this.showCancel) {
        this.closeModal();
      }
      this.$modalStore.commit("success", res);
    },
  },
  beforeDestroy() {
    this.$modalStore.commit("hideModal");
  },
};
</script>

<style lang="scss" scoped>
._showModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  ._shade {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.6;
    z-index: 11000;
  }
  ._modalBox {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 12000;
    display: flex;
    justify-content: center;
    align-items: center;
    ._modal {
      flex: none;
      background: #fff;
      width: 65%;
      border-radius: 20px;
      max-width: 350px;
      .title {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        padding: 15px 0 0;
        // border-bottom: 1upx solid #e1e1e1;
      }
      .content {
        padding: 30px;
        font-size: 14px;
        color: #666;
        line-height: 35upx;
        text-align: center;
      }
    }
  }
}
</style>
