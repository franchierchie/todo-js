import './styles.css';

// Cuando dejas la busqueda asi: './classes', busca el index.js por defecto
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);