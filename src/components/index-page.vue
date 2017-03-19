<template>
	
	<div class="index-page">
		index-page
	</div>

</template>

<script>

	export default {
		name: 'index-page',
		data() {
			return {
				curIdx: '1',
				toJSON: true
			}
		},
		computed: {
			// title() {
			// 	return store.state.title;
			// }
		},
		methods: {
			change() {
				// store.dispatch('change', {
				// 	title: this.input_text
				// });
			},
			handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
		}
	}
</script>

<style>
	.index-page {
		padding: 10px;
	}
</style>