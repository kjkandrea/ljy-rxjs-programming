import { fromEvent, debounceTime } from "rxjs";

const inputEl = document.getElementById('debounce-input') as HTMLInputElement;
const inputEvent= fromEvent(inputEl, 'input');

const printEl = document.getElementById('print') as HTMLElement;
const print = (content: string) => printEl.innerHTML = content

inputEvent.pipe(
	debounceTime(250)
).subscribe({
 next: e => {
 	console.log('event')
 	const { value } = e.target as HTMLInputElement
	print(value)
 }
});