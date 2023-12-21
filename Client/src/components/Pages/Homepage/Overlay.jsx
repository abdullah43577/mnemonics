import { useContext } from 'react';
import { stateHandler } from './Home';

export default function Overlay() {
  const { isModalOpen, setIsModalOpen } = useContext(stateHandler);

  return <div className={`overlay opacity-50 w-full h-full fixed top-0 left-0 z-[1000] ${isModalOpen ? '' : 'hidden'}`} onClick={() => setIsModalOpen(false)}></div>;
}
