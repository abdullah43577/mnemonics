import Navbar from './components/Layouts/Navbar';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="pb-8">
        <Outlet />
      </main>
    </>
  );
}
