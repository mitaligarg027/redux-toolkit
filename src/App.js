// import logo from './logo.svg';
import './App.css';
import AddTodos from './components/AddTodos';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Learn about redux toolkit</h1>
        <AddTodos />
        <Todos />
      </Provider>
    </>
  );
}

export default App;
