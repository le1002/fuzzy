<script lang="ts">
	import { params, yProbability, grafStore } from '../stores'
	import { onMount } from 'svelte'
	import Chart from 'chart.js/auto'
	import { beginAndEnd } from '../services/coordinates'

	let chartCanvas = null
	let chart = null

	export let flag = null
	export let boundaries
	export let labels
	onMount(() => {
		const ctx = chartCanvas.getContext('2d')
		chart = new Chart(ctx, {
			type: 'scatter',
			data: {
				datasets: labels.map((label) => ({
					label,
					data: [],
					showLine: true,
				})),
			},
			options: {
				responsive: true,
			},
		})
		grafStore.subscribe((graf) => {
			if (graf && chart) {
				let newMatrix = graf.matrix.slice(...boundaries)
				let matrixXY = newMatrix
				if (flag != 'resources') {
					matrixXY = newMatrix.map((yValues) => yValues.map((y, x) => ({ x, y })))
				}
				// console.log(matrixXY)
				matrixXY.forEach((value, index) => {
					chart.data.datasets[index].data = value
				})
				chart.update()
			}
		})
	})
</script>

<canvas id="chart" bind:this={chartCanvas} width={400} height={400}></canvas>
