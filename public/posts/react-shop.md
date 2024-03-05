- **프로젝트 기간**: 2023.10.09 - 2023.10.16

- **GitHub**: [https://github.com/dltmdgkr/ReactShop](https://github.com/dltmdgkr/ReactShop)

- **배포 링크**: [https://react-shop-six-ivory.vercel.app](https://react-shop-six-ivory.vercel.app)

## **프로젝트 소개**

- Vite + React + Typescript를 사용한 e-commercial 웹 사이트를 개발했습니다.
- Fake Store API를 이용하여 상품정보를 JSON파일로 받아왔습니다.
- Recoil을 상태관리 라이브러리로 사용하여 장바구니, 통합검색 등을 관리했습니다.
- 테마 변경은 React 내부에서 사용되는 ContextAPI를 활용했습니다.
- tailwindcss를 사용해 디자인과 사용자 UI를 구현했습니다.

## Project

### 🛠 기술 스택

---

### Frontend

- React
- Typescript
- Recoil
- React-Query
- React-router-dom
- Axios
- Vercel
- Vite

**_Styles_**

- tailwindcss

## 🔗 개발 주요 기능

---

### 1. 메인페이지

- Carousel을 이용한 Slider화면 구현
- 테마 변경 기능 (야간 모드)
- 상품 검색 및 키워드 자동 완성

### 2. 상품 목록 페이지

- 카테고리 별 상품 정렬 및 필터링

### 3. 상품 상세 페이지

- 장바구니 추가 기능
- 장바구니로 이동

### 4. 장바구니 페이지

- 상품 개수 변경 및 삭제
- 모두 구매하기

## 배운점 및 개선사항

### React-Query 사용

- 카테고리 별 데이터 가져오는 행위를 반복하지 않고 react-query를 활용해보았다.
- react-query의 캐시 메커니즘을 통해 이전에 가져온 데이터를 사용하여 불필요한 API 요청을 줄일 수 있다.
- 캐시된 데이터가 이미 존재하는 경우에는 해당 데이터를 즉시 반환하고, 필요한 경우에만 서버에 요청을 보내어 최신 데이터를 가져온다.
- react-query를 사용하면 데이터를 효율적으로 관리하고, 불필요한 네트워크 요청을 줄여주게 된다.

react-query 활용 전, 모든 화면에 다시 들어가도 loading화면이 뜨고 느리고 답답하고 ..
![before_react_query.gif](/images/before_react_query.gif)

react-query 활용 후, 이미 들어간 화면엔 loading을 다시 보여주지 않는다. 데이터를 캐싱하여 유저에게 훨씬 빠르게 화면을 보여준다.
![after_react_query.gif](/images/after_react_query.gif)

---

### Recoil selector를 이용한 비동기 호출과 api 캐싱

- 일반적으로 get 요청으로 데이터를 가져오는 경우 커스텀 훅을 사용하여 많이들 데이터를 처리하곤 한다.
- Custom Hook과 함께 get요청으로 모든 상품 페이지에 들어갈 때 마다 상품 데이터를 가져오는 api를 반복해서 호출했다.
  ![loading.gif](/images/loading.gif)
- 데이터를 가져오는데 로딩시간이 길어 화면을 렌더링하는데 시간이 오래걸리고 사용자 경험 측면에서 많이 아쉽다고 느꼈다.
- 기능은 잘 작동하긴 하지만 성능면에서 많이 떨어진다고 느꼈다.
- 네트워크 창을 통해 useGetProductDetail 에서 시간이 오래걸리는 것을 확인했다. 상품 페이지에 들어갈 때 마다 무분별하게 api가 호출 된다. 정확하게 어떤 이유로 저 부분이 문제가 될만한 요소가 뭘까
- 데이터를 가져오는 행위를 반복하지 않고 recoil의 selector 기능을 사용하여 api를 불러오지 않도록 구현하고자 했다.
- selector 는 기본적으로 캐싱 기능이 있어 이미 들어왔던 적이 있는 값을 기억해서, 같은 응답을 보내는 api 호출은 추가적으로 요청하지 않는다. 따라서 성능상 유리하다.

셀렉터 생성
![selector](/images/selector.png)

selector get에서 비동기적으로 api를 호출해서 받아온 상품 데이터를 기반으로 고유의 id값을 이용해 각 상품 데이터를 필터링만 해준다.

![ProductDetail](/images/ProductDetail.png)

![no-loading.gif](/images/no-loading.gif)

- 무분별한 api 호출을 줄이고 데이터를 캐싱하는 것을 확인할 수 있다.
- selector는 새로운 쿼리를 재평가하고 새로운 유니크한 인풋이 있을 때만 실행시키도록 캐시된다.
