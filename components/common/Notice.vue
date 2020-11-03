
      <template>
  <view class="flex-start-start">
    <GImage
      :src="require(`@/static/images/tishi.png`)"
      :width="$isMobile?'11':'13'"
      :height="$isMobile?'15':'17'"
      clsName="mr5"
    />
    <view :class="`flex1 ov-hd wrap-text ${$isMobile?'font-size-12':'font-size-14'}`">{{text}}</view>
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";

export default {
  components: {
    WhiteSpace,
    WingBlank,
  },
  props: {
    className: {
      type: String,
    },
    text: String,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.tb-ud1 {
  padding-bottom: 3px;
  border-bottom: 1px solid @dark-green-color;
}
</style>
