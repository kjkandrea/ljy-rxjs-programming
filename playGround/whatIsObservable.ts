import { from, Observable } from "rxjs";



console.log(
'Observable Instance is : ', from([1,2,3,4,5,6,7,8]),
'\n',
'Observable Instance typeof : ', typeof from([1,2,3,4,5,6,7,8]),
'\n',
'Observable Instance instanceof Observable  : ', from([1,2,3,4,5,6,7,8]) instanceof Observable,
'\n',
'Observable Instance instanceof Object : ', from([1,2,3,4,5,6,7,8]) instanceof Object,
)