import { Subject } from 'rxjs'

const subject = new Subject()

subject.subscribe({
	next: v => console.log('observerA : ' + v)
})

subject.subscribe({
	next: v => console.log('observerB : ' + v)
})

subject.next('🧟')
subject.next('🦹')