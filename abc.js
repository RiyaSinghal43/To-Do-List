const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText=todoInput.value;
    const newLi=document.createElement("li");
    const newLiInnerHTML=
    `<span class="text">${newTodoText}</span>
    <div class="todo-btn">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML=newLiInnerHTML;
    todoList.append(newLi);
    todoInput.value="";
})
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const  target=e.target.parentNode.parentNode;
        target.remove();
    }
    if(e.target.classList.contains("done")){
        const  liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    }
});
console.log("hey");
function hello(){
    console.log("me");
}
setTimeout(hello,10000);
console.log("hey!");