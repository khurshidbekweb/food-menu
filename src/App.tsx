
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './layouts/Root';
import HomePage from './pages/home';
import Food from './pages/food';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'food',
        element: <Food/>
      }
    ]
  }
])



const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;