import { range, take } from 'rxjs'

range(1, 10).pipe(
	take(3)
).subscribe({
	next : console.log
})