const data = require("../../data/data.json").data;
const html = document.querySelector("html");
const target = "_blank";

function test() {
	const array = data;
	for (const arr of array) {
		window.open(arr, target);
		console.error(`open: ` + arr);
	}

	html.style.backgroundColor = "#000";
}

test();
