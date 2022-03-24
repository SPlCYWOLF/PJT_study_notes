[TOC]



## 목표

1. Python 웹프레임워크가 어떤 조류가 있는지 알 수 있고, 특징들을 알 수 있다.
2. 각 웹프레임워크의 장단점 등을 알 수 있다.
3. 각 웹프레임워크들을 비교함으로서 어떤 웹프레임워크을 사용해야 할지 알 수 있다.



## Django

:white_check_mark: 효율적이고 파워풀한 내부 패키지 기능

:white_check_mark: Model-Template-View 패턴

:white_check_mark: Django REST Framework (DRF) 로 쉽게 RESTful API 구축

:white_check_mark: 강력한 보안

:white_check_mark: 고성능 사이트 대응으로 주로 대형기능이나 테크기업에서 사용

> 개인적으로는 프론트 개발하는 사람이 백엔드 개발하는 사람이 사용하기에 좋다
> 장고 하나만으로 많은 것들을 할 수 있다.



## Flask

:white_check_mark: 마이크로 프레임워크로 경량 프레임워크

:white_check_mark: 유연함, 심플, 쉬운 확장

:white_check_mark: 쉬운 학습 및 러닝 커브 낮음

:white_check_mark: 높은 생산성

> 많은 것을 한번에 처리하기 힘들다!
> 내부 사내시스템 만들 때 적절



## FastAPI

:white_check_mark: ASGI 

:white_check_mark: Python 3.6 이상 표중

:white_check_mark: 최근 출시(2018년)

:white_check_mark: 고속의 빠른 선능 처리속도

> 비동기처리로 플라스크보다 훨씬 빠르다
> 데이터 유효성 검사에 있어서 개발자가 명시적으로 하지 않아도 된다



## 비교

|           | **Django**                                                   | **Flask**                                                    | **FastAPI**                                                  |
| :-------: | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 장점 :+1: | 대규모 트래픽 처리<br />내장된 수많은 강력한 기능<br />보안<br />장고-어드민<br />우수한 문서와, 많은 커뮤니티 | 유연함<br />지관적<br />쉬운 학습<br />통합된 테스팅 툴 지원 | 빠른 성능 처리<br />비동기 코드 지원<br />높은 생산성<br />쉬우 TDD 테스트, 예외처리, 배포 문서화 |
| 단점 :-1: | 집중화된 URL 루틴 패턴<br />내장된 ORM<br />NoSQL에 유연하지 않음<br />모놀리식 | 비동기 지원 안함<br />대용량 앱에는 적합하지 않음<br />개발자 실력에 따라 코드 품질 | 아직 베타버전?<br />교육자료 및 커뮤니터가 적음              |



|                 | Django                                     | Flask                                                   | FastAPI                                   |
| --------------- | ------------------------------------------ | ------------------------------------------------------- | ----------------------------------------- |
| 프레임워크 타입 | Full Stack Web Framework                   | WSGI framework                                          | ASGL framework                            |
| 유연성          | 내장된 다양한 기능                         | 와전한 유연성                                           | 코드 레이아웃을 제한하지 않음             |
| ORM 사용        | 내장된 ORM                                 | SQLAlchemy.PonyORM                                      | SQLAlchemy                                |
| NoSQL 사용      | (지원하지 않음)                            | Flask-PyMong                                            | Pydantic                                  |
| 공식 사이트     | [바로가기](https://www.djangoproject.com/) | [바로가기](https://flask.palletsprojects.com/en/2.0.x/) | [바로가기](https://fastapi.tiangolo.com/) |





## 프레임워크 vs 라이브러리

| 라이브러리 | 단순 활용이 가능한 도구들의 집합                             |
| ---------- | ------------------------------------------------------------ |
| 프레임워크 | 소프트웨어 특정 문제를 해결하기 위해서 상호 협력하는 클래스와 인터페이스의 집합 |



## FRONT-END LAGUAGES

- React
- Vue,js
- Bootstrap
- Vuetify
- TS
- jQuery
- AGULAR.JS
- tailwindcss



## 정리

1. 매우 빠른 성능 처리 장점으로 비동기 코드를 지원하고 쉬운 배포가 가능한 프레임워크 `FastAPI`
2. 코드에 비동기 처리 `async`가 들어가면 `FastAPI` 이다.