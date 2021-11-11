import { of, asapScheduler } from 'rxjs'

type Friend = '🤓'|'🤠'|'🥺'|'😤'|'🤯'

console.log('plain start')
of<Friend[]>('🤓','🤠', '🥺', '😤', '🤯').subscribe({
	next: v => console.log(v)
})
console.log('plain end')

console.log('asapScheduler start')
of<Friend[]>('🤓','🤠', '🥺', '😤', '🤯', asapScheduler).subscribe({
	next: v => console.log(v)
})
console.log('asapScheduler end')