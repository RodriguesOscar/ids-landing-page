import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'impressum', element: <LegalPage pageKey="impressum" /> },
      { path: 'privacy', element: <LegalPage pageKey="privacy" /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
