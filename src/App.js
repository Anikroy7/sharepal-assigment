import './App.css';
import Main from './Components/Main';
import { Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import CouponsCards from './Components/CouponsCards'
import MoreCategories from './Components/MoreCategories';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main></Main>}>
          <Route index element={<Products></Products>}></Route>
        </Route>
      </Routes>
      <CouponsCards></CouponsCards>
      <MoreCategories></MoreCategories>
    </div>
  );
}

export default App;
