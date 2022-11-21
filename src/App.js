import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarBook from '../src/Components/Navbar/NavbarBook'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeBookStore from './pages/HomeBookStore';
import AboutUs from './pages/AboutBookStore'
import ShopBookStore from './pages/ShopBookStore'
import FooterStore from './Components/Footer/FooterStore';
import BookDetail from './Components/BookStore/BookDetail';
import CartBookStore from './pages/CartBookStore';
import SignInBookStore from './pages/SignInBookStore';
import SignUpBookStore from './pages/SignUpBookStore';
import WishListBookStore from './pages/WishListBookStore';


function App() {  
  return (
    <div className="App">
      <div className="hiddeny">
     <BrowserRouter>
     <NavbarBook />
    <Routes>
      
      <Route exact path="/" 
      render={()=>{
        return localStorage.getItem("accessToken")?<HomeBookStore/>:<SignInBookStore/>
      }}
      element={<HomeBookStore/>}/>
      <Route path="/about-us" element={<AboutUs/>}></Route>
      <Route path='/shop' element={<ShopBookStore />}></Route>
      <Route path="/shop/:id" element={<BookDetail/>}></Route>
      <Route path="/cart" element={<CartBookStore/>}></Route>
      <Route path="/wish-list" element={<WishListBookStore/>}></Route>
      <Route path='/signin' element={<SignInBookStore/>}></Route>
      <Route path='/signup' element={<SignUpBookStore/>}></Route>


    </Routes>
    <FooterStore/>
  </BrowserRouter>,
   </div>
    </div>
  );
}

export default App;
