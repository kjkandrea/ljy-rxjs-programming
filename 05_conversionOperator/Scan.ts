import { range, scan, takeLast } from 'rxjs'

range(1, 10).pipe(
	scan((acc, cur) => {
		console.log('acc/cur', `${acc}/${cur}`)
		return acc + cur
	}, 0),
	takeLast(1)
).subscribe(console.log)
