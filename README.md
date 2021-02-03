# ParallaxImg

패럴렉스 효과로 나타나는 이미지를 만들어 보았습니다.

![ParallaxImg (3)](https://user-images.githubusercontent.com/61913417/106781367-53a97080-668c-11eb-8c0a-da0f606fdb7c.gif)

### 구상 과정과 구현
1. pageYOffset 값을 이용해 스크롤 된 양을 알아낸다.
2. 컨텐츠에 offsetTop 값을 줘서 고정 위치 값을 알아낸다.
3. offsetTop 값에서 pageYOffset 값 즉 스크롤 된양을 빼 준 값이 innerHeight(화면의 높이값)의 절반 이하가 되면 컨텐츠에 show 클래스를 추가해 주고 아닐 경우 제거해 준다.
4. 기본적으로 nth-child(odd), nth-child(even)을 이용해 홀수 요소들과 짝수 요소들의 위치값을 다르게 잡아 주고 opacity 값을 0을 주어 나타나지 않게 만들어 준다.
5. show 클래스가 추가 되면 opacity: 1 을 주어 나타나게 만들고 나타나게 만들 위치값을 지정해 준다.
---
#### 공부
- nth-child 안에 odd 는 홀수, even 은 짝수를 의미한다.  
- offsetTop, offsetLeft, offsetWidth, offsetHeight 값은 절대 위치 값을 나타낸다.
- pageXOffset, pageYOffset X축과 Y축의 스크롤 된 양의 값을 나타낸다.
