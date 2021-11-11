import { interval } from "rxjs";

const inter = interval(250).subscribe({
	next: v => {
		console.log(v)
		if (v >= 100) inter.unsubscribe()
	}
})