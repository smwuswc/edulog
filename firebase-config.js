// ============================================================
//  온라인 SW강좌 실적관리 시스템(edulog) — 사이트 설정 파일
//  edutalk과 같은 Firebase 프로젝트(SWCU)를 사용합니다.
//
//  · firebase { ... } : Firebase 웹 앱 설정값 (edutalk과 동일)
//  · edutalkUrl       : 소통관(edutalk) 사이트 주소
//
//  ※ 이 값들은 비밀번호가 아니라 "사이트 주소표" 같은 공개 정보입니다.
//    실제 보안은 Firebase의 보안 규칙(firestore.rules)과 관리자 로그인이 담당합니다.
// ============================================================
window.SITE_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDYSCK-RzbrXMLTVlxsQVKuMsA7wgwy0_Y",
    authDomain: "swcu-ebf98.firebaseapp.com",
    projectId: "swcu-ebf98",
    storageBucket: "swcu-ebf98.firebasestorage.app",
    messagingSenderId: "1049178282163",
    appId: "1:1049178282163:web:7ceb2342e6dbc1fbd8b8c6"
  },
  // 소통관(edutalk) 주소: 게시글 현황의 "소통관에서 확인" 링크에 사용됩니다.
  edutalkUrl: "https://smwuswc.github.io/edutalk/"
};
