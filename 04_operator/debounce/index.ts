import { fromEvent, take } from "rxjs";

const inputEl = document.getElementById('debounce-input') as HTMLInputElement;
const inputKeypress = fromEvent(inputEl, 'keypress');

inputKeypress.pipe(
	take(Infinity)
).subscribe({
 next: e => {
 	const { value } = e.target as HTMLInputElement
 	console.log(value)
 }
})