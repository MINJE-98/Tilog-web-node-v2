<div align="center">

# TIL-Log Web V2

Blog platform for developers, TILog

•
[Project Convention](https://github.com/TIL-Log-lab/Tilog-web-node-v2/discussions/3) •
</div>

# 프로젝트 소개

자신의 깃허브 통계와 블로그글을 작성하고 플렛폼 사용자와 지식을 공유하는 서비스입니다.

# 배포 구조
![Web App Reference Architecture (1)](https://user-images.githubusercontent.com/56459078/190943694-25412902-f7c5-4baa-a92d-65e87ada442b.png)


# 기술 스택

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=Tailwind%20CSS&logoColor=white"/>
<img src="https://img.shields.io/badge/React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white"/>

# 피그마

> 이미지를 누르면 TILOG 피그마로 이동합니다.

[![Figma](https://static.tilog.link/tilog-figma.png)](https://www.figma.com/file/JDOSQu4FYvDXD2iQS9AsKF/TILOG)

# 프로젝트 핵심 기능

## 개인 페이지
깃허브 API를 사용하여 깃허브 정보를 사용자에게 표시합니다.
TILog에서 작성한 글도 한눈에 볼 수 있고, 개인이 작성한 게시글을 카테고리별로 정렬할 수 있습니다.
> 추후 다양한 GIthub 관련 기능을 추가할 예정입니다

![image](https://user-images.githubusercontent.com/56459078/190889777-e7711379-4cba-4d03-b61b-6890b7a4ce95.png)

## 썸네일이 지정되지 않는 게시글
게시글 썸네일이 지정되지 않은 경우 postID를 seed로 특정 색상의 임시 썸네일이 발행됩니다.
Post별 각각의 OG-Image를 생성하여 반영합니다.
자세한 내용은 아래 SEO에서 다룹니다.
<div>
  
![image](https://user-images.githubusercontent.com/56459078/190891941-a82b65e1-cbd7-4a13-b944-891a768fc909.png)
![image](https://user-images.githubusercontent.com/56459078/190889961-b3526d2e-5a66-4f60-907f-2e007328ee42.png)
  
</div>

## 모바일 대응 UI
Tailwind를 사용하여 모든 페이지를 모바일에 대응하도록 컴포넌트를 구현하였습니다.

![화면 기록 2022-09-18 오후 5 05 48 mov](https://user-images.githubusercontent.com/56459078/190892452-82486924-1fab-4ae5-b55c-2369e4a469ad.gif)

## 카테고리 기준 게시글 검색
게시글의 # 테그가 붙은 카테고리를 입력하면 해당 카테고리의 글을 모아서 볼 수 있습니다.
카테고리별 OG-Image를 생성하여 반영합니다.
![image](https://user-images.githubusercontent.com/56459078/191526516-568dd8bd-6b53-43a8-8b5e-adadd6069f62.png)


### 그밖의 기본 기능

최신, 인기 게시글
게시글 작성, 수정, 삭제
게시글 댓글, 답글 | 삭제, 수정

## SEO

[Open Graph Protocol](https://ogp.me/) 스펙 적용

[TILog-Og-Image-Service](https://www.github.com/MINJE-98/TILog-Og-Image-Service)를 사용하여 페이지별 TILog서비스에 알맞는 Open Graph Protocol Image를 구현, 적용하였습니다.

### Preview

> 이미지를 누르면 facebook 공유 디버거로 이동합니다.

[![Home](https://static.tilog.link/home.png)](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.tilog.link)
[![Popular](https://static.tilog.link/popular.png)](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.tilog.link%2Fpopular)
[![Latest](https://static.tilog.link/latest.png)](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.tilog.link%2Flatest)
[![search](https://static.tilog.link/search.png)](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.tilog.link%2Fsearch%3Fcategory%3DTypescript)

# 프로젝트를 진행하면서 고민 했던 부분

### [유저 인증](https://www.github.com/MINJE-98/login-template)
<!-- ### SSR CSR? -->
### [컴포넌트 구조 고민](https://www.tilog.link/post/19)
<!-- ### 상태관리 툴 정하기 -->
### [OpenAPI로 백엔드와 통신하기](https://www.tilog.link/post/18)
<!-- ### Suspense, ErrorBoundary -->
### [getInitialProps vs  getServerSideProps](https://www.tilog.link/post/16)
<!-- ### Hydrate, Steaming이란? -->
