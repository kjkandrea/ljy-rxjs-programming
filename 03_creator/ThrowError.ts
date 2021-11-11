import { throwError } from "rxjs";

throwError(new Error('나는 에러만 낸다~~')).subscribe({
	error: console.error
})