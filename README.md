# 쑹쌤 AI·SW Education Portfolio

전주를 중심으로 학교·기관·교사를 위한 AI·SW·메이커 교육 포트폴리오 사이트입니다.

## 로컬에서 보기

`index.html` 파일을 브라우저에서 열면 됩니다.

## GitHub Pages

배포 주소: **https://tmd15023-netizen.github.io/vibe_coding-test/**

`main` 브랜치에 push하면 GitHub Actions가 `gh-pages` 브랜치에 사이트를 자동 배포합니다.

### 최초 1회 설정 (약 1분)

1. [저장소 → Settings → Pages](https://github.com/tmd15023-netizen/vibe_coding-test/settings/pages) 이동
2. **Build and deployment → Source**에서 **Deploy from a branch** 선택
3. **Branch**를 `gh-pages` / `/ (root)` 로 설정 후 **Save**
4. 1~2분 후 위 배포 주소에서 사이트 확인

> Actions 탭에서 **Deploy to GitHub Pages**가 성공(green)인지 확인한 뒤 Pages 설정을 저장하세요.

## Vercel 배포

배포 주소: **https://vibe-coding-test-sseung.vercel.app/**

GitHub 저장소를 Vercel에 연결하면 `main` 브랜치 push 시 자동 배포됩니다.

### 프로젝트 설정 (Vercel Dashboard)

1. **Root Directory:** `./` (저장소 루트)
2. **Framework Preset:** Other
3. **Build Command:** *(비워두기)*
4. **Output Directory:** `./` 또는 *(비워두기)*

### ⚠️ Overview / 로그인 화면이 뜰 때 (필수)

Vercel **배포 보호(Deployment Protection)** 가 켜져 있으면 사이트 대신 Vercel Overview·로그인 페이지가 보입니다.

1. [Vercel 프로젝트 → Settings → Deployment Protection](https://vercel.com/tmd15023-netizens-projects/vibe-coding-test-sseung/settings/deployment-protection)
2. **Production** 에서 **Vercel Authentication** → **Off**
3. **Save** 후 **Deployments** 탭에서 **Redeploy**

### 링크 미리보기 (카카오톡 등)

`index.html`에 Open Graph 메타 태그가 포함되어 있어, 배포 후 공유 시 쑹쌤 사이트 정보가 표시됩니다.

## 블로그·문의 링크 수정

`js/blog-links.js` 파일에서 네이버 블로그, 오픈채팅, 톡톡 URL을 수정할 수 있습니다.
