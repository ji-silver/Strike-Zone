# Strike-Zone

### <a href="http://strikezone.jisilver.shop/">🖥️ Website</a>
<img src="https://github.com/ji-silver/Strike-Zone/assets/59919953/7182d4f4-4933-42ef-821c-249369c0994e">

## 🗒️ 프로젝트 기획
**야구를 관람하는 것뿐만 아니라, 그날의 야구 기록을 작성하고 야구장에서의 경험을 기록할 수 있는 웹 서비스** <br />
예전부터 야구를 즐기며 경기 결과와 함께 느낀 감정을 다이어리에 기록하는 것이 취미였고, 이러한 취미와 열정에서 출발하여 웹 사이트를 개발하게 되었습니다.<br />
사용자들이 자신의 야구 관람 이야기를 더욱 쉽고 편리하게 기록하고 공유할 수 있는 플랫폼을 제공하고자 합니다.

- 캘린더: 양 팀 점수, 라인업(포지션), 승리투수, 홀드, 세이브, MVP, 코멘트 작성 및 확인
- 직관 기록: 야구장 직관을 다녀왔다면 직관 다이어리 작성하기
- 직관 승률: 직관 기록 작성할 때 이긴날 체크 시 직관 승률 계산하기

## 📅 개발 기간
2023년 7월 29일 ~ 8월 13일 (16일)

## 🛠 Skils
****Front-End**** <br />
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"/>
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

****Back-End**** <br />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>

## 시작 가이드
### Front-End
```javascript
cd client
npm install
npm start
```
테스트:<br/>
`email: admin@test.com`<br/>
`pw: test1234`

### Back-End
root .env 환경변수 설정
```ini
MONGODB_URL = mongoDB 주소
SECRET_KEY = test
```

```javascript
cd api
npm install
npm start
```

## 📌 주요 기능
### 1. 메인 페이지

|캘린더|기록 모달|
|------|------|
|<img src="https://github.com/ji-silver/Player/assets/59919953/e5e7ae58-1a4b-4b96-b375-ad5e1bd032ec" width="400" height="auto"/>|<img src="https://github.com/ji-silver/Player/assets/59919953/83dbd54a-237d-4acd-b40b-b7e4567d086a" width="400" height="auto"/>|

- FullCalendar 라이브러리를 커스텀 하여 기록했던 야구 일정을 한눈에 볼 수 있으며, 각 날짜에는 팀 로고, 점수, 승부, 장소를 표시합니다.
- 사용자는 캘린더에서 기록이 있는 날짜를 클릭하면 작성했던 기록을 보여주고, 기록이 없는 날짜를 클릭하면 기록을 작성할 수 있는 모달창을 띄웁니다.
- 경기 기록 작성은 사용자만 가능하며 비로그인 시 로그인을 유도하고, 기록 작성 시 회원가입 때 선택했던 선호팀을 ‘우리 팀’으로 기본 설정합니다.
- 기록을 작성하거나 작성 후 axios를 사용하여 백엔드 API 통신하고 데이터를 처리합니다.
- Redux-Toolkit을 사용해서 기록 정보 전역 상태 관리하고 기록을 추가하거나 삭제할 때마다 상태를 업데이트하여 캘린더에 반영합니다.


### 2. 직관 다이어리

|리스트|글 작성 확인|
|------|------|
|<img src="https://github.com/ji-silver/Player/assets/59919953/575772fb-746b-4e35-8514-f346db5dcc8a" width="400" height="auto"/>|<img src="https://github.com/ji-silver/Player/assets/59919953/eba22ccf-7729-4737-9947-ab08c488856b" width="400" height="auto"/>|

- Redux-Toolkit을 사용해서 다이어리 기록을 전역 상태 관리하였고 이를 통해 캘린더에도 직관 간 날을 표시하도록 하였습니다.
- axios를 사용하여 백엔드 API를 호출하고, custom hook를 이용하여 데이터와 로딩 상태를 효과적으로 관리하였습니다.
- 글 작성 시 cloudinary 클라우드 API를 이용해서 이미지 저장하고 URL을 받아와서 DB에 저장하는 기능을 구현하였습니다.
- 이미지를 cloudinary API에 저장할 때 업로드 속도가 느렸던 문제를 조건부 렌더링으로 로딩 화면을 삽입하여 사용자가 등록이 진행 중임을 알 수 있도록 구현하였습니다.
- 작성한 다이어리를 ‘직관일’을 기준으로 최신 순서대로 확인할 수 있도록 다이어리 리스트 정렬하는 코드를 작성했습니다.

### 3. 직관 승률

|직관 승률|모바일|
|------|------|
|<img src="https://github.com/ji-silver/Player/assets/59919953/6722e789-e1d7-4f87-8ed0-cf2f003a2034" width="600" height="auto"/>|<img src="https://github.com/ji-silver/Player/assets/59919953/8a2ca736-9a6a-4825-9bc9-e0e2adab23bc" width="auto" height="300"/>|

- axios를 사용하여 백엔드 API를 호출하고, custom hook를 이용하여 데이터와 로딩 상태를 효과적으로 관리하였습니다.
- 직관 기록 작성 후 올해 직관 날짜를 기준으로 올해의 데이터만 필터링하여 정렬하고 이를 통해 올해 방문 횟수와 승률을 계산하였습니다.
