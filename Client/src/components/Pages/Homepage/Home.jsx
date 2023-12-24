import { useState, createContext } from 'react';
import Hero from './Hero';
import Generator from './Generator';
import Modal from './Modal/Modal';
import Overlay from './Overlay';

export const stateHandler = createContext();

export default function Home() {
  const [input, setInput] = useState('');
  const [selectedMnemo, setSelectedMnemo] = useState([0, 1, 2, 3, 4]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalState, setModalState] = useState({
    upgradeView: true,
    signupView: false,
    loginView: false,
  });

  const closeModal = function () {
    setIsModalOpen(false);
    setModalState({
      upgradeView: true,
      signupView: false,
      loginView: false,
    });
  };

  const toggleModalState = function (key) {
    setModalState((_) => {
      // toggle the states of the classes one after the other
      if (key === 'upgradeView') {
        return { upgradeView: false, signupView: true, loginView: false };
      } else if (key === 'signupView') {
        return { upgradeView: false, signupView: false, loginView: true };
      } else {
        return { upgradeView: true, signupView: false, loginView: false };
      }
    });
  };

  return (
    <stateHandler.Provider value={{ input, setInput, selectedMnemo, setSelectedMnemo, isModalOpen, setIsModalOpen, modalState, setModalState, toggleModalState, closeModal }}>
      <div className="max-w-7xl px-8 xl:px-0 mx-auto text-center">
        <Hero />

        <Generator />
      </div>

      {/* modal */}
      <Modal />

      <Overlay />
    </stateHandler.Provider>
  );
}
