import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers/router/Router";

function App() {
  return (
    <div className='max-w-7xl px-5 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
