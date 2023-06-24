//your JS code here. If required.
function generatePromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hello, world!");
		}, 1000)
	})
}

let prom = generatePromise();
prom.then((data) => {
	const div = document.getElemenetById("output");
	div.innerText = data;
})
