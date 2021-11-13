import { from, timer, map, mergeMap } from "rxjs";

const requests = [
	timer(200).pipe(map(v => ({ data: 1 }))),
	timer(400).pipe(map(v => ({ data: 2 }))),
	timer(300).pipe(map(v => ({ data: 3 }))),
]

// from(requests).subscribe(x => x.subscribe(console.log)) // bad

// from(requests).pipe(mergeMap(v => v)).subscribe(console.log) // good?

const getPromise = (wait: number, value: any) => new Promise(res => setTimeout(() => res(value), wait))

const requests2 = [
	getPromise(200, { data: 1 }),
	getPromise(400, { data: 2 }),
	getPromise(300, { data: 3 }),
	getPromise(100, { data: 4 }),
	getPromise(500, { data: 5 }),
	getPromise(600, { data: 5 }),
]

// from(requests2).pipe(mergeMap(v => v)).subscribe(console.log)

from(requests2).pipe(mergeMap(v => v, 2)).subscribe(console.log) // 겁나어렵 ㅋㅋ 여튼 2개씩 수행됨