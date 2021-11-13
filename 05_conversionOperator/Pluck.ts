import { from, distinct, pluck } from "rxjs";

const users = [
	{ id: 1, name: 'JK'},
	{ id: 2, name: 'SJ'},
	{ id: 3, name: 'SJ'},
	{ id: 4, name: 'JK'},
	{ id: 5, name: 'MM'},
	{ id: 6, name: 'JK'},
]

from(users).pipe(
	distinct(user => user.name),
	pluck('name')
).subscribe(console.log)