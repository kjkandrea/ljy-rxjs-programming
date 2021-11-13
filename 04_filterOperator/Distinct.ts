import { from, distinct } from "rxjs";

// 이거 Set 친구임
from([3,1,2,1,2,3,3,3,4,6,5,5,5,1,2]).pipe(
	distinct()
).subscribe(console.log)

from([
	{ id: 1, name: 'JK'},
	{ id: 2, name: 'SJ'},
	{ id: 3, name: 'SJ'},
	{ id: 4, name: 'JK'},
	{ id: 5, name: 'MM'},
	{ id: 6, name: 'JK'},
]).pipe(
	distinct(member => member.name)
).subscribe(console.log)