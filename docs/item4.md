# 아이템 4. 구조적 타이핑에 익숙해지기

- 자바스크립트는 본질적으로 duck typing 기반
  - 객체가 어떤 타입에 부합하는 변수와 메서드를 가질 경우 객체를 해당 타입에 속하는 것으로 간주하는 방식


- 타입스크립트에서 이를 모델링하기 위해 구조적 타이핑을 사용함을 이해해야 한다.
  - 인터페이스에 할당 가능한 값이라면 타입 선언에 명시적으로 나열된 속성들을 가지고 있을 것이다.
  - 타입은 열려있다.


- 클래스 역시 구조적 타이핑 규칙을 따른다.
  - 클래스의 인스턴스가 예상과 다를 수 있다.


- 구조적 타이핑을 사용하면 Unit Test가 용이하다.

### 구조적 타이핑이 유리한 상황

- 데이터베이스에 쿼리하고 결과를 처리하는 함수의 상황

```typescript
interface Author {
    first: string;
    last: string;
}

function getAuthors(database: MariaDB): Author[] {
    const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
    return authorRows.map(row => ({first: row[0], last: row[1]}));
}
```

- 구조적 타이핑 활용

```typescript
interface DB {
    runQuery: (sql: string) => any[];
}

function getAuthors(database: DB): Author[] {
    const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
    return authorRows.map(row => ({first: row[0], last: row[1]}));
}
```