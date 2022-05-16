import { BrowserRouter } from 'react-router-dom'
import './App.css'
import TodoList from './20220516/Components/TodoList/TodoList'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <TodoList />
      </div>
    </BrowserRouter>
  )
}

export default App
