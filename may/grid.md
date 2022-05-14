## grid 코드 작성 순서

- **마크업**
1. 전체 아이템들을 감싸는 container를 만든다

2. container 안에 item들을 원하는 만큼 만든다

3. item들에 class명 달아주는것 필수!

- **CSS**
> gird-template-areas 속성을 사용하였습니다 <br>
ie에서는 지원하지 않는 속성이므로 ie 코드로 변환하는 작업이 필요! -> 사이트에서 쉽게 할 수 있다. gird-template-rows, grid-template-columns를 제외한 모든 속성이 ie에서 사용이 불가하다. gird-row, gird-column grid-area 등등,, 그래서 가장 간편한 방법 선택
1. 넓이는 임의로 지정해주었습니다

2. display를 그리드로 지정해주고, grid-template-areas 속성을 이용하여 그리드 테이블을 만들어줍니다.
3. gird-templat-rows와 grid-templat-colums를 이용하여 각 행,열의 넓이값을 지정해줍니다.
(header와 footer는 고정값을 주었고 나머지는 비율에 따라 변하도록 하였습니다. 처음 회의와 다르게 높이 지정은 컨텐츠 내용에 따라 높이가 달라지기에 일단 지정안하였습니다. 실습 예제용 보여지는 레이아웃을 위해서는 지정하는게 좋을 것 같긴 함!  )
4. gird-gap을 이용하여 간격지정
5. 각 아이템의 클래스와 그리드 영역을 매치시켜 주기 위해서 각 아이템의 클래스안에 grid-area: 해당영역;을 추가해줍니다. 여기서 해당영역은 위 2번에서 grid-template-areas안에 지정한 이름입니다.
6. 각 아이템들의 세부 속성을 지정해줍니다 (color, radius, font 등등...)

> 그리드 1번예제에서 2번예제로 변경할때는 gird-template-areas의 구조와 5번에서 지정한 grid-areas의 값을 변경한 구조에 맞게 변경해주면 됩니다. 세부적으로  template-rows,columns 조정이 필요하면 조정!
