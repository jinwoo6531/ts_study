import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logoTodo(ID, title, completed);
});

const logoTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID: :${id},
    title: ${title},
    completed: ${completed}
  `);
};
