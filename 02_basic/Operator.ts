import { interval, filter } from "rxjs";

let count = 1 // 약수
setInterval(
	() => count = count + 1,
	500
)

interval(700).pipe(
	filter(v => v % 2 === 0)
).subscribe(console.log)