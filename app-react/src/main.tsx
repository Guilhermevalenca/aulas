// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import RoutesDeclarative from './RoutesDeclarative';
import { RouterProvider } from 'react-router';
import RoutesData from './RoutesData'

// createRoot(document.getElementById('root')!).render(
//   <RoutesDeclarative />,
// )

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={RoutesData} />
)