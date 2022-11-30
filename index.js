const submitBtn = document.querySelector(".submit");
const clearBtn = document.querySelector(".clear");
const toDoContainer = document.querySelector(".todo-container");
const inputEl = document.querySelector(".input")
//function to create element and add it to the container element
submitBtn.addEventListener("click", ()=>{
    let list = document.createElement("li");
    list.innerText = inputEl.value;
    toDoContainer.appendChild(list);
    list.addEventListener("click", ()=>{
        list.style.textDecoration = "line-through";
    })
    list.addEventListener("dblclick", ()=>{
        toDoContainer.removeChild(list);
    });
    localStorage.setItem("")
})
//function to clear input text
clearBtn.addEventListener("click", ()=>{
    inputEl.value = "";
})

