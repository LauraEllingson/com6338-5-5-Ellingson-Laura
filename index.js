var form = document.getElementById('add-todo')
var ul = document.getElementById('todo-list')
var input = document.querySelector('input')
var acceptedChar = /^[A-Za-z]+$/

form.addEventListener('submit', addTodo)

//generate list item 

function addTodo(e) {
    e.preventDefault();

    if(input.value.match(acceptedChar)) {
        var li = document.createElement('li')
//generate button element
        var btn = document.createElement('button')
        ul.appendChild(li)
        li.appendChild(btn)
        var todo = input.value

        btn.textContent = todo
        input.value = ""
        var todo = document.querySelector('li')
        let count= 0

//strike when clicked once 
//delte when clicked twice
    
        btn.onclick = function click(){
            function strike() {
            btn.style.textDecoration = "line-through";
            }
            function deleteTodo() {
            ul.removeChild(li);
            li.removeChild(btn);
            count= 0;
            }

            if(count == 0) {
            strike();
            count++;
            } else { deleteTodo();
            }
        }
    }
}

  