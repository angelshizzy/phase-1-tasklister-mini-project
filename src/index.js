document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form= document.querySelector('form').addEventListener("submit", e)=
  e.preventDefault()
  console.log(e.target.new_description.value)
  
  let taskValue= e.target.todo.value;
  let task = document.getElementById("tasks")
  let li = document.createElement("li")
  letbutton= document.createElement("button")

  li.appendChild(button)
  console,log(task)
  task.appendChild(li)
  form.reset
});

// add delete function
function handleDelete(e){
  e.target.parentNode.remove
}