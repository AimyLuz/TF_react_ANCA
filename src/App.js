
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'






function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <div className="App">
    <NavBar />
    <Routes>
      <Route  path="/" element={<ItemListContainer  greeting={'Bienvenidos'}/>} />
      <Route  path="/category/:categoryId" element={< ItemListContainer/>} />
      <Route  path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route  path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
    </div>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;

