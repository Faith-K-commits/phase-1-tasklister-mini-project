document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    
    const taskDescription = document.getElementById('new-task-description').value;

    
    const newTask = document.createElement('li');
    newTask.textContent = taskDescription;
    newTask.innerHTML += '<button data-description="taskDescription">X</button>'; 
    newTask.querySelector('button').addEventListener('click', handleDelete);

    
    taskList.appendChild(newTask);

    
    document.getElementById('new-task-description').value = '';
  });

  const handleDelete = (e) => {
    e.target.parentElement.remove();
  };
});
