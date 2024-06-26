import type { params, params3, yVars, xVars, paramsWithResources } from '../types/params'
import {
	getYPvar1,
	getYPvar2,
	getYPvar3,
	getYNvar1,
	getYNvar2,
	getYPosvar1,
	getYPosvar2,
	getXResources,
	getXResourcesMin,
	getYBeginEnd,
	getYMin,
	getYMax,
} from './variant'
function yProbability(xAxio: number[], params: params, getYPvar: yVars) {
	let yAxio = []
	xAxio.forEach((i) => {
		let paramsForKeys = { ...params }
		// delete paramsForKeys.d_f
		delete paramsForKeys.lamda_l
		delete paramsForKeys.lamda_r
		let keyIndex = Object.keys(paramsForKeys).findIndex((key, keyIndex, keys) => {
			// console.log([i, params[keys[keyIndex]], params[keys[keyIndex + 1]]])
			return isBetween(i, params[keys[keyIndex]], params[keys[keyIndex + 1]])
		})
		yAxio[i] = getYPvar(params, i, keyIndex)
		// console.log(yAxio[i])
	})
	return yAxio
}
function yFromVar2(xAxio: number[], params: params, getYPvar: yVars) {
	let yAxio = []
	xAxio.forEach((i) => {
		let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
		let alfa =
			((b_f - a_f) * (lamda_l * d_s - c_s) + (d_s - c_s) * (lamda_r * a_f - b_f)) /
			((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
		let changedParams: any = { a_s, b_s, c_s, alfa, b_f, c_f, d_f, lamda_l, lamda_r }
		let paramsForKeys = { ...changedParams }
		delete paramsForKeys.lamda_l
		delete paramsForKeys.lamda_r
		let keyIndex = Object.keys(paramsForKeys).findIndex((key, keyIndex, keys) => {
			return isBetween(i, changedParams[keys[keyIndex]], changedParams[keys[keyIndex + 1]])
		})
		yAxio[i] = getYPvar(params, i, keyIndex)
	})
	return yAxio
}
export function yAxioProbability(params: params) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	const xAxio = []
	for (let index = 0; index < d_f + 2; index++) {
		xAxio.push(index)
	}
	let yAxio = [...xAxio]
	if (a_f >= d_s) {
		yAxio = yProbability(xAxio, params, getYPvar1)
	}
	if (d_s > a_f && c_s <= b_f) {
		yAxio = yFromVar2(xAxio, params, getYPvar2)
	}
	if (c_s > b_f) {
		// console.log(c_s)
		xAxio.forEach((i) => {
			let { a_s, b_s, b_f, c_s, c_f, d_f, lamda_l, lamda_r } = params
			let changedParams: any = { a_s, b_s, b_f, c_s, c_f, d_f, lamda_l, lamda_r }
			yAxio = yProbability(xAxio, changedParams, getYPvar3)
		})
	}
	return yAxio
}
function isBetween(i, a, b) {
	return i <= b && i >= a
}
export function beginAndEnd(params: params) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	const xAxio = []
	for (let index = 0; index < d_f + 2; index++) {
		xAxio.push(index)
	}
	let yAxio = [...xAxio]
	yAxio = yProbability(xAxio, params, getYBeginEnd)
	return yAxio
}
export function yAxioNecessity(params: params) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	const xAxio = []
	for (let index = 0; index < d_f + 2; index++) {
		xAxio.push(index)
	}
	let yAxio = [...xAxio]
	if (a_f >= d_s) {
		let { a_s, b_s, b_f, c_s, c_f, d_f, lamda_l, lamda_r } = params
		let changedParams: any = { c_s, d_s, a_f, b_f, lamda_l, lamda_r }
		yAxio = yProbability(xAxio, changedParams, getYNvar1)
	}
	if (d_s > a_f && c_s <= b_f) {
		yAxio = yFromVar2(xAxio, params, getYNvar2)
	}
	if (c_s > b_f) {
		xAxio.forEach((i) => {
			yAxio[i] = 0
		})
	}
	return yAxio
}
export function yAxioPossibility(params: params) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	const xAxio = []
	for (let index = 0; index < d_f + 2; index++) {
		xAxio.push(index)
	}
	let yAxio = [...xAxio]
	if (a_f >= d_s) {
		let { a_s, b_s, b_f, c_s, c_f, d_f, lamda_l, lamda_r } = params
		let changedParams: any = { a_s, b_s, c_f, d_f, lamda_l, lamda_r }
		yAxio = yProbability(xAxio, changedParams, getYPosvar1)
	}
	if (d_s > a_f && c_s <= b_f) {
		yAxio = yFromVar2(xAxio, params, getYPosvar2)
	}
	if (c_s > b_f) {
		let { a_s, b_s, b_f, c_s, c_f, d_f, lamda_l, lamda_r } = params
		let changedParams: any = { a_s, b_s, c_f, d_f, lamda_l, lamda_r }
		yAxio = yProbability(xAxio, changedParams, getYPosvar1)
	}
	return yAxio
}
export function yResourcesMaxProf(paramsResources: paramsWithResources) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r, resources } = paramsResources
	let changedParams: any = { a_s, b_s, c_f, d_f, lamda_l, lamda_r }

	let xAxio = [a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f]
	if (lamda_l != lamda_r) {
		xAxio = getXResources(paramsResources)
		// xAxio.sort((a, b) => a - b)
	}

	let yAxio = [0, resources, resources, resources, resources, resources, resources, 0]
	// console.log(xAxio)
	if (lamda_l == lamda_r) {
		if (resources > 0) {
			yAxio = getYMax(paramsResources)
			xAxio.sort((a, b) => a - b)
		}
		if (d_s > a_f && c_s <= b_f) {
			let alfa =
				((b_f - a_f) * (lamda_l * d_s - c_s) + (d_s - c_s) * (lamda_r * a_f - b_f)) /
				((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
			xAxio = [a_s, b_s, c_s, alfa, alfa, b_f, c_f, d_f]
		}
	}
	console.log(yAxio)
	let xyAxio = yAxio.map((value, index) => ({ x: xAxio[index], y: value }))
	return xyAxio
}
export function yResourcesMinProf(paramsResources: paramsWithResources) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r, resources } = paramsResources
	let changedParams: any = { a_s, b_s, c_f, d_f, lamda_l, lamda_r }
	let xAxio = [a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f]
	let yAxio = [0, 0, 0, resources, resources, 0, 0, 0]
	if (lamda_l != lamda_r) {
		xAxio = getXResourcesMin(paramsResources)
		if (c_s > b_f) {
			yAxio = [0, 0, 0, 0, 0, 0, 0, 0]
		}
		if (d_s > a_f && c_s <= b_f) {
			resources = (resources * (b_f - c_s)) / (b_f - c_s + (d_s - a_f))
			yAxio = [0, 0, 0, resources, resources, 0, 0, 0]
		}
	}
	if (lamda_l == lamda_r) {
		if (resources > 0) {
			yAxio = getYMin(paramsResources)
		}
		if (d_s > a_f && c_s <= b_f) {
			let alfa =
				((b_f - a_f) * (lamda_l * d_s - c_s) + (d_s - c_s) * (lamda_r * a_f - b_f)) /
				((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
			xAxio = [a_s, b_s, c_s, alfa, alfa, b_f, c_f, d_f]
		}
		// console.log(xAxio)
	}
	xAxio.sort((a, b) => a - b)
	let xyAxio = yAxio.map((value, index) => ({ x: xAxio[index], y: value }))
	return xyAxio
}
// function xAxioResourses(xAxio: number[], params: params, getXPvar: xVars) {
// 	xAxio.forEach((i) => {
// 		let paramsForKeys = { ...params }
// 		// delete paramsForKeys.d_f
// 		delete paramsForKeys.lamda_l
// 		delete paramsForKeys.lamda_r
// 		let keyIndex = Object.keys(paramsForKeys).findIndex((key, keyIndex, keys) => {
// 			// console.log([i, params[keys[keyIndex]], params[keys[keyIndex + 1]]])
// 			return isBetween(i, params[keys[keyIndex]], params[keys[keyIndex + 1]])
// 		})
// 		xAxio = getXPvar(params, keyIndex)
// 		// console.log(keyIndex)
// 	})
// 	return xAxio
// }
// export function beginAndEnd(params: params) {
// 	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
// 	const xAxio = [a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f]
// 	const yAxio = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0]
// 	return [xAxio, yAxio]
// }
