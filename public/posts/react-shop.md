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

### 🔗 개발 주요 기능

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

- 카테고리 별 데이터 가져오는 행위를 반복하지 않고 react-query를 활용해보았다.
- react-query의 캐시 메커니즘을 통해 이전에 가져온 데이터를 사용하여 불필요한 API 요청을 줄일 수 있다.
- 캐시된 데이터가 이미 존재하는 경우에는 해당 데이터를 즉시 반환하고, 필요한 경우에만 서버에 요청을 보내어 최신 데이터를 가져온다.
- react-query를 사용하면 데이터를 효율적으로 관리하고, 불필요한 네트워크 요청을 줄여주게 된다.

react-query 활용 전, 모든 화면에 다시 들어가도 loading화면이 뜨고 느리고 답답하고 ..
![before_react_query.gif](/images/before_react_query.gif)

react-query 활용 후, 이미 들어간 화면엔 loading을 다시 보여주지 않는다. 데이터를 캐싱하여 유저에게 훨씬 빠르게 화면을 보여준다.
![after_react_query.gif](/images/after_react_query.gif)
