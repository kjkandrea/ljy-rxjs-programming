import { Observable } from "rxjs";

// Observable.create 는 deprecate 됬대!!
const observable = new Observable(
	observer => {
		for (let i = 1; i < 11; i++) {
			observer.next(i)
		}

		observer.complete()
	}
)

observable.subscribe({
	next: v => console.log('next value : ', v),
	error: err => console.error(err),
	complete: () => console.log('complete')
})