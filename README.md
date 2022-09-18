<div align="center">

# TIL-Log Web V2

Blog platform for developers, TILog

•
[Project Convention](https://github.com/TIL-Log-lab/Tilog-web-node-v2/discussions/3) •

# 프로젝트 설명

자신의 깃허브 통계와 블로그글을 작성하고 플렛폼 사용자와 지식을 공유하는 서비스입니다.

# 기술 스택

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=Tailwind%20CSS&logoColor=white"/>
<img src="https://img.shields.io/badge/React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white"/>

# 구조

<img src="https://static.tilog.link/Web%20App%20Reference%20Architecture.png"/>

# 프로젝트 시작

## 레포지토리 복사

```
    git clone https://github.com/MINJE-98/Tilog-web-node-v2.git
```

## 의존 패키지 설치

```
    cd Tilog-web-node-v2
    yarn install
```

## 환경 설정

```
    NEXT_PUBLIC_TILOG_API=
    NEXT_PUBLIC_TILOG_GITHUB_STATS_API=
    NEXT_PUBLIC_TILOG_AUTH=
```

## 프로젝트 시작

```
    yarn dev
```

## 프로젝트 빌드

```
    yarn build
```

# 구현

## 피그마

> 이미지를 누르면 TILOG 피그마로 이동합니다.

[![Figma](https://static.tilog.link/tilog-figma.png)](https://www.figma.com/file/JDOSQu4FYvDXD2iQS9AsKF/TILOG)

## 페이지별 범위

### [Home](https://www.tilog.link/)

틸로그의 메인 페이지입니다.

### [Popular](https://www.tilog.link/popular)

### [Latest](https://www.tilog.link/latest)

### [Blog](https://www.tilog.link/blog/MINJE-98)

### [Post](https://www.tilog.link/post/1)

### [Search](https://www.tilog.link/search/?category=Typescript)

### [Settings](https://www.tilog.link/settings)

### Writer

### Editor

# SEO

[Open Graph Protocol](https://ogp.me/) 스펙 적용

[TILog-Og-Image-Service](https://www.github.com/MINJE-98/TILog-Og-Image-Service)를 사용하여 페이지별 Open Graph Protocol Image를 적용하였습니다.

## Preview

> 이미지를 누르면 facebook 공유 디버거로 이동합니다.

[![Home](https://static.tilog.link/home.png)](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.tilog.link)
[![Popular](https://static.tilog.link/popular.png)](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.tilog.link%2Fpopular)
[![Latest](https://static.tilog.link/latest.png)](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.tilog.link%2Flatest)
[![search](https://static.tilog.link/search.png)](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.tilog.link%2Fsearch%3Fcategory%3DTypescript)

</div>
