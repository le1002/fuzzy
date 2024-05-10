import type { params, paramsResources } from '../types/params'

export function getYPvar1(params: params, i: number, keyIndex: number) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	switch (keyIndex) {
		case 0:
			return (lamda_l / (b_s - a_s)) * (i - a_s)
		case 1:
			return lamda_l
		case 2:
			return (1 / (d_s - c_s)) * ((1 - lamda_l) * i + lamda_l * d_s - c_s)
		case 3:
			return 1
		case 4:
			return (1 / (b_f - a_f)) * ((lamda_r - 1) * i + b_f - lamda_r * a_f)
		case 5:
			return lamda_r
		case 6:
			return (-lamda_r / (d_f - c_f)) * (i - d_f)
		default:
			return 0
	}
}
export function getYPvar2(params: params, i: number, keyIndex: number) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	switch (keyIndex) {
		case 0:
			return (lamda_l / (b_s - a_s)) * (i - a_s)
		case 1:
			return lamda_l
		case 2:
			return (1 / (d_s - c_s)) * ((1 - lamda_l) * i + lamda_l * d_s - c_s)
		case 3:
			return (1 / (b_f - a_f)) * ((lamda_r - 1) * i + b_f - lamda_r * a_f)
		case 4:
			return lamda_r
		case 5:
			return (-lamda_r * (i - d_f)) / (d_f - c_f)
		default:
			return 0
	}
	// let alfa =
	// 	((b_f - a_f) * (lamda_l * d_s - c_s) + (d_s - c_s) * (lamda_r * a_f - b_f)) /
	// 	((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
	// if (lamda_l == lamda_r) {
	// 	alfa = (d_s * b_f - a_f * c_s) / (d_f - c_s) + (d_s - a_f)
	// }
	// let d_s_temp = d_s
	// d_s = alfa
	// let a_f_temp = a_f
	// a_f = alfa
	// let b_f_temp = b_f
	// b_f = c_f
	// let c_f_temp = c_f
	// c_f = d_f
	// let d_f_temp = d_f
	// d_f = 0
	// switch (keyIndex) {
	// 	case 0:
	// 		return (lamda_l / (b_s - a_s)) * (i - a_s)
	// 	case 1:
	// 		return lamda_l
	// 	case 2:
	// 		console.log(i)
	// 		if (i == 9) {
	// 			return (1 / (b_f_temp - a_f_temp)) * ((lamda_r - 1) * i + b_f_temp - lamda_r * a_f_temp)
	// 		}
	// 		return (1 / (d_s_temp - c_s)) * ((1 - lamda_l) * i + lamda_l * d_s_temp - c_s)
	// 	case 3:
	// 		return 0
	// 	case 4:
	// 		return (1 / (b_f_temp - a_f_temp)) * ((lamda_r - 1) * i + b_f_temp - lamda_r * a_f_temp)
	// 	case 5:
	// 		return lamda_r
	// 	case 6:
	// 		return (-lamda_r * (i - d_f_temp)) / (d_f_temp - c_f_temp)
	// 	default:
	// 		return 0
	// }
}
export function getYPvar3(params: params, i: number, keyIndex: number) {
	let { a_s, b_s, b_f, c_s, c_f, d_f, lamda_l, lamda_r } = params

	switch (keyIndex) {
		case 0:
			return (lamda_l / (b_s - a_s)) * (i - a_s)
		case 1:
			return lamda_l
		case 2:
			return (1 / (b_f - c_s)) * ((lamda_l - lamda_r) * i + lamda_r * b_f - lamda_l * c_s)
		case 3:
			return lamda_r
		case 4:
			return (-lamda_r * (i - d_f)) / (d_f - c_f)
		default:
			return 0
	}
}
export function getYNvar1(params: params, i: number, keyIndex: number) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	switch (keyIndex) {
		case 0:
			return (i - c_s) / (d_s - c_s)
		case 1:
			return 1
		case 2:
			return (-i + b_f) / (b_f - a_f)
		default:
			return 0
	}
}
export function getYNvar2(params: params, i: number, keyIndex: number) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	let alfa =
		((b_f - a_f) * (lamda_l * d_s - c_s) + (d_s - c_s) * (lamda_r * a_f - b_f)) /
		((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
	let bette =
		((b_f - lamda_r * a_f) * (lamda_l - 1) + (lamda_l * d_s - c_s) * (lamda_r - 1)) /
		((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
	switch (keyIndex) {
		case 0:
			return 0
		case 1:
			return 0
		case 2:
			return ((i - c_s) / (alfa - c_s)) * bette
		case 3:
			return ((-i + b_f) / (b_f - alfa)) * bette
		default:
			return 0
	}
}
export function getYPosvar1(params: params, i: number, keyIndex: number) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	switch (keyIndex) {
		case 0:
			return (i - a_s) / (b_s - a_s)
		case 1:
			return 1
		case 2:
			return (-i + d_f) / (d_f - c_f)
		default:
			return 0
	}
}
export function getYPosvar2(params: params, i: number, keyIndex: number) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	let alfa =
		((b_f - a_f) * (lamda_l * d_s - c_s) + (d_s - c_s) * (lamda_r * a_f - b_f)) /
		((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
	let bette =
		((b_f - lamda_r * a_f) * (lamda_l - 1) + (lamda_l * d_s - c_s) * (lamda_r - 1)) /
		((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
	switch (keyIndex) {
		case 0:
			return (i - a_s) / (b_s - a_s)
		case 1:
		case 2:
		case 3:
		case 4:
			return 1
		case 5:
			return (-i + d_f) / (d_f - c_f)
		default:
			return 0
	}
}
export function getXResources(paramsResources: paramsResources, keyIndex: number) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r, r } = paramsResources
	let w = a_f - a_s
	let z = d_f - d_s
	switch (keyIndex) {
		case 0:
			let Dn = (d_f - c_s + a_f - d_s) / 2
			let Db = (d_f - a_s + c_f - b_s) / 2
			let D =
				lamda_l * ((d_s - b_s) / 2 + (c_s - a_s) / 2) +
				lamda_r * ((c_f - a_f) / 2 + (d_f - b_f) / 2) +
				((a_f - d_s) / 2 + (d_f - c_s) / 2)
			if (Db < D && D <= z) {
				b_s = b_s - (2 * (D - Db) * (b_s - a_s)) / (b_s - a_s + d_f - c_f)
				c_f = c_f + (2 * (D - Db) * (d_f - c_f)) / (b_s - a_s + d_f - c_f)
			}
			return [a_s, b_s, c_f, d_f]
	}
}
// export function getYBeginEnd(params: params, i: number, keyIndex: number) {
// 	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
// 	switch (keyIndex) {
// 		case 0:
// 			return (i - a_s) / (b_s - a_s)
// 		case 1:
// 			return 1
// 		case 2:
// 			return (i - c_s) / (d_s - c_s)
// 		case 3:
// 			return 0
// 		case 4:
// 			return (i - a_f) / (b_f - a_f)
// 		case 5:
// 			return 1
// 		case 6:
// 			return (i - c_f) / (d_f - c_f)
// 		default:
// 			return 0
// 	}
// }
