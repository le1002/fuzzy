import type { params, paramsWithResources } from '../types/params'

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
export function getXResources(paramsResources: paramsWithResources) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r, resources } = paramsResources
	let w = a_f - a_s
	let z = d_f - d_s
	let Db = (d_f - a_s + c_f - b_s) / 2
	let D =
		lamda_l * ((d_s - b_s) / 2 + (c_s - a_s) / 2) +
		lamda_r * ((c_f - a_f) / 2 + (d_f - b_f) / 2) +
		((a_f - d_s) / 2 + (d_f - c_s) / 2)
	if (d_s > a_f && c_s <= b_f) {
		let alfa =
			((b_f - a_f) * (lamda_l * d_s - c_s) + (d_s - c_s) * (lamda_r * a_f - b_f)) /
			((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
		let bette =
			((b_f - lamda_r * a_f) * (lamda_l - 1) + (lamda_l * d_s - c_s) * (lamda_r - 1)) /
			((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
		D =
			lamda_l * ((c_s - alfa) / 2 - (a_s + b_s) / 2) +
			lamda_r * ((d_f + c_f) / 2 - (alfa + b_f) / 2) +
			bette * ((b_f - c_s) / 2)
	}
	if (c_s > b_f) {
		Db = (d_f - a_s + c_f - b_s) / 2
		D =
			lamda_l * ((c_s + b_f) / 2 - (a_s + b_s) / 2) + lamda_r * ((d_f + c_f) / 2 - (c_s + b_f) / 2)
	}
	if (Db < D && D <= z) {
		b_s = b_s - (2 * (D - Db) * (b_s - a_s)) / (b_s - a_s + d_f - c_f)
		c_f = c_f + (2 * (D - Db) * (d_f - c_f)) / (b_s - a_s + d_f - c_f)
	}
	return [a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f]
}
export function getXResourcesMin(paramsResources: paramsWithResources) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r, resources } = paramsResources
	let w = a_f - a_s
	let z = d_f - d_s
	let Dn = (d_f - c_s + a_f - d_s) / 2
	let D =
		lamda_l * ((d_s - b_s) / 2 + (c_s - a_s) / 2) +
		lamda_r * ((c_f - a_f) / 2 + (d_f - b_f) / 2) +
		((a_f - d_s) / 2 + (d_f - c_s) / 2)
	if (a_f >= d_s) {
		if (w <= D && D < Dn) {
			c_s = c_s + (2 * (Dn - D) * (d_s - c_s)) / (d_s - c_s + b_f - a_f)
			b_f = b_f - (2 * (Dn - D) * (d_f - c_f)) / (d_s - c_s + b_f - a_f)
		}
	}
	if (d_s > a_f && c_s <= b_f) {
		let alfa =
			((b_f - a_f) * (lamda_l * d_s - c_s) + (d_s - c_s) * (lamda_r * a_f - b_f)) /
			((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
		let bette =
			((b_f - lamda_r * a_f) * (lamda_l - 1) + (lamda_l * d_s - c_s) * (lamda_r - 1)) /
			((b_f - a_f) * (lamda_l - 1) + (d_s - c_s) * (lamda_r - 1))
		D =
			lamda_l * ((c_s - alfa) / 2 - (a_s + b_s) / 2) +
			lamda_r * ((d_f + c_f) / 2 - (alfa + b_f) / 2) +
			bette * ((b_f - c_s) / 2)
		a_f = alfa
		d_s = alfa
		if (w <= D && D < Dn) {
			let bette_ =
				(Math.sqrt(resources * resources * D * D + 2 * (d_s - a_f) * resources * D) -
					resources * D) /
				(d_s - a_f)
			let teta = (1 - bette) / (1 - bette_)
			c_s = teta * c_s + (1 - teta) * d_s
			b_f = teta * b_f + (1 - teta) * a_f
		}
	}
	return [a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f]
}
export function getYMax(params: paramsWithResources) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r, resources } = params
	let w = a_f - a_s
	let z = d_f - d_s
	// w = a_f - d_s
	// z = d_f - a_s
	console.log('z=', z)
	let Dn = (d_f - c_s + a_f - d_s) / 2
	let Db = (d_f - a_s + c_f - b_s) / 2
	console.log('Db=', Db)
	let lamdaMax = 1
	let lamdaMaxR = lamdaMax * resources
	if (z < Db) {
		lamdaMax = (z - Dn) / (Db - Dn)
		lamdaMaxR = lamdaMax * resources
		console.log('lamdaMax=', lamdaMax)
		if (c_s > b_f) {
			lamdaMax = z / Db
			lamdaMaxR = lamdaMax * resources
		}
	}
	if (d_s > a_f && c_s <= b_f) {
		return [0, lamdaMaxR, lamdaMaxR, resources, resources, lamdaMaxR, lamdaMaxR, 0]
	}

	return [0, lamdaMaxR, lamdaMaxR, resources, resources, lamdaMaxR, lamdaMaxR, 0]
}
export function getYMin(params: paramsWithResources) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r, resources } = params
	let w = a_f - a_s
	let z = d_f - d_s
	// w = a_f - d_s
	// z = d_f - a_s
	let Dn = (d_f - c_s + a_f - d_s) / 2
	let Db = (d_f - a_s + c_f - b_s) / 2
	let lamdaMin = 0
	let lamdaMinR = lamdaMin * resources
	let B = Math.abs((b_f - c_s) / (b_f - c_s + (d_s - a_f)))
	if (Dn < w) {
		console.log('z=', z)
		console.log('w=', w)
		lamdaMin = (w - Dn) / (Db - Dn)
		console.log('lamdaMin=', lamdaMin)
		lamdaMinR = lamdaMin * resources
		if (c_s > b_f) {
			lamdaMin = w / Db
			lamdaMinR = lamdaMin * resources
			console.log('lamdaMin=', lamdaMin)
			return [0, lamdaMinR, lamdaMinR, lamdaMinR, lamdaMinR, lamdaMinR, lamdaMinR, 0]
		}
	}
	if (d_s > a_f && c_s <= b_f) {
		// let B = (b_f - c_s) / (b_f - c_s + (d_s - a_f))
		return [0, lamdaMinR, lamdaMinR, resources * B, resources * B, lamdaMinR, lamdaMinR, 0]
	}
	if (a_f >= d_s) {
		return [0, lamdaMinR, lamdaMinR, resources, resources, lamdaMinR, lamdaMinR, 0]
	}
}

export function getYBeginEnd(params: params, i: number, keyIndex: number) {
	let { a_s, b_s, c_s, d_s, a_f, b_f, c_f, d_f, lamda_l, lamda_r } = params
	switch (keyIndex) {
		case 0:
			return (i - a_s) / (b_s - a_s)
		case 1:
			return 1
		case 2:
			return (i - c_s) / (d_s - c_s)
		case 3:
			return 0
		case 4:
			return (i - a_f) / (b_f - a_f)
		case 5:
			return 1
		case 6:
			return (i - c_f) / (d_f - c_f)
		default:
			return 0
	}
}
