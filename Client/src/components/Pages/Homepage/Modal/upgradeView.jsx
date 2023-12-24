import { useContext } from 'react';
import { stateHandler } from '../Home';

export default function upgradeView() {
  const { modalState, toggleModalState } = useContext(stateHandler);

  return (
    <div className={`upgradeView px-8 xl:px-10 ${modalState.upgradeView ? 'block' : 'hidden'}`}>
      <h2 className="font-[900] text-4xl max-w-[400px]">
        Upgrade to QuickMnemo <span className="plus text-white p-[6px] rounded-lg text-sm">Plus</span>
      </h2>
      <p className="text-[#838393] text-sm lg:text-lg my-4">Quickmnemo plus gives you access to exciting features to help you memorize better</p>

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
          <p className="text-[#838393] text-xs lg:text-base">Generate more memorable answers</p>
        </div>

        <div className="flex items-center gap-2 my-2 xl:my-0">
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
          <p className="text-[#838393] text-xs lg:text-base">Make it sound anyhow you like, fun? educative?</p>
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
          <p className="text-[#838393] text-xs lg:text-base">
            Support the <span className="underline text-black">team</span> behind Quickmnemo
          </p>
        </div>
      </div>

      <button className="generator text-white rounded-[15px] lg:rounded-lg py-4 px-6 w-full my-8" onClick={() => toggleModalState('upgradeView')}>
        Upgrade for just N950 per month
      </button>
    </div>
  );
}
