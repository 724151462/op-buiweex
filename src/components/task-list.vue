<template>
<div>
	<div class="title-wrapper" style="margin-top: 20px;">
				<text class="title-count">待办任务(2)</text>
			</div>
	<div class="task-container">
		<div class="task-wrapper">
			<div class="task-title">
				<image :src="getImg('t-bg1.png')" class="title-bg">
					<span>线索流转</span>
				</image>
			</div>
			<div class="task-main">
				<div class="main-left">
					<span>2020-11-10 11:44:23</span>
					<span class="main-content">这是内容</span>
				</div>
				<div class="main-right">
					<!-- <wxc-button text="忽略"></wxc-button> -->
					<!-- <wxc-button text="处理"></wxc-button> -->
					<van-button class="handle-btn" color="#42526E" plain size="mini">忽略</van-button>
					<van-button class="ignore-btn" type="info" size="mini">处理</van-button>
				</div>
			</div>
		</div>
	</div>
</div>
	
</template>

<script>
	import {getImg} from '@/utils/index'
	// import { WxcButton } from 'weex-ui';
	// import {Button} from 'Vant'
	export default {
		data() {
			return {
				
			};
		},
		components: {
			// WxcButton
			// Button
		},
		props: {
			taskList: {
				type: Array
			}
		},
		beforeMount() {
			this.getImg = getImg
		}
	}
</script>

<style lang="scss">
.task-container {
	margin-bottom: 20px;
	padding: 20px;
	background-color: #fff;
    .task-wrapper {
		flex-direction: column;
		background-color: #F4F5F7;
		border-radius: 20px;
		padding: 20px;
        .task-title {
					background-size: 100% 100%;
					background-repeat: no-repeat;
					color: #fff;
					height: 50px;
					margin-top: -20px;
					margin-left: -20px;
					.title-bg{
						position: relative;
						height: 50px;
						width: 180px;
        span {
        }
					}
					span{
						position: relative;
						color: #fff;
						top: 3px;
						left: 20px;
						font-size: 30px;
					}
        }
        .task-main {
						justify-content: space-between;
						align-items: center;
						flex-direction: row;
            .main-left {
							color: #B7BDCE;
							span{
								color: #7A869A;
								font-size: 18px;
							}
							.main-content{
								color: #42526E;
								font-size: 20px;
							}
            }
            .main-right {
							flex-direction: row;
							align-items: center;
							.handle-btn {
								border-radius: 10px;
								border-style: solid; 
								border-width: 1px; 
								border-color: #BEC3D2 !important; 
								span{
									color: #42526E;
									font-size: 14px;
									padding: 0 10px;
								}
							}
							.ignore-btn {
								border-radius: 10px;
								span{
									color: #fff;
									font-size: 14px;
									padding: 0 10px;
								}
							}
							button {
								margin-right: 6upx;
							}
            }
        }
    }
}
/deep/ .van-button__text{
	color: red !important;
}
</style>
