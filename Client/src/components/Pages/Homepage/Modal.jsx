import { useContext } from 'react';
import { stateHandler } from './Home';

export default function Modal() {
  const { isModalOpen, setIsModalOpen } = useContext(stateHandler);

  return (
    <div className={`modal bg-white rounded-2xl fixed -translate-x-[50%] -translate-y-[50%] w-[600px] top-[50%] left-[50%] p-4 z-[5000] ${isModalOpen ? '' : 'hidden'}`}>
      <div className="border rounded-full p-2 w-[40px] h-[40px] border-gray-200 ml-auto flex items-center justify-center cursor-pointer" onClick={() => setIsModalOpen(false)}>
        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.33759 1.33753C1.49701 1.17788 1.68634 1.05123 1.89475 0.964815C2.10316 0.878402 2.32656 0.833923 2.55217 0.833923C2.77779 0.833923 3.00119 0.878402 3.2096 0.964815C3.41801 1.05123 3.60733 1.17788 3.76675 1.33753L10.0001 7.56857L16.2334 1.33753C16.3929 1.17803 16.5823 1.0515 16.7907 0.965181C16.9991 0.878859 17.2224 0.83443 17.448 0.83443C17.6736 0.83443 17.8969 0.878859 18.1053 0.965181C18.3137 1.0515 18.5031 1.17803 18.6626 1.33753C18.8221 1.49703 18.9486 1.68638 19.0349 1.89478C19.1213 2.10318 19.1657 2.32654 19.1657 2.55211C19.1657 2.77768 19.1213 3.00104 19.0349 3.20944C18.9486 3.41784 18.8221 3.60719 18.6626 3.76669L12.4315 10L18.6626 16.2334C18.9847 16.5555 19.1657 16.9924 19.1657 17.4479C19.1657 17.9035 18.9847 18.3404 18.6626 18.6625C18.3405 18.9846 17.9036 19.1656 17.448 19.1656C16.9924 19.1656 16.5555 18.9846 16.2334 18.6625L10.0001 12.4315L3.76675 18.6625C3.44463 18.9846 3.00773 19.1656 2.55217 19.1656C2.09661 19.1656 1.65972 18.9846 1.33759 18.6625C1.01546 18.3404 0.834491 17.9035 0.834491 17.4479C0.834491 16.9924 1.01546 16.5555 1.33759 16.2334L7.56863 10L1.33759 3.76669C1.17794 3.60727 1.05129 3.41794 0.964876 3.20953C0.878463 3.00113 0.833984 2.77772 0.833984 2.55211C0.833984 2.3265 0.878463 2.1031 0.964876 1.89469C1.05129 1.68628 1.17794 1.49695 1.33759 1.33753Z"
            fill="black"
          />
        </svg>
      </div>

      <div className="px-10">
        <h2 className="font-[900] text-4xl max-w-[400px]">
          Upgrade to QuickMnemo <span className="plus text-white p-[6px] rounded-lg text-sm">Plus</span>
        </h2>
        <p className="text-[#838393] text-xl my-4">Quickmnemo plus gives you access to exciting features to help you memorize better</p>

        <div>
          <div className="flex items-center gap-2">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_725_3839" maskUnits="userSpaceOnUse" x="1" y="0" width="17" height="18">
                <path
                  d="M9.50098 16.5001C10.4861 16.5014 11.4617 16.308 12.3718 15.931C13.2819 15.554 14.1086 15.0009 14.8042 14.3034C15.5017 13.6077 16.0549 12.7811 16.4319 11.871C16.8088 10.9609 17.0023 9.98523 17.001 9.00013C17.0022 8.01503 16.8088 7.0394 16.4318 6.12929C16.0548 5.21918 15.5017 4.39254 14.8042 3.69688C14.1086 2.99939 13.2819 2.44625 12.3718 2.06926C11.4617 1.69227 10.4861 1.49885 9.50098 1.50013C8.51589 1.49887 7.54025 1.6923 6.63014 2.06929C5.72004 2.44628 4.8934 2.99941 4.19773 3.69688C3.50026 4.39254 2.94713 5.21918 2.57014 6.12929C2.19315 7.0394 1.99973 8.01503 2.00098 9.00013C1.99971 9.98523 2.19312 10.9609 2.57011 11.871C2.94711 12.7811 3.50024 13.6077 4.19773 14.3034C4.8934 15.0009 5.72004 15.554 6.63014 15.931C7.54025 16.308 8.51589 16.5014 9.50098 16.5001Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <path d="M6.50098 9L8.75098 11.25L13.251 6.75" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </mask>
              <g mask="url(#mask0_725_3839)">
                <path d="M0.5 0H18.5V18H0.5V0Z" fill="#8338EC" />
              </g>
            </svg>
            <p className="text-[#838393]">Generate more memorable answers</p>
          </div>

          <div className="flex items-center gap-2">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_725_3839" maskUnits="userSpaceOnUse" x="1" y="0" width="17" height="18">
                <path
                  d="M9.50098 16.5001C10.4861 16.5014 11.4617 16.308 12.3718 15.931C13.2819 15.554 14.1086 15.0009 14.8042 14.3034C15.5017 13.6077 16.0549 12.7811 16.4319 11.871C16.8088 10.9609 17.0023 9.98523 17.001 9.00013C17.0022 8.01503 16.8088 7.0394 16.4318 6.12929C16.0548 5.21918 15.5017 4.39254 14.8042 3.69688C14.1086 2.99939 13.2819 2.44625 12.3718 2.06926C11.4617 1.69227 10.4861 1.49885 9.50098 1.50013C8.51589 1.49887 7.54025 1.6923 6.63014 2.06929C5.72004 2.44628 4.8934 2.99941 4.19773 3.69688C3.50026 4.39254 2.94713 5.21918 2.57014 6.12929C2.19315 7.0394 1.99973 8.01503 2.00098 9.00013C1.99971 9.98523 2.19312 10.9609 2.57011 11.871C2.94711 12.7811 3.50024 13.6077 4.19773 14.3034C4.8934 15.0009 5.72004 15.554 6.63014 15.931C7.54025 16.308 8.51589 16.5014 9.50098 16.5001Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <path d="M6.50098 9L8.75098 11.25L13.251 6.75" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </mask>
              <g mask="url(#mask0_725_3839)">
                <path d="M0.5 0H18.5V18H0.5V0Z" fill="#8338EC" />
              </g>
            </svg>
            <p className="text-[#838393]">Make it sound anyhow you like, fun? educative?</p>
          </div>

          <div className="flex items-center gap-2">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_725_3839" maskUnits="userSpaceOnUse" x="1" y="0" width="17" height="18">
                <path
                  d="M9.50098 16.5001C10.4861 16.5014 11.4617 16.308 12.3718 15.931C13.2819 15.554 14.1086 15.0009 14.8042 14.3034C15.5017 13.6077 16.0549 12.7811 16.4319 11.871C16.8088 10.9609 17.0023 9.98523 17.001 9.00013C17.0022 8.01503 16.8088 7.0394 16.4318 6.12929C16.0548 5.21918 15.5017 4.39254 14.8042 3.69688C14.1086 2.99939 13.2819 2.44625 12.3718 2.06926C11.4617 1.69227 10.4861 1.49885 9.50098 1.50013C8.51589 1.49887 7.54025 1.6923 6.63014 2.06929C5.72004 2.44628 4.8934 2.99941 4.19773 3.69688C3.50026 4.39254 2.94713 5.21918 2.57014 6.12929C2.19315 7.0394 1.99973 8.01503 2.00098 9.00013C1.99971 9.98523 2.19312 10.9609 2.57011 11.871C2.94711 12.7811 3.50024 13.6077 4.19773 14.3034C4.8934 15.0009 5.72004 15.554 6.63014 15.931C7.54025 16.308 8.51589 16.5014 9.50098 16.5001Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <path d="M6.50098 9L8.75098 11.25L13.251 6.75" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </mask>
              <g mask="url(#mask0_725_3839)">
                <path d="M0.5 0H18.5V18H0.5V0Z" fill="#8338EC" />
              </g>
            </svg>
            <p className="text-[#838393]">
              Support the <span className="underline text-black">team</span> behind Quickmnemo
            </p>
          </div>
        </div>

        <button className="generator text-white rounded-lg py-4 px-6 w-full my-8">Upgrade for just N950 per month</button>
      </div>
    </div>
  );
}
