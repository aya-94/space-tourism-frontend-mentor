import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import DestinationPage from './pages/Destination';
import CrewPage from './pages/Crew';
import TechnologyPage from './pages/Technology';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'destination', element: <DestinationPage /> },
      { path: 'crew', element: <CrewPage /> },
      { path: 'technology', element: <TechnologyPage /> },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
