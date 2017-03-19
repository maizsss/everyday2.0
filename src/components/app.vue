<template>
	
	<div id="app">
		<el-menu 
			:default-active="curIdx" 
			class="el-menu-demo" 
			mode="horizontal" 
			router>
	  	<el-menu-item 
	  		index="/">日程
	  		</el-menu-item>
	  	<el-menu-item 
	  		index="/sub">关于
	  	</el-menu-item>
		</el-menu>

		<router-view></router-view>

	</div>

</template>

<script>
	import router from '../router';
	
	export default {
		name: 'app',
		router: router,
		data() {
			return {
				curIdx: ''
			}
		},
		computed: {
			
		},
		methods: {
			
		},
		created() {
			this.curIdx = router.currentRoute.path;
		}
	}
</script>

<style>
	body {
		margin: 0;
	}
</style>