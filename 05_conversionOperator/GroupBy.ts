import {range, groupBy, mergeMap, map} from 'rxjs'

range(1, 20).pipe(
	groupBy(
		x =>
			x % 2 !== 0,
		x => x * 3
	),
	mergeMap(
		groupOb =>
			groupOb.key === true
				? groupOb.pipe(map(v => `홀 : ${v}`))
				: groupOb.pipe(map(v => `짝 : ${v}`))
	)
).subscribe(console.log)