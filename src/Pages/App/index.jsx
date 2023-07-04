import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar  from  '../../Components/Navbar';
import './App.css'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';

const AppRoutes = () =>{
  let routes = useRoutes ([
    {path:'/',element: <Home/>},
    {path:'/clothes',element: <Home/>},
    {path:'/electronics',element: <Home/>},
    {path:'/furnitures',element: <Home/>},
    {path:'/toys',element: <Home/>},
    {path:'/others',element: <Home/>},
    {path:'/my-account',element: <MyAccount/>},
    {path:'/my-order',element: <MyOrder/>},
    {path:'/my-orders',element: <MyOrders/>},
    {path:'/my-orders/last',element: <MyOrder/>},
    {path:'/my-orders/:id',element: <MyOrder/>},
    {path:'/*',element: <NotFound/>},
    {path:'/sign-in',element: <Signin/>},
  ])
  return routes
}

const App =()=> {
  return(
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App
