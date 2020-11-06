<template>
	<view :class="['o-col-'+Span, Offset]" :style="'padding:0 '+ gutter +'rpx;'">
		<view :class="bgclass" :style="Radius+bgStyle">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "o-col",
		props:{
			span:{
				type:[Number,String],
				default:24
			},
			offset:{
				type:[Number,String],
				default:0
			}
		},
		inject: ['gutter','bgclass','bgstyle','radius'],
		computed:{
			Span(){
				if(this.span > 24) return 24;
				else if(this.span < 1) return 1;
				else return this.span;
			},
			Offset(){
				if(this.offset > 0 || this.offset < 24) return 'offset-'+this.offset;
				else return '';
			},
			Radius(){
				if(this.radius > 0) return 'border-radius:'+this.radius+'rpx;';
				else return '';
			},
			bgStyle(){
				if(this.bgstyle != '') return 'background-color:'+this.bgstyle;
				else return '';
			}
		}
	}
</script>

<style lang="scss" scoped>

	[class*="o-col-"] {
		float:left;
		box-sizing:border-box;
		> view{height:100%;}
	}
	.col-auto {flex: 0 0 auto;width: auto;max-width: 100%;}

	@for $col from 1 through 24 {
		.o-col-#{$col}{
			flex: 0 0 calc(100%/24*#{$col});
			max-width:calc(100%/24*#{$col});
		}
	}

	@for $i from 1 through 23 {
		.offset-#{$i}{margin-left:calc(100%/24*#{$i})}
	}
	
	@for $col from 1 through 5 {
		.row.cols-#{$col}>*{
			flex:0 0 calc(100% / #{$col}) !important;
			max-width:calc(100% / #{$col}) !important;
		}
	}
	

</style>
