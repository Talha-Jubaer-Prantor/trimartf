
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminHome from './components/AdminHome/AdminHome';
import AdminOrder from './components/AdminOrder/AdminOrder';
import Login from './components/Login/Login';
import LoginError from './components/Login/LoginError';
import Menu from './components/Menu/Menu';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import AdminPost from './components/AdminPost/AdminPost';
import AdminControlPage from './components/AdminControlPage/AdminControlPage';
import About from './components/About/About';
import ProductDet from './components/ProductDet/ProductDet';
import UserExists from './components/SignUp/UserExists';
import CartOrder from './components/CartOrder/CartOrder';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/loginerror' element={<LoginError></LoginError>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/controlerpage' element={<AdminControlPage></AdminControlPage>}></Route>
        <Route path='/productdetails' element={<ProductDet></ProductDet>}></Route>
        <Route path='/controlerpage/home' element={<AdminHome></AdminHome>}></Route>
        <Route path='/controlerpage/order' element={<AdminOrder></AdminOrder>}></Route>
        <Route path='/controlerpage/post' element={<AdminPost></AdminPost>}></Route>
        <Route path='/existinguser' element={<UserExists></UserExists>}></Route>


        <Route path='/cartorder' element={<CartOrder></CartOrder>}></Route>


      </Routes>
      
    </div>
  );
}

export default App;
