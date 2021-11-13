import { range, skip, take } from 'rxjs'

range(1, 10).pipe(
	skip(3),
	take(2)
).subscribe({
	next: console.log
})