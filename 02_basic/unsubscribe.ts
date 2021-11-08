import { interval, timer } from "rxjs";

const observable = interval(200);

const subscription = observable.subscribe(console.log)

timer(1500).subscribe(() => subscription.unsubscribe())

