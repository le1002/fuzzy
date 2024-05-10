<script>
	import Inpunts from './components/Inpunts.svelte'
	import Chart from './components/Chart.svelte'
</script>

<main>
	<Inpunts />
	<Chart boundaries={[0, 3]} labels={['Probability', 'Necessity', 'Possibility']} />
</main>

<style>
	main {
		width: 400px;
		height: 400px;
	}
</style>
