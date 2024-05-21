<script>
	import Inpunts from './components/Inpunts.svelte'
	import Chart from './components/Chart.svelte'
</script>

<main>
	<h1>Нечеткое распределение ресурсов работы во времени ее реализации</h1>
	<div class="row gap">
		<Inpunts />
		<div class="row gap">
			<div class="column">
				<Chart boundaries={[0, 3]} labels={['Вероятность', 'Необходимость', 'Возможность']} />
			</div>
			<div class="column">
				<Chart
					flag="resources"
					boundaries={[3, 5]}
					labels={['Максимальный профиль', 'Минимальный профиль']}
				/>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		width: 900px;
		height: 500px;
	}
	.column {
		width: 400px;
		height: 400px;
	}
</style>
