import {from, distinct, pluck} from "rxjs";

const users = [
	{
		id: 1, name: 'JK', detail: {
			age: 30
		}
	},
	{
		id: 2, name: 'SJ', detail: {
			age: 5
		}
	},
	{
		id: 3, name: 'SJ', detail: {
			age: 20
		}
	},
	{
		id: 4, name: 'JK', detail: {
			age: 28
		}
	},
	{
		id: 5, name: 'MM', detail: {
			age: 2
		}
	},
	{
		id: 6, name: 'JK', detail: {
			age: 32
		}
	},
]

from(users).pipe(
	distinct(user => user.name),
	pluck('name')
).subscribe(console.log)

from(users).pipe(
	distinct(user => user.name),
	pluck('detail', 'age')
).subscribe(e => console.log(e))