import { timer } from 'rxjs'

timer(3000, 1000).subscribe({
	next: console.log
}) // 어따쓰는고

