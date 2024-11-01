// alert("test");
// 입력착 입력이 있고 그 부모로 폼태그가 있을떄 폼태그는
// 서버로 데이터 전송, 입력하고 엔터를 누르면 자동으로 서브밋 이벤트 발생
//e.preventDefault 자바로 기본 서브밋이벤트를 중지 시킬떄 사용

const addForm = document.querySelector(".add"); //입력폼
const list = document.querySelector("ul.todos"); //리스트
const search = document.querySelector(".search input"); //서치폼에 입력창

//검색어롱 필터링 함수
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term)) // 입력한 내용이 있는 todo는 filtered 삭제
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  // keyup 키보드 누르다음에 땟을때
  const term = search.value.trim();
  filterTodos(term);
});

//리스트에 할일 추가 함수
const addTodoList = (todo) => {
  const html =
    // `` 안에 문자열이므로 + 해서 문자열 추가로 만듬. <i class="far fa-edit edit"></i>
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>           
          <i class="far fa-trash-alt delete"></i>
        </li> `;
  // list.innerHTML = list.innerHTML + html; 이걸 간단하게
  list.innerHTML += html;
};

//submit은 입력창에서 내용을 입력하고 엔터하면 자동으로 발생
addForm.addEventListener("submit", (e) => {
  //alert("submit 제출 이벤트");
  e.preventDefault(); // 서버로 제출 이벤트 중지
  // 폼태그 네임을 씀 form.(name),  폼아니면 클래스나 아이디 사용
  //입력한 할일을 공백제거해서 변수로
  const todo = addForm.add.value.trim(); // trim은 공백제거
  //console.log(todo);
  // addTodoList(todo);
  if (todo.length >= 1) {
    addTodoList(todo);

    addForm.add.value = ""; // 입력창 클리어
  }
});

// ul태그 안에 리스트들을 지우기 초기화
// 삭제하기
list.addEventListener("click", (e) => {
  //클릭한 것이 휴지통 아이콘이 맞으면
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    // parentElement 부모태그,  휴지통의 부모(li)태그를 삭제
  }
  // 클릭한 것이 수정 버큰
  //if (e.target.classList.contains("edit")) {
  //alert("수정버튼 클릭!");
  // }
});
