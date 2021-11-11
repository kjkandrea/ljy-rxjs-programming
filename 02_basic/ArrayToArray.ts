import {from, map, toArray} from 'rxjs';


from([1,2,3,4,5,6,7,8,9]).pipe(
	map(v => v * 2),
	toArray()
).subscribe(console.log)