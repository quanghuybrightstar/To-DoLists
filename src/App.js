import Header from '~/components/HeaderOnly';
import './App.css';
import GlobalStyles from '~/components/GlobalStyles';
import {TodoInput, TodoList} from '~/components/Todo';

function App() {
  return (
    <GlobalStyles>
      <div className='App'>
      <Header></Header>

      <div className='container'>
        <TodoInput></TodoInput>

        <TodoList></TodoList>
      </div>

    </div>
    </GlobalStyles>
  );
}

export default App;
