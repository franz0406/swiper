### SWIPER JS 사용법

#### 커스터마이징 버전용

##### Step 1. 파일로드
```html
<link rel="stylesheet" href="swiper-bundle.min.css">
<script src="swiper-bundle.min.js"></script>
```
---
##### Step 2. HTML
```html
<div class="slider-wrapper">
    <div class="swiper">
        <ul class="swiper-wrapper">
            <li class="swiper-slide">slide 1</li>
            <li class="swiper-slide">slide 2</li>
            <li class="swiper-slide">slide 3</li>
            <li class="swiper-slide">slide 4</li>
        </ul>
    </div>
    <div class="pagination"><!-- 스크립트 자동 생성 --></div>
    <div class="prev">prev</div>
    <div class="next">next</div>
    <div class="auto">autoplay</div>
    <div class="stop">stop</div>
</div>
```

 
##### Step 3. CSS  

Swiper js의 디폴트 클래스명을 사용하지 않은 경우 `swiper-bundle.min.css`의 스타일이 적용되지 않아 화면에 안보여지는 것. 개자도구로 확인해보면 태그 생성되있음.  

swiper js의 디폴트 클래스명으로 작업해도 되지만, 번거러우니 직접 입력한 클래스명으로 CSS 스타일링  




##### Step 4. JAVASCRIPT
```javascript
const swiper변수명 = new Swiper(".swiper", {
    loop:true,
    pagination: {
        el: '.pagination',
        type: 'bullets',
        clickable: true,
        bulletClass:'bullet', 
        bulletActiveClass:'bullet-active'
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
})
```
---



##### control 버튼 커스텀 방법
###### 1.
```javascript
navigation: {
    nextEl: '.next',
    prevEl: '.prev',
},
// navigation 속성의 클래스명으로 CSS 스타일링
```
###### 2.
```html
<div class="prev">prev</div>
<div class="next">next</div>

<script>
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    prev.addEventListener('click',()=>{
        swiper변수명.slidePrev();
    });
    next.addEventListener('click',()=>{
        swiper변수명.slideNext();
    }); 
    // CSS 스타일링 후 swiper js 의 메소드를 이용.
</script>
```


##### 자동 플레이 버튼 커스텀 방법
```javascript
const stop = document.querySelector('.stop');
const auto = document.querySelector('.auto');

auto.addEventListener('click',()=>{
    swiper변수명.autoplay.start()
})
stop.addEventListener('click',()=>{
    swiper변수명.autoplay.stop()
})
```



##### 반응형 멀티플 슬라이드
```javascript
const swiper = new Swiper(".swiper", {
    breakpoints: {
        640: { // mobile
          slidesPerView: 2, // 슬라이드 개수
          spaceBetween: 20, // 슬라이드 간격
        },
        768: { // tablet
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1000: { // pc
          slidesPerView: 4,
          spaceBetween: 20,
        },
    },
})
```
