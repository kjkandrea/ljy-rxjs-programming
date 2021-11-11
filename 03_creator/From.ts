import { from } from 'rxjs'

type Friend = '🤓'|'🤠'|'🥺'

from<Friend[]>(['🤓','🤠', '🥺']).subscribe({
	next: v => console.log(v)
})