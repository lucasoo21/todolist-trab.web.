const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const editform = document.querySelector("#edit-form");
const editinput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-Btn");

const savetodo = (Text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todotitle = document.createElement("h3");
    todotitle.innerText = Text;
    todo.appendChild(todotitle);

   const doneBtn = document.createElement("button");
   doneBtn.classList.add("finish-todo");
   doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
   todo.appendChild(doneBtn);
   
   const editBtn = document.createElement("button");
   editBtn.classList.add("edit-todo");
   editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
   todo.appendChild(editBtn);
   
   const deleteBtn = document.createElement("button");
   deleteBtn.classList.add("remove-todo");
   deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
   todo.appendChild(deleteBtn);

   todolist.appendChild(todo)

   todoinput.value = ""
   todoinput.focus()
};

const toggleforms = () => {
    editform.classList.toggle("hide")
    todoform.classList.toggle("hide")
    todolist.classList.toggle("hide")
}


todoform.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const inputValue = todoinput.value;

  if (inputValue) {
     savetodo(inputValue);
  }

});


document.addEventListener("click", (e)=>{
    const targetEl = e.target;
    const parentEl = targetEl.closet("div");
    
    if(targetEl.classlist.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")) {
      parentEl.remove();
    }
   
    if (targetEl.classList.contains("edit-todo")) {
       toggleforms()
    }
})