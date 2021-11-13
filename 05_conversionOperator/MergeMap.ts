import { from, timer, map, mergeMap } from "rxjs";

const requests = [
	timer(200).pipe(map(v => ({ data: 1 }))),
	timer(400).pipe(map(v => ({ data: 2 }))),
	timer(300).pipe(map(v => ({ data: 3 }))),
]

// from(requests).subscribe(x => x.subscribe(console.log)) // bad

from(requests).pipe(mergeMap(v => v)).subscribe(console.log) // good?

