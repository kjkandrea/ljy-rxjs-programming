import { range, take, takeWhile } from "rxjs";

range(1, 100).pipe(
	take(50),
	takeWhile(n => n % 7 !== 0)
).subscribe({
	next: console.log
})