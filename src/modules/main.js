  //  const input = document.querySelector("#todo-input"),
  //  ul = document.querySelector("#myUL");
  //  let todos = JSON.parse(localStorage.getItem("list"));
  //  function showTodo() {
  //    let li = '';
  //    if(todos){
  //    todos.forEach((todo, index) => {
  //      li += `<label for="${index}"><input  type="checkbox" class="check" id="${index}"><input type="text" value="${todo.description}" class="items"><svg class="w-2 h-2 option" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  //           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
  //           </path>
  //         </svg>
  //           </label>
  //           `;
  //    });
  //   }
     
  //    ul.innerHTML = li;
  //  }
  //  showTodo();
  //  input.addEventListener("keyup", (e) => {
  //    let task = input.value.trim();
  //    if (e.key == "Enter" && task) {
  //      if (!todos) {
  //        todos = [];
  //      }
  //      input.value = "";
  //      let taskInfo = {
  //        description: task,
  //        complte: false,
  //      };
  //      todos.push(taskInfo);
  //      localStorage.setItem("list", JSON.stringify(todos));
  //      showTodo();
  //    }
  //  });