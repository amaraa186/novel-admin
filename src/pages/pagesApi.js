import {
	request
} from '../utils/api'

export async function fetchCategories() {
	// const token = localStorage.getItem('accessToken')
	return await request().get('category')
}