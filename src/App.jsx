import {RouterProvider} from "react-router-dom";
import {router} from './Layouts/Routes.jsx'


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
