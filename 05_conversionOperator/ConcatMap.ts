import {from, concatMap} from "rxjs";

const getPromise = (wait: number, value: any) => new Promise(res => setTimeout(() => res(value), wait))

const requests2 = [
	getPromise(200, { data: 1 }),
	getPromise(400, { data: 2 }),
	getPromise(300, { data: 3 }),
	getPromise(100, { data: 4 }),
	getPromise(500, { data: 5 }),
	getPromise(600, { data: 6 }),
]

from(requests2).pipe(concatMap(v => v)).subscribe(console.log) // 이거 그냥 MergeMap(v => v, 1) 이랑 똑같음. 1은 concurrent(동시성)