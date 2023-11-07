import { 
  RouterProvider, 
  createBrowserRouter, 
  // useLocation 
} from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import DestinationPage from './pages/Destination';
import CrewPage from './pages/Crew';
import TechnologyPage from './pages/Technology';
import './App.css';

// import homeBackground from './assets/home/background-home-desktop.jpg';
// import destinationBackground from './assets/destination/background-destination-desktop.jpg';
// import crewBackground from './assets/crew/background-crew-desktop.jpg';
// import technologyBackground from './assets/technology/background-technology-desktop.jpg';

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

  return (
    <RouterProvider router={router} />
  )
}

export default App;
