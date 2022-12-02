import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/router';

function App() {
  return (
    <div className="bg-black">
      <div className="nav-bg  max-w-screen-2xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
