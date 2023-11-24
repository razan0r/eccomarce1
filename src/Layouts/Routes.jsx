import { createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/wep/home/Home";
import DashbordLayout from './DashboardLayout.jsx';
import Categories from "../components/wep/categories/Categories.jsx";
import HomeDashbord from '../components/dashbord/home/Home.jsx'
import CategoriesDashbord from '../components/dashbord/categories/Categories.jsx'
import Register from "../components/wep/register/Register.jsx";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: 'register',
            element: <Register />
          },
          {
        path: 'home',
        element: <Home />
      },
      {
        path: 'categories',
        element: <Categories />
      },{
        path: '*',
        element:<h2>404 page not found --- wep</h2>
      }
    ]
    },
    {
      path: '/dashboard',
      element: <DashbordLayout />,
      children: [{
        path: 'home',
        element: <HomeDashbord />
      },
      {
        path: 'categories',
        element: <CategoriesDashbord />
      },{
        path: '*',
        element:<h2>404 page not found --- dashboard</h2>
      }
    ]
    }
  ]);