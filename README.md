<div align="center">

# TIL-Log Web V2

Blog platform for developers, TILog

•
[Project Convention](https://github.com/TIL-Log-lab/Tilog-web-node-v2/discussions/3) •
</div>

# 프로젝트 소개

TILog Service는 자신의 깃허브 정보를 바탕으로 자신이 사용하는 기술에 대해 블로그 글로 작성하고,  유저와 공유하는 블로그 플렛폼입니다.

# 배포 구조
![Web App Reference Architecture (1)](https://user-images.githubusercontent.com/56459078/190943694-25412902-f7c5-4baa-a92d-65e87ada442b.png)


# 기술 스택

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=Tailwind%20CSS&logoColor=white"/>
<img src="https://img.shields.io/badge/React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white"/>
 <img src="https://img.shields.io/badge/Emotion-FF4154?style=flat-square&logoColor=white" />

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
[![search](https://static.tilog.link/search.png)](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.tilog.link%2Fsearch%3Fcategory%3DTypescript)

# 프로젝트를 진행하면서 고민 했던 부분
[OpenAPI Specification로 안전하게 백엔드에게 자원 요청하기](https://tilog.link/post/18)

[컴포넌트 구조 생각해보기](https://tilog.link/editor?postId=19)

[NextJS를 다루면서 그냥 지나쳤던 문제 되짚어보기](https://tilog.link/post/27)

[우아하게 SSR하는 방법은 없을까?](https://tilog.link/post/65)
