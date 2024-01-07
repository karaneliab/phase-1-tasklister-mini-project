
document.addEventListener("DOMContentLoaded", () => {
  // your code here
//   document.querySelector("#create-task-form").addEventListener('submit', (event) => {
//     event.preventDefault();
//     displayList(event.target.tasks).value
//   });
// });



let form = document.querySelector("#create-task-form")
        form.addEventListener('submit',(event) => {
          event.preventDefault();
          displayList(event.target['new-task-description'].value)
          form.reset();
        })
      });




 function displayList(toDo) {
  let li = document.createElement('li');
  let Btn = document.createElement('button');
  Btn.addEventListener("click",handleDelete);
  Btn.textContent = 'ondoa';
  li.textContent = `${toDo}`
  li.appendChild(Btn);
  document.querySelector('#tasks').appendChild(li);
 
}

function handleDelete(e){
  e.target.parentNode.remove();
}
// function displayList(text){
//   let taskslist = document.getElementById('tasks');
//   let list = document.createElement('li');
//   let textNode = document.createTextNode(Enter-here);
//      list.appendChild(textNode);
//         taskslist.appendChild(list);
// //       
    // }
