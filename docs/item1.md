# 아이템 1. 타입스크립트와 자바스크립트의 관계 이해하기
- TypeScript는 문법적으로 JavaScript의 상위 집합이다.
- 모든 자바스크립트 프로그램은 이미 타입스크립트 프로그램이다.
- 타입스크립트는 자바스크립트 런타임 동작을 모델링하는 타입 시스템을 가지고 있기 때문에 런타임 오류를 발생시키는 코드를 찾아내려고 한다.
- 하지만 여전히 타입 체커를 통과하면서도 런타임 오류를 발생시키는 코드는 존재할 수 있다. (자바도 그러하니까)
- 타입스크립트 타입 시스템은 전반적으로 자바스크립트 동작을 모델링한다.

### 코드에서 어떻게 다른지

```javascript
let city = 'seoul city';
console.log(city.toUppercase()); // 오류 발생 코드
```

- 그리고 어떻게 오류가 발생하냐면...

```text
TypeError: city.toUppercase is not a function
```

- 근데 TypeScript에서는 타입 체커가 문제점을 찾아낸다.

```typescript
let city = 'seoul city';
console.log(city.toUppercase());
// 아래와 같은 안내 메시지를 보내주면서 IDE에서 오류로 표시한다.
// TS2551: Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
```

- 그리고 타입 체커는 추가적인 타입 구문 없이도 오류를 찾아낸다.

```typescript
const fruits = [
    {name: 'apple', color: 'red'},
    {name: 'banana', color: 'yellow'},
    {name: 'grapes', color: 'green'}
];
for (const fruit of fruits) {
    console.log(fruit.colar);
}
// 아래와 같은 안내 메시지를 보내주면서 IDE에서 오류로 표시한다.
// TS2551: Property 'colar' does not exist on type '{ name: string; color: string; }'. Did you mean 'color'?
```

- 하지만 TypeScript는 어떤 단어가 맞춤법에 맞는지까지는 모른다.
- 따라서 명시적으로 데이터를 선언하여 의도를 분명하게 하는 것이 좋다.

```typescript
interface Fruit {
    name: string;
    color: string;
}
const fruits: Fruit[] = [
    {name: 'apple', colar: 'red'},
    {name: 'banana', colar: 'yellow'},
    {name: 'grapes', colar: 'green'},
    // TS2322: Type '{ name: string; colar: string; }' is not assignable to type 'Fruit'.
    // Object literal may only specify known properties,
    // but 'colar' does not exist in type 'Fruit'. Did you mean to write 'color'?
];
for (const fruit of fruits) {
    console.log(fruit.color)
}
```

### 아직도 자바스크립트와의 관계가 이상하게 느껴진다면?
![그림](https://github.com/boring-km/effective-typescript/blob/master/img/item1-2.png?raw=true)
- 모든 자바스크립트는 타입스크립트이지만, 일부 자바스크립트(그리고 타입스크립트)만이 타입 체크를 통과한다.
