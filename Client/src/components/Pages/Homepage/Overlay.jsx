import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { StateHandler } from './Home';
export default function Overlay() {
  const { isModalOpen } = useSelector((state) => state.modalWindow);
  const { closeModal } = useContext(StateHandler);

  return <div className={`overlay opacity-50 w-full h-full fixed top-0 left-0 z-[1000] ${isModalOpen ? '' : 'hidden'}`} onClick={closeModal}></div>;
}
