import { createContext } from 'react';
import Hero from './Hero';
import Generator from './Generator';
import Modal from './Modal/Modal';
import Overlay from './Overlay';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../redux/toggleModal';
import { resetModalState } from '../../../redux/modalState';

export const StateHandler = createContext();

export default function Home() {
  const dispatch = useDispatch();

  const closeModal = function () {
    dispatch(toggleModal());
    dispatch(resetModalState());
  };

  return (
    <StateHandler.Provider value={{ closeModal }}>
      <div className="max-w-[1440px] px-5 xl:px-[162px] mx-auto text-center">
        <Hero />

        <Generator />
      </div>

      {/* modal */}
      <Modal />

      <Overlay />
    </StateHandler.Provider>
  );
}
