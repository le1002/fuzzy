import { writable } from 'svelte/store'
export const params = writable(null)
export const paramsResources = writable(null)
export const grafStore = writable(null)
export const yProbability = writable([])
export const timeBeginEnd = writable([])
