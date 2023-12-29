import { createContext } from 'react';
import Hero from './Hero';
import Generator from './Generator';
import Modal from './Modal/Modal';
import Overlay from './Overlay';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../redux/toggleModal';
import { resetModalState } from '../../../redux/modalState';

export const stateHandler = createContext();

export default function Home() {
  const dispatch = useDispatch();

  const closeModal = function () {
    dispatch(toggleModal());
    dispatch(resetModalState());
  };

  return (
    <stateHandler.Provider value={{ closeModal }}>
      <div className="max-w-[1440px] px-5 xl:px-[162px] mx-auto text-center">
        <Hero />

        <Generator />
      </div>

      {/* modal */}
      <Modal />

      <Overlay />
    </stateHandler.Provider>
  );
}
