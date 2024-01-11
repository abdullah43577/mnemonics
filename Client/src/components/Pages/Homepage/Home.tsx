import { createContext } from 'react';
import Hero from './Hero';
import Generator from './Generator';
import Modal from './Modal/Modal';
import Overlay from './Overlay';
import { toggleModal } from '../../../redux/toggleModal';
import { resetModalState } from '../../../redux/modalState';
import { useAppDispatch } from '../../../redux/hooks';

export const StateHandler = createContext<any>(null);

export default function Home() {
  const dispatch = useAppDispatch();

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
