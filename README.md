yarn create next-app <project-name> --ts

tsconfig.json에 paths 넣기

public 제외 폴더 다 삭제하고 src에
components, pages, shared, store, styles, utils, api 넣기
\_app.tsx \_documnet.tsx 관리,

emotion 설정
yarn add @emotion/react @emotion/styled emotion-reset
yarn add -D @emotion/babel-plugin
.babelrc설정

yarn add axios react-query recoil
각각 폴더 정리

.env 설정

public 하위에 assets만들기 그리고 next/image에서 image 경로 /assets/??? 불러오면 됨

nextjs image에서 production일 경우 yarn add sharp를 하면 최적화에 좋음

//eslint
npm info "eslint-config-airbnb@latest" peerDependencies로 뭐 설치 목록 확인
yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-import
yarn add -D eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
