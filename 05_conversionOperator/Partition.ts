import { range, partition, toArray } from "rxjs";


const [odd, even] =  partition(range(1, 10 ), n => n % 2 === 0)

odd.pipe(toArray()).subscribe(console.log)

even.pipe(toArray()).subscribe(console.log)