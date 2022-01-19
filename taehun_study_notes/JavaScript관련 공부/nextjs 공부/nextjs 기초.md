## why Next.js?

- SPA 개발이 FE 주된 개발 뼈대로 됨.

  대표적인 SPA 프레임워크는 Vue 와 React이고, CSR 방식으로 View를 만듦.

  하지만 SSR 보다 CSR 방식은 SEO 에 취약하다는걸 발견.

  SEO을 강화하는건 높은 마케팅 효율을 낸다.

  고로 SEO 한계를 극복하고자 Next.js 를 활용.

- next.js 는 server-side에서 미리 HTML을 렌더링 한다 (pre-render).

  이것은 CSR 의 부담을 줄여주어, 성능 향상, 고로 SEO에 도움을 준다.

  ### 2가지 pre-rendering

  1. static generation (공식 문서 추천) :

     프로젝트 빌드 과정에서 pre-render & 한번 렌더된것은 재사용 o

  2. server-side rendering :

     요청이 될 때마다 HTML이 렌더 된다 & 재사용 개념 x

<hr>

<br>

## 다양한 Routing 방법들    [참고](https://nextjs.org/docs/routing/introduction#dynamic-route-segments)

1. Nested Routes

   - ex. 

     `pages/blog/first-post.js` → `/blog/first-post`

     `pages/dashboard/settings/username.js` → `/dashboard/settings/username`

2. Dynamic Route segments

   - ex.

     `pages/blog/[slug].js` → `/blog/:slug` (`/blog/hello-world`)

     `pages/[username]/settings.js` → `/:username/settings` (`/foo/settings`)

     `pages/post/[...all].js` → `/post/*` (`/post/2020/id/title`

3. Injecting Routes

   - 공식 문서 참고

<br>

## Client-side-navigation 으로 페이지 이동

- Client-side navigation이란, 

  브라우저상에서가 아닌 JS상에서 page transition이 되는걸 말함 (더 빠름).

- CSN은 **Link** 컴포넌트를 활용하여 구현 가능 (`<a>`태그와 비슷한 느낌).

  Link 컴포넌트가 아닌, `<a>`태그로 navigation을 구현하면,

  페이지 이동시 브라우저가 페이지를 full refresh 하기에 smooth함이 덜해진다.

<br>

## Code splitting and prefetching

- Splitting : 

  Next.js 는 자동으로 코드를 분리시켜 놓는다.

  특정 페이지를 보여주는데 필요한 요소들만 골라서 load 한다.

  고로, 소스코드가 부분적으로 에러를 일으켜도, 이와 관련이 없는 코드로 구성된 페이지는 문제없이 표시된다.

- Prefetching

  Next.js 프로젝트에서 생성된 페이지에 `Link` 컴포넌트가 감지되면 (브라우저의 뷰포트에 나타나면) 자동으로 `Link` 너머 페이지의 코드를 prefetch (로드) 해줌.

  고로, page transition이 smooth!