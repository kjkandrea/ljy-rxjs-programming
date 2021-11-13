import { interval, skipWhile, take } from "rxjs";

interval(100).pipe(
	skipWhile(n => n < 6),
	take(2)
).subscribe(console.log)