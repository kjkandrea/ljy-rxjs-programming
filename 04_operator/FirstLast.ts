import { range, first, last, map  } from 'rxjs'


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

range(1, 10).pipe(
	map(n => n * 2),
	first(n => n >= 5),
).subscribe({
	next: console.log
})