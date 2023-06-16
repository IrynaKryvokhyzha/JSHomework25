async function getDefinition() {
	let response = await fetch('https://dog.ceo/api/breeds/image/random')
	if(response.ok){
		const data = await response.json()
		container.innerHTML = `<img src="${data.message}" >`
	}
}
getDefinition()