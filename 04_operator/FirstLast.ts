import { range, first, last  } from 'rxjs'


range(1, 10).pipe(
	first(),
).subscribe({
	next: console.log
})

range(1, 10).pipe(
	last(),
).subscribe({
	next: console.log
})