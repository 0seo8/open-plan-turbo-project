# 사진 조회 앱 📸

랜덤 사진을 조회하고 표시하는 모노레포 기반의 Next.js 애플리케이션입니다.

🔗 **데모:** [https://open-plan-turbo-project-web.vercel.app/](https://open-plan-turbo-project-web.vercel.app/)


## 주요 기능 ✨

- 🖼️ 랜덤 사진 조회 및 표시
- 🔄 새로고침 시에도 데이터 유지 (localStorage)
- 📱 반응형 디자인 지원 (모바일, 태블릿, PC)
- ⚡ 디바운스 처리된 API 호출 (500ms)
- 🎨 스켈레톤 UI와 로딩 애니메이션
- 🔍 자동 페이지 리다이렉션
- 🌫️ 결과 페이지 배경 블러 효과

## 기술 스택 🛠️

- **프레임워크:** Next.js 13 (App Router)
- **스타일링:** TailwindCSS
- **상태관리:** Zustand + localStorage
- **모노레포:** Turborepo + pnpm
- **컴포넌트 문서화:** Storybook
- **코드 품질:** ESLint, Prettier
- **배포:** Vercel

## 환경 설정 ⚙️

### 개발 환경

- Node.js >= 18
- pnpm 9.0.0

## 시작하기 🚀

### 설치 방법

```bash
# 저장소 클론
git clone [your-repository-url]

# 디렉토리 이동
cd [your-repository-name]

# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

### 스크립트

```bash
pnpm dev        # 개발 서버 실행
pnpm build      # 프로덕션 빌드
pnpm lint       # 린트 검사
pnpm storybook  # 스토리북 실행
```

## 프로젝트 구조 📁

```
├── apps
│   ├── web                # Next.js 웹 애플리케이션
│   │   ├── app           # App Router 페이지들
│   │   │   ├── page.tsx          # 메인 페이지 (/)
│   │   │   ├── result           # 결과 페이지 (/result)
│   │   │   └── not-found.tsx    # 404 페이지
│   │   ├── components    # 웹 전용 컴포넌트
│   │   └── store         # Zustand 스토어
│   └── storybook         # 스토리북 설정 및 스토리
├── packages
│   └── ui                # 공통 UI 컴포넌트
│       └── button        # 재사용 가능한 버튼 컴포넌트
└── package.json
```

## 주요 페이지 🎯

### 메인 페이지 (/)

- "다음" 버튼을 통한 사진 조회
- 디바운스 처리된 API 호출
- 로딩 상태 애니메이션

### 결과 페이지 (/result)

- 조회된 사진 표시 (5000x3333)
- 메타데이터 정보 (ID, 작성자, 크기 등)
- 배경 블러 효과
- 스켈레톤 로딩 UI

## 구현된 기능 ✅

### 필수사항

1. [x] 터보레포를 설치해 주세요. (패키지 매니저는 pnpm)
2. [x] 터보레포의 워크스페이스 2개의 워크스페이스를 만들어주세요. (web, storybook)
3. [x] web 워크스페이스의 작업은 첨부한 피그마를 참고해서 만들어주세요.
4. [x] 터보레포 ui 패키지에 버튼을 만들어 주세요.
5. [x] 생성한 버튼의 스토리북을 만들어주세요. (상태별)
6. [x] 생성한 버튼을 web에 import해서 사용해주세요.
7. [x] Css 작성은 자유롭게 해주셔도 됩니다. (Ex. Css module, tailwind….)
8. [x] 사진 조회 전 route : ".../", 조회 후 : "/result"
9. [x] 사진 조회 api는 "https://picsum.photos/id/0/info" 을 이용해주세요.
10. [x] 사진 조회 api 통신 후 response를 "/result" 페이지에 전달하는 방식으로 만들어주세요.
11. [x] github에 Public으로 해당 프로젝트를 올려주세요.
12. [x] web 워크스페이스를 vercel을 사용해서 배포해주세요.
13. [x] Github url과 배포 Url을 메일로 회신해주세요.

### 추가사항

**아래 사항들은 필수가 아니며 여건에 따라 진행해주세요**

1. [ ] ~~api 데이터 상태 관리는 tanstack-query를 사용해주세요.~~
2. [x] 사진 조회 데이터는 전역상태 라이브러리를 사용해서 관리해주세요. (Zustand 요망)
3. [x] 새로 고침 시에도 데이터가 유지되게 해주세요.
4. [x] 사진 조회 버튼 클릭 액션에 디바운스 혹은 스로틀링을 걸어주세요.
5. [x] 버튼 디바운스/ 스로틀링 시 로딩 애니메이션을 넣어주세요. (애니메이션 방식은 자유. Ex. Lottie, css…. )
6. [x] 사진을 한번이라도 조회한 이력이 있을 시 "/result" 페이지로 자동으로 이동하게 해주세요.
7. [x] 사진 조회페이지의 정보 영역에 스켈레톤 처리를 해주세요.
8. [x] 사진을 조회한 이력없이 "/result"로 이동하는 경우, 1초 뒤 메인 페이지로 이동시켜주세요.
9. [x] 사진 조회 페이지의 배경은 조회한 사진을 이용해서 만들어주세요.
10. [x] 404페이지를 만들고 존재하지 않는 route에 접근 시 노출시켜 주세요.
11. [x] Read me를 작성해주세요.
12. [x] Eslint, Prettier를 사용해서 코드관리를 해주세요.
