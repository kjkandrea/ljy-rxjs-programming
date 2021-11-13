import { interval, take, takeUntil } from "rxjs";

const promiseTakeUntil = new Promise(resolve => setTimeout(() => resolve(true), 2000))

interval(100).pipe(
	take(500),
	takeUntil(promiseTakeUntil)
).subscribe({
	next: console.log
})