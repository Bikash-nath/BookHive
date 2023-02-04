import path from 'path'
import fs from 'fs'

export function getBooks() {
	const booksFile = path.join(process.cwd(), 'data', 'booksData.json')
	const jsonData = fs.readFileSync(booksFile, 'utf8')
	return JSON.parse(jsonData)
}

export function getAuthors() {
	const authorsFile = path.join(process.cwd(), 'data', 'authorsData.json')
	const authorsData = fs.readFileSync(authorsFile, 'utf8')
	return JSON.parse(authorsData)
}
