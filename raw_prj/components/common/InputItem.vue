<template>
  <view :class="` ${clsName ? clsName : ''}`">
    <Card :class="`input-list-item   card1  `">
      <view class="flex-center-between font-size-12 color-gray1">
        <view class="input-list-item-label" v-if="label">{{ label }}</view>
        <view
          :class="`text-right nowrap ${cls ? cls+' cursor-pointer' : ''}`"
          v-if="message"
          @tap="msgTap"
          >{{ message }}</view
        >
      </view>

      <WhiteSpace size="lg" />
      <view class="flex-center-between" @tap="onInputEleClick">
        <input
          :focus="focus"
          :type="inputType"
          :value="value"
          v-if="showInput"
          @input="onInput"
          class="flex1 input-list-item-input color-font-defult"
          :placeholder="placeholder"
          placeholder-class="color-gray4 font-size-14"
          :password="type === 'password'"
          @focus="onFocus"
          @blur="onBlur"
          :maxlength="maxlength"
          :disabled="disabled"
        />
        <slot></slot>
      </view>
    </Card>
  </view>
</template>

<script>
import WingBlank from "@/components/common/WingBlank";
import WhiteSpace from "@/components/common/WhiteSpace";
import Card from "@/components/common/Card";
export default {
  components: {
    WingBlank,
    WhiteSpace,
    Card,
  },
  props: {
    /**
     * 输入类型
     */
    type: String,
    /**
     * 值
     */
    value: {
      type: [Number, String],
    },
    /**
     * 占位符
     */
    placeholder: String,
    /**
     * label
     */
    label: String,

    /**
     * 自动获取焦点
     */
    focus: {
      type: [Boolean, String],
      default: false,
    },
    /**
     * 最大
     */
    maxlength: Number,
    /**
     * 自动获取焦点
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 名字
     */
    name: String,

    clsName: String,
    cls: String,

    message: String,
    showInput: {
      type: Boolean,
      default: true,
    },
  },
  model: {
    prop: "value",
    event: "input",
  },
  data() {
    return {
      /**
       * 是否获取焦点
       */
      isFocus: false,
    };
  },
  computed: {
    inputType() {
      const type = this.type;
      return type === "password" ? "text" : type;
    },
  },
  methods: {
    clear() {
      this.$emit("input", "");
    },
    msgTap() {
      this.$emit("msgTap");
    },

    onFocus() {
      this.isFocus = true;
    },
    onBlur() {
      this.$nextTick(() => {
        this.isFocus = false;
      });
    },
    onInput(e) {
      this.$emit("input", e.detail.value, this.name);
    },
    onInputEleClick(){
      this.$emit('onInputEleClick')
    }
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.input-list-item {
  .input-list-item-input {
    border-radius: 0;
    padding: 0;
    height: 100%;
    margin-bottom: 0;
    font-size: 14px;
    // position: relative;
    // z-index: 2;
  }
}
</style>
