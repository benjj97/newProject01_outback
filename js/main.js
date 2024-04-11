






// 메인페이지 왼쪽 사이트 메뉴 클릭이벤트

function toggleImg(){
    document.getElementById('left_heart').src = './images/side_heart-fill.png';
}

function toggleImg2(){
  document.getElementById('left_chatt').src = './images/side_chatt-fill.png';
}

// 두번째 콘텐츠 숫자 카운터

const numAni = document.getElementById('num_01');
const numAni2 = document.getElementById('num_02');
const numAni3 = document.getElementById('num_03');
let num = 0;
let num2 = 0;
let num3 = 0;
let targetNum = numAni.getAttribute('date-rate'); 
let targetNum2 = numAni2.getAttribute('date-rate'); 
let targetNum3 = numAni3.getAttribute('date-rate'); 
console.log(targetNum);


let maxScrollValue = document.body.offsetHeight - window.innerHeight;
//윈도우 스크롤값이 두번째 박스(section)의 상단위치와 같으면 아래 내용을 실행한다.

window.addEventListener('scroll', function(){

  count_animation();

});

function count_animation(){


  
}

const timer = setInterval(function(){
  ++num;
  numAni.innerText =  num;
  if(num == targetNum){
    clearInterval(timer);
  }
}, 20);

const timer2 = setInterval(function(){
  ++num2;
  numAni2.innerText =  num2;
  if(num2 == targetNum2){
    clearInterval(timer2);
  }
}, 20);

const timer3 = setInterval(function(){
  ++num3;
  numAni3.innerText =  num3;
  if(num3 == targetNum3){
    clearInterval(timer3);
  }
}, 1);









// 3번째 콘텐츠 찜하기버튼 toggle
function toggleBt(){
  document.querySelector('.cont03_toggle img').src = './images/side_heart-fill.png';
}

// 3번째 콘텐츠 탭버튼

  const tabBtn = document.querySelectorAll(".cont03_l_box > li"); //버튼 설정
    const tabCont = document.querySelectorAll(".cont03_r_box > .cont3_r_pro");   //콘텐츠 설정

    tabCont.forEach(el => el.style.display = "none");   //모든 콘텐츠를 숨김
    tabCont[0].style.display = "block";     //첫 번째 콘텐츠를 보이게 설정

    tabBtn.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabBtn.forEach(tab => tab.classList.remove("active"));  //모든 버튼 클래스 삭제
            tab.classList.add("active");        //클릭한 버튼만 클래스 추가

            tabCont.forEach(cont => cont.style.display = "none");   //모든 콘텐츠를 숨기
            tabCont[index].style.display = "block";     //클릭한 버튼의 콘텐츠 내용을 보여줌
        });
  });


// 4번째 콘텐츠 블러처리

  const blurImg = document.querySelector('.cont04 img');

  blurImg.addEventListener('mouseout', function(){
  blurImg.classList.remove('on');
  
  });
  



