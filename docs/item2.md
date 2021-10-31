# 아이템 2. 타입스크립트 설정 이해하기
- 타입스크립트 컴파일러는 매우 많은 설정을 가지고 있다.
- 커맨드 라인을 사용하거나 tsconfig.json 설정 파일을 통해서 설정할 수 있다.

## 타입스크립트 설정
- 어디서 소스 파일을 찾을지 설정
- 어떤 종류의 출력을 생성할지 제어
- 언어 자체의 핵심 요소 설정

### noImplicitAny
- 변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어한다.
- 암시적으로 any를 사용할 수 없도록 오류로 표시한다.
- 명시적으로 any를 선언하거나 더 분명한 타입을 사용하면 해결된다.
- **타입 정보를 가질 때 가장 효과적이기 때문에, 되도록 noImplicitAny를 설정하여 코드를 작성하자**
- 이 설정을 해제할 때는 자바스크립트 코드를 타입스크립트로 전환할 때나 필요한 거다.

### strictNullChecks
- null과 undefined가 모든 타입에서 허용되는지 확인하는 설정이다.
- null을 허용하지 않으려면 그 값이 어디서부터 왔는지 찾아야 하고, null을 체크하는 코드나 assertion을 추가해야 한다.
- null과 undefined 관련 오류를 잡는 데에 많은 도움이 되지만 코드 작성을 어렵게 한다. (난이도가 있다.)