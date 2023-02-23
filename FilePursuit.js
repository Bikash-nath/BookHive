const axios = require('axios')

const options = {
	method: 'GET',
	url: 'https://filepursuit.p.rapidapi.com/',
	params: { q: 'it' },
	headers: {
		'X-RapidAPI-Key': 'c9c6324243msh3b8c102353f841bp1b91c0jsn537cbfdea831',
		'X-RapidAPI-Host': 'filepursuit.p.rapidapi.com',
	},
}

axios
	.request(options)
	.then(function (response) {
		console.log(response.data)
	})
	.catch(function (error) {
		console.error(error)
	})
