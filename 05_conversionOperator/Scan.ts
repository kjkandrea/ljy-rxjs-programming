import { range, scan } from 'rxjs'

range(1, 10).pipe(
	scan((acc, cur) => {
		console.log('acc/cur', `${acc}/${cur}`)
		return acc + cur
	}, 0)
).subscribe(console.log)