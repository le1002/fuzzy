<script lang="ts">
	import { params, yProbability } from '../stores'
	import { onMount } from 'svelte'
	import Chart from 'chart.js/auto'

	let chartCanvas = null
	let chart = null

	onMount(() => {
		const ctx = chartCanvas.getContext('2d')
		chart = new Chart(ctx, {
			type: 'scatter',
			data: {
				datasets: [
					{
						label: 'Test',
						data: [],
						showLine: true,
					},
				],
			},
			options: {
				responsive: true,
			},
		})
		yProbability.subscribe((yValues: number[]) => {
			if (yValues && chart) {
				let xy = yValues.map((y, x) => ({ x, y }))
				console.log(chart.data.datasets[0])
				chart.data.datasets[0].data = xy
				chart.update()
			}
		})
	})
</script>

<canvas id="chart" bind:this={chartCanvas} width={400} height={400}></canvas>
