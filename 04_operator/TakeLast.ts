import { range, takeLast } from 'rxjs'

range(1, 10).pipe(
	takeLast(4)
).subscribe({
	next: console.log
})

