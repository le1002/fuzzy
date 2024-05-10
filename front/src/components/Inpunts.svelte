<script lang="ts">
	import {
		yAxioProbability,
		beginAndEnd,
		yAxioNecessity,
		yAxioPossibility,
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
		startB: { label: 'Возможное время самого раннего начала проекта' },
		optimStartB: { label: 'Начало оптимального промежутка начала проекта' },
		optimEndB: { label: 'Конец оптимального промежутка начала проекта' },
		endB: { label: 'Возможное время самого позднего начала проекта' },
		startE: { label: 'Возможное время самого раннего окончания проекта' },
		optimStartE: { label: 'Начало оптимального промежутка окончания проекта' },
		optimEndE: { label: 'Конец оптимального промежутка окончания проекта' },
		endE: { label: 'Возможное время самого позднего окончания проекта' },
		lambdaL: { label: 'Введите левую границу от 0 до 1', value: 0.5 },
		lambdaR: { label: 'Введите правую границу от 0 до 1', value: 0.5 },
		resources: { label: 'Количество ресурсов', value: 0 },
	}

	Object.keys(project).forEach((name, index) => {
		let newValue = paramsValues[index] ? paramsValues[index] : ''
		if (!project[name].value) project[name].value = newValue
	})
	$: {
		const values = Object.keys(project).map((key) => project[key].value)
		let keys = ['a_s', 'b_s', 'c_s', 'd_s', 'a_f', 'b_f', 'c_f', 'd_f', 'lamda_l', 'lamda_r']
		const paramsTmp = keys.reduce((a, v, i) => ({ ...a, [v]: values[i] }), {}) as params
		let inputs = { ...paramsTmp, resources: project.resources.value }
		grafStore.set({
			inputs,
			matrix: [yAxioProbability(paramsTmp), yAxioNecessity(paramsTmp), yAxioPossibility(paramsTmp)],
		})
		timeBeginEnd.set(beginAndEnd(paramsTmp))
	}
	// $:
</script>

{#each Object.keys(project) as key}
	<div>
		<label
			>{project[key].label}
			<input type="number" bind:value={project[key].value} /></label
		>
	</div>
{/each}
