### 새  브런치 생성

- `git branch <branch-name>`



### 브런치 확인

- `git branch`  현재 repository 브런치
- `git branch -a`  리모트 repository 포함 모든 브런치



### 브런치 삭제

- `git branch -d <branch-name>`



### 브런치 전환

- `git switch <branch-name>`



### 현재 브런치 정보 확인

- `git status`



### 브런치 push

- 꼭 head 가 push 하고싶은 branch 에 가있는지 확인!

- `git push -u origin <branch-name>`  remote repository에 없는 새로운 branch 일 경우
- `git push`  remote repository에 이미 merge 되어있는 기존의 branch 일 경우



### 브런치 merge

- 현재 head 가 가르키는 branch 로 커밋 내용들을 흡수한다.

  고로 미리 완전체가 될 branch로 head를 이동 후 merge 진행

- `git merge <will-be-merged-branch-name>`



### switch vs checkout

- checkout 은 매우 포괄적 (브런치 생성, 바꾸기, 복원하기 다 가능)
- switch 는 더 직관적 (오직 브런치 바꾸기만 가능)
- 결론: switch 쓰자



### git 폴더 삭제 후 커밋 문제 발생시 try

- `git rm --cached . -rf`