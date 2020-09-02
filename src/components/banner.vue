<template>
  <div>
		<!-- <bui-image  width="750px" height="300px" class="bui-image" resize="cover" :src="imageList[0].src"></bui-image> -->
			<bui-image-slider imgHeight="400px" :items="imageList" >
			</bui-image-slider>
			
		</div>
</template>

<script>
export default {
  props: {
    imageList: Array
  },
}
</script>

<style scoped>

</style>