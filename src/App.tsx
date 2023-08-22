import './App.css';
import AddTodo from './components/AddTodo';
import CompletedTodos from './components/CompletedTodos';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
      <AddTodo/>
      <CompletedTodos/>
    </div>
  );
}

export default App;
