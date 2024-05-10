// import type { params } from '../types/params'
// import { getYPvar1, getYPvar2, getYPvar3 } from './variant'
// import { yProbability } from './coordinates'

// export function yAxioProbability(params: params) {
// 	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
// 	const xAxio = []
// 	for (let index = 0; index < d_f + 2; index++) {
// 		xAxio.push(index)
// 	}
// 	let yAxio = [...xAxio]
// 	if (a_f >= d_s) {
// 		yAxio = yProbability(xAxio, params, getYPvar1)
// 	}
// 	if (d_s > a_f && c_s <= b_f) {
// 		xAxio.forEach((i) => {
// 			let { a_s, b_s, c_s, b_f, c_f, d_f, lamda_l, lamda_r } = params
// 			let alfa =
// 				((b_f - a_f) * (lamda_l * d_s - c_s) + (d_s - c_s) * (lamda_r * a_f - b_f)) /
// 				((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
// 			let changedParams: any = { a_s, b_s, c_s, alfa, b_f, c_f, d_f, lamda_l, lamda_r }
// 			yAxio = yProbability(xAxio, changedParams, getYPvar2)
// 		})
// 	}
// 	if (c_s > b_f) {
// 		console.log(c_s)
// 		xAxio.forEach((i) => {
// 			let { a_s, b_s, b_f, c_s, c_f, d_f, lamda_l, lamda_r } = params
// 			let changedParams: any = { a_s, b_s, b_f, c_s, c_f, d_f, lamda_l, lamda_r }
// 			yAxio = yProbability(xAxio, changedParams, getYPvar3)
// 		})
// 	}
// 	return yAxio
// }
