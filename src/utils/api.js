import axios from 'axios'

const TIMEOUT = 100000
const BASE_URL = 'http://192.168.1.4:3006/api/'

export function request() {
	const instance = {
		baseURL: BASE_URL,
		timeout: TIMEOUT
	}

	return axios.create(instance)
}
