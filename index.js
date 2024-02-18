//create a todo list 
//log input using form to capture new list items
//using the ul#to-do-list element
//functionality must be sttached to a form submit event using JAva Script - tyoe into field and log aftr submittig the form 
//item must be a button element nested within a li element 
//added items maybe clicked yo strike through ising text decoration css prperty.
//if it's marked done and clicked it should be deleted from lista

document.addEventListener('DOMContentLoaded', function () {
    // When the DOM content is fully loaded, execute the following code
  
    const form = document.getElementById('add-todo');
    const input = form.querySelector('input[type="text"]');
    const todoList = document.getElementById('todo-list');
  
    form.addEventListener('submit', function (event) {
      // Listen for form submission event
  
      event.preventDefault(); // Prevent the default form submission behavior
  
      const todoText = input.value.trim(); // Get the trimmed value from the input field
      if (todoText) {
        // If the input value is not empty
  
        addTodoItem(todoText); // Add the todo item to the list
        input.value = ''; // Clear the input field after adding the todo item
      }
    });
  
    todoList.addEventListener('click', function (event) {
      // Listen for click events on the todo list
  
      const target = event.target; // Get the element that was clicked
  
      if (target.tagName === 'BUTTON') {
        // If the clicked element is a button inside a todo item
  
        target.parentElement.remove(); // Remove the parent element (todo item) from the list
      } else if (target.tagName === 'LI') {
        // If the clicked element is a todo item
  
        target.classList.toggle('completed'); // Toggle the 'completed' class of the todo item
      }
    });
  
    function addTodoItem(text) {
      // Function to add a new todo item to the list
  
      const li = document.createElement('li'); // Create a new list item element
      const button = document.createElement('button'); // Create a new button element
  
      button.textContent = text; // Set the text content of the button to the todo text
      li.appendChild(button); // Append the button to the list item
      todoList.appendChild(li); // Append the list item to the todo list
    }
  });

  