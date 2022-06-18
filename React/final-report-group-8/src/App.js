import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Shop from './Shop';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Shop />
      </div>
    </BrowserRouter>
  );
}

export default App;
