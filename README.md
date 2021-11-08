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