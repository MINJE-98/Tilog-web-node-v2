## React-Query QueryKey Convention

React-Query의 QueryKey가 겹치거나, 휴먼에러에 의해 의도하지 않는대로 작성되는 경우가 있다.
이를 해결하기 위해 따로 컨벤션을 작성한다.

### Key Naming

키는 **카멜케이스**로 작성해야합니다

### Key Order

키는 **반드시** 유니크한 값을 이용해야합니다.

키의 순서는 큰 도메인의 유니크한 값부터 가장 작은 도메인의 유니크한 값순으로 순서를 배치해야합니다.

만약 전부 동일한 도메인의 key값을 지정해야할 경우 optional여부에 따라 위치를 배치합니다.

### 기능당 하나의 key를 객체로 관리해야합니다!

[객체로 Key 관리](https://www.zigae.com/react-query-key/#%EA%B0%9D%EC%B2%B4%EB%A1%9C-key-%EA%B4%80%EB%A6%AC)
