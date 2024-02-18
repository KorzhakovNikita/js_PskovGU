async function methodGetUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      let users = JSON.parse(xhr.responseText);

      let getTodosRequest = new XMLHttpRequest();
      getTodosRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
      getTodosRequest.send();

      getTodosRequest.onload = function () {
        if (getTodosRequest.status === 200) {
          let todos = JSON.parse(getTodosRequest.responseText);

          if (todos && Array.isArray(todos) && todos.length > 0) {
            todos.forEach((todo, index) => {
              let row = '<tr>';
              let user = users.find((user) => user.id === todo.userId);

              row += '<td>' +(Number(index) + 1) + '</td>';
              if (user) {
                row += '<td>' + user.name + '</td>';
              }
              row += '<td>' + todo.title + '</td>';
              row += '<td><input class="form-check-input" type="checkbox" ' + (todo.completed ? 'checked' : '') + '></td>';
              row += '</tr>';
              $('table tbody').append(row);
            });
          }
        } else {
          console.error('Ошибка =(');
        }
      };
    }
  };
}