import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/Pages/Homepage/Home';
import SavedMnemo from './components/Pages/SavedMnemo/savedMnemo';
import Support from './components/Pages/Support/support';
import WhatsNew from './components/Pages/whatsNew/whatsNew';

const routes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="/savedmnemo" element={<SavedMnemo />} />
    <Route path="/support" element={<Support />} />
    <Route path="/whats_new" element={<WhatsNew />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

export default function App() {
  return <RouterProvider router={router} />;
}
