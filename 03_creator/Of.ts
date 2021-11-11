import { of } from 'rxjs'

type Friend = '🤓'|'🤠'|'🥺'

of<Friend[]>('🤓','🤠', '🥺').subscribe({
	next: v => console.log(v)
})