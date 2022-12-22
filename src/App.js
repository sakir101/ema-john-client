import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './Component/layouts/Main';
import Shop from './Component/Shop/Shop';
import Orders from './Component/Orders/Orders';
import Inventory from './Component/Inventory/Inventory';
import About from './Component/About/About';
import { ProductsAndCartLoader } from './loaders/ProductsAndCartLoader';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Shipping from './Component/Shipping/Shipping';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      children: [
        {
          path: '/', 
          element: <Shop></Shop>,
      },
        {
          path: 'orders', 
          element: <Orders></Orders>,
          loader: ProductsAndCartLoader
        },
        {path: 'inventory', element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>},
        {path: 'shipping', element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>},
        {path: 'about', element: <About></About>},
        {path: 'login', element: <Login></Login>},
        {path: 'signup', element: <Signup></Signup>}
      ]
  }
  ])
  return (
    <div className="App">
     <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
