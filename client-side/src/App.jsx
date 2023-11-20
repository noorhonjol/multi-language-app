import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./MainPage";
import { MainLayout } from "./MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/:lang" element={<MainLayout/>}>

      <Route index path="main" element={<MainPage/>}/>
    </Route>
  )
);
function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
