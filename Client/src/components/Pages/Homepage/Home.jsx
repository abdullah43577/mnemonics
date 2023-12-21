import { useState, createContext } from 'react';
import Hero from './Hero';
import Generator from './Generator';
import Modal from './Modal';
import Overlay from './Overlay';

export const stateHandler = createContext();

export default function Home() {
  const [input, setInput] = useState('');
  const [selectedMnemo, setSelectedMnemo] = useState([0, 1, 2]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <stateHandler.Provider value={{ input, setInput, selectedMnemo, setSelectedMnemo, isModalOpen, setIsModalOpen }}>
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
