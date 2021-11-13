import { from, distinct } from "rxjs";

// 이거 Set 친구임
from([3,1,2,1,2,3,3,3,4,6,5,5,5,1,2]).pipe(
	distinct()
).subscribe(console.log)