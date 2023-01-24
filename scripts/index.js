const btn = document.querySelector(`button[data-button]`);
const div = document.querySelector(`.is-hidden`);
const span = document.getElementById(`span`);
const title = document.getElementById(`title`);
const submit = (document.getElementById(`submit`).onclick = adFunction);
const psw = 347529;
let fxh = `[FXHXYZ]`;
console.clear();

btn.addEventListener("click", () => {
	div.classList.toggle("is-hidden");
	span.textContent = psw;
});

function adFunction() {
	let input = document.getElementById(`input`);

	if (input.value === 347529) {
		console.log(`${fxh} ok`);
		div.classList.remove("is-hidden");
		title.textContent = `ok`;
	} else {
		console.error(`${fxh} {ERROR} invalid password`);
	}
}
