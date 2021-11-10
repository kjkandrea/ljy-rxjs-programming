import { range, map, filter } from 'rxjs'

range(1, 10).pipe(
	filter(n => n % 2 !== 0),
	map(n => n * n)
).subscribe(console.log)