/** 네이버 블로그 연동 설정 — URL 변경 시 이 파일만 수정하세요 */
window.BLOG = {
  id: 'qortmd1502',
  home: 'https://blog.naver.com/qortmd1502',
  search: function (query) {
    return 'https://blog.naver.com/PostSearchList.naver?blogId=' + this.id + '&SearchText=' + encodeURIComponent(query);
  },
  post: function (logNo) {
    return 'https://blog.naver.com/' + this.id + '/' + logNo;
  },
  category: function (categoryNo) {
    return 'https://blog.naver.com/PostList.naver?blogId=' + this.id + '&categoryNo=' + categoryNo;
  },

  // 문의 채널 — 링크 변경 시 이 부분만 수정하세요
  contact: {
    openChat: 'https://open.kakao.com/o/stjQrtae',
    naverTalk: 'https://talk.naver.com/w48aur',
    phone: '01048294794'
  },

  // 대표 교육 분야 — 자세히 보기
  programs: {
    ai: '224344374004',       // 초등 AI수업 후기｜인공지능 체험 수업
    arduino: '224345469547',  // 고등 아두이노 스마트팜 수업 후기
    maker: '224340795503',    // 3D펜으로 집게핀 뚝딱! 초등 수업 후기
    teacher: '224340761445'   // 에듀테크 교사 연수 후기 | 바이브코딩 웹앱 제작
  },

  // 수업 사례 — 교육후기(categoryNo=16) 실제 글
  cases: [
    {
      logNo: '224344374004',
      badge: '초등',
      title: '초등 AI수업 후기｜인공지능 체험 수업',
      desc: '초등학생 대상 인공지능 체험 수업 현장 후기',
      date: '2026.07.16',
      thumb: 'assets/cases/case-ai.jpg'
    },
    {
      logNo: '224345469547',
      badge: '고등',
      title: '고등 아두이노 스마트팜 수업 후기',
      desc: '센서·자동급수 시스템을 직접 설계·구현한 프로젝트',
      date: '2026.07.17',
      thumb: 'assets/cases/case-arduino.jpg'
    },
    {
      logNo: '224340761445',
      badge: '연수',
      title: '에듀테크 교사 연수 후기 | 바이브코딩 웹앱 제작',
      desc: '교사 연수에서 바이브코딩으로 웹앱을 제작한 현장 후기',
      date: '2026.07.11',
      thumb: 'assets/cases/case-teacher.jpg'
    },
    {
      logNo: '224312151339',
      badge: '로봇',
      title: '햄스터 로봇으로 코딩 배워요 | 초등 피지컬 코딩 수업 후기',
      desc: '햄스터 로봇으로 알고리즘 사고력을 키우는 초등 코딩 수업',
      date: '2026.06.11',
      thumb: 'assets/cases/case-robot.jpg'
    }
  ],
  casesCategory: '16',

  // 전문 콘텐츠 탭
  contents: {
    ai: [
      { tag: 'AI 교육', title: 'AI와 인간, 뭐가 다를까? 5가지 핵심 차이', date: '2026.07', url: '224359617983' },
      { tag: 'AI 교육', title: '인공신경망은 어떻게 뇌를 본떴을까?', date: '2026.07', url: '224355653878' },
      { tag: 'AI 교육', title: 'AI 활용 능력, 이제 스펙보다도 중요해졌다', date: '2026.07', url: '224344344561' }
    ],
    coding: [
      { tag: '코딩', title: '바이브코딩 뜻과 장점 | 결국 질문하는 힘', date: '2026.07', url: '224340745469' },
      { tag: '코딩', title: '스크래치 주니어 앱/PC버전 설치파일 다운로드', date: '2026.07', url: '224340742085' },
      { tag: '코딩', title: 'AI-POT 합격 공부법, 핵심은 질문력', date: '2026.07', url: '224344361343' }
    ],
    cert: [
      { tag: '자격증', title: 'AI-POT이란? 취업 준비생 필수 자격증', date: '2026.07', url: '224344355922' },
      { tag: '자격증', title: 'AI-POT 합격 공부법, 핵심은 질문력', date: '2026.07', url: '224344361343' },
      { tag: '자격증', title: 'AI 활용 능력, 이제 스펙보다도 중요해졌다', date: '2026.07', url: '224344344561' }
    ],
    teacher: [
      { tag: '교사 연수', title: '에듀테크 교사 연수 후기 | 바이브코딩 웹앱 제작', date: '2026.07', url: '224340761445' },
      { tag: '교사 연수', title: '전북 늘봄강사 연수 모집 | 전주교대 무료과정', date: '2026.07', url: '224352334505' },
      { tag: '교사 연수', title: '놀이 중심 창의·발명 탐험대 늘봄강사 연수', date: '2026.07', url: '224352353925' }
    ],
    future: [
      { tag: '미래교육', title: '인공지능 잘하는 법? 융합적 사고력이 답', date: '2026.07', url: '224355638835' },
      { tag: '미래교육', title: 'AI와 인간, 뭐가 다를까? 5가지 핵심 차이', date: '2026.07', url: '224359617983' },
      { tag: '미래교육', title: '회복탄력성이란? 카우아이섬 연구로 알아보기', date: '2026.07', url: '224358600193' }
    ]
  }
};
