import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto px-3'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
