import { defer } from 'rxjs'

type Friend = '🤓'|'🤠'|'🥺'

defer<Friend[]>(() => ['🤓','🤠', '🥺']).subscribe({
	next: v => console.log(v)
})

function* forLoopGen (start: number, end: number, increment: number) {
	for(let x = start; x <= end; x += increment) {
		yield x;
	}
}

defer(() => forLoopGen(1, 15, 2)).subscribe({
	next: console.log
})

defer(() =>'NHN').subscribe({
	next: console.log
})

defer(() => new Promise(resolve =>
	setTimeout(() => resolve('promise1 resolve'), 200)
)).subscribe({
	next: console.log
})

defer(() => new Promise((_, reject) =>
	setTimeout(() => reject('promise2 reject'), 200)
)).subscribe({
	error: console.error
})