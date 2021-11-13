# ljy-rxjs-programming
RxJS 프로그래밍 (이종욱, 안재하 저) 코드필기

## 중점 목표

다음과 같은 개념을 이해한다.

* [ ] Reactive Programming 이란 무엇인가?
* [ ] Reactive Programming 가 Functional Programming 패러다임은 어떠한 연관성을 갖는가?
* [ ] Rxjs 라이브러리에서 제공하는 비동기 제어 패턴은 유용한가? 
* [ ] api call, event listener 등을 Rxjs 로 제어함에 있어서 어떠한 유용성이 있는가? 

## Reactive Programming?

### 데이터 스트림
  
🙁

### 변화의 전달

'변화의 전달'은 데이터 스트림 안에서 어떤 값이 변했을 때의 전달이 바로 이루어지는 것을 뜻한다.

예를 들어 명령형(Imperative) 프로그래밍 에서는 `z = x + y` 를 실행한 후 x의 값이 바뀐다면 (`x = 2`) x만 바뀔 뿐 z 값이 바뀌지 않는다.

**하지만 리액티브 프로그래밍은 a의 값이 바뀌었을때 바로 c값도 변한다.** 
즉, 리액티브 프로그래밍은 정적/동적인 데이터 흐름의 변화에 곧바로 반응하는 프로그램을 만드는것이라 할 수 있겠다.

> "엑셀과 같은 스프레드 시트처럼"

### 리액티브 선언문

https://www.reactivemanifesto.org/ko  

## 생성 함수

### `from`

from 은 까다롭지않은 아이라 옵저버블로 변환할 수 있을 만한 객체들은 모두 옵저버블로 반환해준다!

1. 옵저버블 (Observable)
2. 배열 (Array)
3. 프로미스 (Promise)
4. 이터러블 (Iterable)
5. 문자열 (string)
6. 배열 유사 타입 (ArrayLike)

ArrayLike 는? 숫자 타입의 length 속성있으면 충족

### `fromEvent`

fromEvent 는 브라우저 이벤트를 옵저버블로 바꿀때 사용한다.

고 하는데 직접해보기 귀찮아서 패스

http://jsfiddle.net/1001monkeys/5kv4wug2/

### `defer`

subscribed 된 시점에 평가하고싶을때 사용하는 것. 프라미스 다룰 때 쓸듯?

https://stackoverflow.com/questions/38764578/rxjs-understanding-defer?answertab=active#tab-top

보통 create 함수로 생성한 옵저버블은 인자로 사용하는 함수가 구독 시점에 동작한다. 
그런데 프로미스는 객체 생성 시점에 안에 있는 함수가 실행된다는 특징이 있다.
따라서 프로미스를 사용할 때는 이런 차이를 구분해 from 및 defer 함수를 선택해야한다.

* `from` : 프로미스 안 구현이 언제 실행되는 상관없을때
* `defer` : 옵저버블을 구독하는 시점에 츠로미스를 생성하여 프로미스 안 구현 부분이 실행되어야 할때

* `from` : 이미 실행중이거나 완료한 프로미스를 옵저버블로 만들 때 적합
* `defer` : 프로미스 실행 시점(프로미스 객체 생성 시점)이 구독하는 시점 이어야 할대

### mergeMap

![1772aafebb651ac6c (1)](https://user-images.githubusercontent.com/32591477/141607239-3db9d32b-a92d-401c-bfe3-0bf30541548b.jpeg)


