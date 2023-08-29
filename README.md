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

