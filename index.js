const endPoint = "http://localhost:3000/api/v1/tasks"

document.addEventListener('DOMContentLoaded', () => {
  getTasks()

  const createTaskForm = document.querySelector("#newTask")

  createTaskForm.addEventListener("submit", (task) => 
  createFormHandler(task))
})
// get request
function getTasks() {
  fetch(endPoint)
  .then(response => response.json())
  .then(tasks => {   //get my tasks array
      tasks.data.forEach(task => {   //iterate over each task. need .data to get to the array "data"
          const taskMarkup = `
          <div data-id=${task.id}>
            <h1>Todo name: ${task.attributes.todo_list.name}</h1>
            <h3>Task name: ${task.attributes.name}</h3>
            <h3>Task notes: ${task.attributes.notes}</h3>
            <h3>Task completed? ${task.attributes.completed}</h3>
            <button data-id=${task.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#task-container').innerHTML += taskMarkup //i want to update the innerHTML with the taskMarkup code
      });
  })
}

function createFormHandler(task) {
    task.preventDefault()
    console.log(task);
}