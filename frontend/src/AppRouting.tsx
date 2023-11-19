import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import WebsitePage from './Page/WebsitePage'
import WebsiteForm from './Page/WebsiteForm'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<WebsiteForm />} />
      <Route path="/website" element={<WebsitePage />} />
      <Route path="/*" element={<Navigate to="/status/404" />} />
    </Route>
  )
)
