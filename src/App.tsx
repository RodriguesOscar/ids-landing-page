import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:slug', element: <ProjectDetailPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'impressum', element: <LegalPage pageKey="impressum" /> },
      { path: 'privacy', element: <LegalPage pageKey="privacy" /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
