// ajax  사용시작
const ajax = new XMLHttpRequest();
// 바뀔 데이터주소같은경우는 변수로 만들어서 쓰는게 좋다
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
// .ajax.open() api 주소를 받아오는법 (method,url,true or false(비동기 or 동기))
// 첫번째 파라미터는 HTTP 요구 방식(request method) ─ GET, POST, HEAD 중의 하나이거나 당신의 서버에서 지원하는 다른 방식 ─ 입니다. 이 파라미터는 HTTP 표준에 따라 모두 대문자로 표기해야합니다. 그렇지 않으면 (파이어폭스와 같은) 특정 브라우저는 이 요구를 처리하지 않을 수도 있습니다.
// 두번째 파라미터는 요구하고자하는 URL 입니다. 보안상의 이유로 서드 파티 도메인 상의 URL은 기본적으로 호출할 수 없습니다. 요구하는 모든 페이지에 정확한 도메인 네임을 사용하십시오. 그렇지 않으면 open() 메소드를 호출할 때 'permission denied' 에러가 발생할 수 있습니다. 일반적인 오류는 당신의 사이트에 domain.tld 와 같은 형태로 접근하는 것 입니다. 이러한 경우 www.domain.tld 와 같은 형태로 페이지를 요구하기 바랍니다. 
// 세번째 파라미터(생략 가능)는 요구가 비동기식(Asynchronous)으로 수행될 지를 결정합니다. 만약 이 파라미터가 true(기본값) 으로 설정된 경우에는 자바스크립트 함수가 지속적으로 수행될 수 있어 서버로부터 응답을 받기 전에도 유저와 페이지의 상호작용이 계속 진행됩니다. 이것이 AJAX 의 첫번째 A (Asynchronous : 비동기성) 입니다.
// false로 설정된 경우 동기적으로 작동합니다. (send() 함수에서 서버로부터 응답이 올 때까지 기다림)
ajax.open("GET", NEWS_URL, false);
ajax.send();


console.log(ajax.response);
// json 형식의 문자열을 자바스크립트 객체로 바꿔줌
console.log(JSON.parse(ajax.response));

// newsFeed의 정보
const newsFeed = JSON.parse(ajax.response);


const createUl = document.createElement("ul");

for (let i = 0; i < newsFeed.length; i++) {
  const createli = document.createElement("li");
  createli.innerText = newsFeed[i].title;
  createUl.appendChild(createli);
}

document.getElementById("root").appendChild(createUl);