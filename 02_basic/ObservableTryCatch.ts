import { Observable } from "rxjs";

const observable =  new Observable(observer => {
	try {
		observer.next(1)
		observer.next(2)
		throw("throw error test")
	} catch (err) {
		observer.error(err)
	} finally {
		observer.complete()
	}
})

observable.subscribe(
	item => console.log(item),
	err => console.error('error: ' + err),
	() => console.log('complete')

)