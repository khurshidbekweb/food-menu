import { Root } from '@radix-ui/react-slot';
import Home from 'pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
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