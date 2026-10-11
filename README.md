# 개발자 김고성의 포트폴리오
<img width="1536" height="1024" alt="투명 배경의 미니멀 KKS 로고" src="https://github.com/user-attachments/assets/b967e0f2-1536-4868-99fa-d99dd5b71177" />
개발자 김고성의 개인 포트폴리오 사이트입니다. 현재 개발 중이고 지속적으로 업데이트 후 배포될 예정입니다.
배포 주소: (배포 후 작성 예정)

## 목적

프로젝트와 작업물을 한곳에 정리하고, 직접 설계하고 만든 결과물로 저에 대한 소개를 위해 만들고 있습니다.

## 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| Framework | Next.js (App Router 기반) |
| Language | TypeScript |
| Styling | CSS Modules |
| Deploy | Vercel (예정) |

## 페이지 구성

- **Home**: 소개, 프로젝트 목록, 연락처
- **Project 상세**: 프로젝트별 설명 페이지 (예정)

## 현재 구현된 것

- 헤더 (스크롤 반응, 앵커 네비게이션)
- 메인 페이지 기본 레이아웃
- 프로젝트 카드 목록

## 추가 예정

- 프로젝트 상세 페이지
- 다크모드 대응
- 반응형 레이아웃 개선(모바일 환경 개선)
- 페이지 전환 및 스크롤 애니메이션
- SEO 메타데이터 설정
- Vercel 배포

## 폴더 구조

```
app/
├── components/     # 공통 컴포넌트 (Header 등)
├── layout.tsx      # 루트 레이아웃
├── page.tsx        # 메인 페이지
├── page.module.css
└── globals.css
public/             # 정적 파일
```

## 실행 방법

Node.js Version 18 이상이 필요합니다.

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

프로덕션 빌드는 아래 순서로 실행합니다.

```bash
npm run build
npm start
```

## 연락처(Contact)

- Email: iamgosung@gmail.com
- GitHub: kimkosung(kando)
