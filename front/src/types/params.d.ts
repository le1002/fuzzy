export type params = {
	a_s: number
	b_s: number
	c_s: number
	d_s: number
	a_f: number
	b_f: number
	c_f: number
	d_f: number
	lamda_l: number
	lamda_r: number
}
export type params3 = {
	a_s: number
	b_s: number
	b_f: number
	c_s: number
	c_f: number
	d_f: number
	lamda_l: number
	lamda_r: number
}
export interface paramsWithResources extends params {
	resources: number
}
export type yVars = (params: params, i: number, keyIndex: number) => number
export type xVars = (params: params, keyIndex: number) => number[]
