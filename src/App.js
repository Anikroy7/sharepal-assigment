import './App.css';
import Main from './Components/Main';
import { Routes, Route } from "react-router-dom";
import Products from './Components/Products';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main></Main>}>
          <Route index element={<Products></Products>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
