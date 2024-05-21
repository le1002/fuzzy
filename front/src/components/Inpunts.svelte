<script lang="ts">
	import {
		yAxioProbability,
		beginAndEnd,
		yAxioNecessity,
		yAxioPossibility,
		yResourcesMaxProf,
		yResourcesMinProf,
	} from '../services/coordinates'
	import { params as paramsStore, yProbability, timeBeginEnd, grafStore } from '../stores'
	// import { keys } from 'ts-transformer-keys'
	import type { params } from '../types/params'
	let params = {
		a_s: 1,
		b_s: 4,
		c_s: 7,
		d_s: 9,
		a_f: 3,
		b_f: 6,
		c_f: 11,
		d_f: 12,
		lamda_l: 0.5,
		lamda_r: 0.6,
	}
	const paramsValues = Object.values(params)
	let project = {
		startB: { label: 'Возможное время самого раннего начала работы' },
		optimStartB: { label: 'Начало оптимального промежутка начала работы' },
		optimEndB: { label: 'Конец оптимального промежутка начала работы' },
		endB: { label: 'Возможное время самого позднего начала работы' },
		startE: { label: 'Возможное время самого раннего окончания работы' },
		optimStartE: { label: 'Начало оптимального промежутка окончания работы' },
		optimEndE: { label: 'Конец оптимального промежутка окончания работы' },
		endE: { label: 'Возможное время самого позднего окончания работы' },
		lambdaL: {
			label: 'Левая граница настраевоемого параметра вероятности выполнения работы',
			value: 0.5,
			min: 0,
			max: 1,
		},
		lambdaR: {
			label: 'Правая граница настраевоемого параметра вероятности выполнения работы',
			value: 0.5,
			min: 0,
			max: 1,
		},
		resources: { label: 'Количество ресурсов', value: 0 },
	}
	const minMaxKeys = ['lambdaL', 'lambdaR']

	Object.keys(project).forEach((name, index) => {
		let newValue = paramsValues[index] ? paramsValues[index] : ''
		if (project[name].value == undefined) project[name].value = newValue
	})
	$: {
		const values = Object.keys(project).map((key) => project[key].value)
		let keys = ['a_s', 'b_s', 'c_s', 'd_s', 'a_f', 'b_f', 'c_f', 'd_f', 'lamda_l', 'lamda_r']
		const paramsTmp = keys.reduce((a, v, i) => ({ ...a, [v]: values[i] }), {}) as params
		let inputs = { ...paramsTmp, resources: project.resources.value }
		// console.log(inputs)
		grafStore.set({
			inputs,
			matrix: [
				yAxioProbability(paramsTmp),
				yAxioNecessity(paramsTmp),
				yAxioPossibility(paramsTmp),
				yResourcesMaxProf(inputs),
				yResourcesMinProf(inputs),
			],
		})
		timeBeginEnd.set(beginAndEnd(paramsTmp))
	}

	// $:
	function minMax(value, key) {
		if (minMaxKeys.includes(key) && (value > 1 || value < 0)) {
			project[key].error = 'Введите значение от 0 до 1'
		} else {
			project[key].error = ''
		}
	}
</script>

<div style="min-width: 500px;">
	{#each Object.keys(project) as key}
		<div>
			<label
				>{project[key].label}
				<br />
				<input
					type="number"
					bind:value={project[key].value}
					min={project[key].min}
					max={project[key].max}
					on:input={(e) => minMax(e.target.value, key)}
				/></label
			>

			{#if project[key].error}
				<div class="error">{project[key].error}</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.error {
		padding: 5px;
		margin: 10px 0;
		background-color: red;
		color: white;
		border-radius: 4px;
	}
</style>
