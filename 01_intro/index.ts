import { range } from 'rxjs'
import { filter, map, scan } from 'rxjs/operators'

range(0, 10).pipe(
  filter(x => x % 2 === 0),
  map(x => x + x),
  scan((acc, x) => acc + x, 0)
).subscribe(console.log)