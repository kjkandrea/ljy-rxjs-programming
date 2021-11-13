import { interval, skipUntil, take } from "rxjs";

const inter = 100

interval(inter).pipe(
	skipUntil(interval(inter * 5)),
	take(2)
).subscribe({
	next: console.log
})