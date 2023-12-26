import { useState, createContext, useEffect } from 'react';
import Hero from './Hero';
import Generator from './Generator';
import Modal from './Modal/Modal';
import Overlay from './Overlay';

export const stateHandler = createContext();

export default function Home() {
  const [input, setInput] = useState('');
  const [selectedMnemo, setSelectedMnemo] = useState(['Harry Swiftly Raced The Zebras', 'Harry Swiftly Raced The Zebras']);
  const [selectedCategory, setSelectedCategory] = useState({
    Fun: false,
    Educative: false,
    Custom: false,
  });

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

  const toggleSelectedCategory = function (key) {
    //reset selected category
    setSelectedCategory((prevValue) => ({ Fun: false, Educative: false, Custom: false }));

    //update state in the object
    setSelectedCategory((prevValue) => ({ ...prevValue, [key]: !prevValue['key'] }));
  };

  return (
    <stateHandler.Provider value={{ input, setInput, selectedMnemo, setSelectedMnemo, isModalOpen, setIsModalOpen, modalState, setModalState, toggleModalState, closeModal, selectedCategory, toggleSelectedCategory }}>
      <div className="max-w-7xl px-5 xl:px-0 mx-auto text-center">
        <Hero />

        <Generator />
      </div>

      {/* modal */}
      <Modal />

      <Overlay />
    </stateHandler.Provider>
  );
}
