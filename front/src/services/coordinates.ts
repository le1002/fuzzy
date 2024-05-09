import type { params, params3, yVars } from '../types/params'
import { getYPvar1, getYPvar2, getYPvar3 } from './variant'
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
		// console.log(keyIndex)
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
		yAxio = yProbability(xAxio, params, getYPvar2)
	}
	if (c_s > b_f) {
		console.log(c_s)
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
