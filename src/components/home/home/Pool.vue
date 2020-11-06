<template>
  <view>
    <o-row>
      <o-col
        :span="`${isMobile() ? '16' : '16'}`"
        :offset="`${isMobile() ? '4' : '4'}`"
      >
        <view :class="`${isMobile() ? '' : 'flex-center-between'} pool-list`">
          <view
            view
            :class="`bg-light-yellow border-radius-10  ${
              isMobile() ? 'mb20' : 'width-30'
            }`"
          >
            <WingBlank>
              <WhiteSpace size="lg" />
              <view
                :class="`color-dark-red ${
                  isMobile() ? 'font-size-20' : 'font-size-30'
                } `"
                ><!--{{ $isEmpty(stimulatePool.inviteStimulatePool) }}--></view
              >
              <WhiteSpace />
              <view :class="`${isMobile() ? 'font-size-14' : ''}`"
                >OXY当前价格</view
              >
              <WhiteSpace size="lg" />
            </WingBlank>
          </view>
          <view
            :class="`bg-light-green border-radius-10  ${
              isMobile() ? 'mb20' : 'width-30'
            }`"
          >
            <WingBlank>
              <WhiteSpace size="lg" />
              <view
                :class="`color-green1 ${
                  isMobile() ? 'font-size-20' : 'font-size-30'
                } `"
                ><!--{{ $isEmpty(stimulatePool.storageStimulatePool) }}--></view
              >
              <WhiteSpace />
              <view :class="`${isMobile() ? 'font-size-14' : ''}`"
                >OXY流通量</view
              >
              <WhiteSpace size="lg" />
            </WingBlank>
          </view>
          <view
            view
            :class="`bg-light-blue border-radius-10  ${
              isMobile() ? '' : 'width-30'
            }`"
          >
            <WingBlank>
              <WhiteSpace size="lg" />
              <view
                :class="`color-blue ${
                  isMobile() ? 'font-size-20' : 'font-size-30'
                } `"
                ><!--{{ $isEmpty(stimulatePool.inviteStimulatePool) }}--></view
              >
              <WhiteSpace />
              <view :class="`${isMobile() ? 'font-size-14' : ''}`"
                >OXY总市值</view
              >
              <WhiteSpace size="lg" />
            </WingBlank>
          </view>
        </view>
      </o-col>
    </o-row>
    <WhiteSpace size="xl" />
  </view>
</template>

<script>
import WhiteSpace from "@/components/common/WhiteSpace";
import WingBlank from "@/components/common/WingBlank";
import { mixin } from '@/utils';

export default {
  name: "Home",
  components: {
    WhiteSpace,
    WingBlank,
  },
  props: {
    stimulatePool: Object,
  },
  mixins: [mixin],
};
</script>

<style scoped lang="less">
@import "@/assets/css/base.less";
.pool-list {
}
</style>
