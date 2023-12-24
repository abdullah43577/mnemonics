import { stateHandler } from './Home';
import { useContext } from 'react';

export default function Generator() {
  const { input, setInput, selectedMnemo, setSelectedMnemo, isModalOpen, setIsModalOpen } = useContext(stateHandler);

  const generateMnemo = function () {
    if (!input) return;

    // run other code here
    console.log('this code ran');
  };

  const handleGeneratedMnemoClick = function (element) {
    const mnemo = document.querySelector(`.${element}`);
    mnemo.classList.toggle('active');
  };

  return (
    <section className="wrapper flex flex-col-reverse lg:flex-row items-start justify-center gap-32 my-16 border border-gray-200 rounded-[35px] p-5 lg:px-[64px] lg:py-[59px]">
      <div className="w-full xl:w-auto">
        <div>
          <p className="text-[#8E8E93] text-[20px]">What's your key-letters?</p>
          <input type="text" className="w-full xl:w-[440px] h-[70px] rounded-md outline-none border border-[#8338EC] text-center mt-3 text-[18px]" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>

        <div>
          <p className="text-[#8E8E93] text-[20px] py-4">How do you want it to sound?</p>

          <div className="flex items-center gap-2 xl:gap-4 justify-center lg:text-xl">
            <div className="border border-gray-200 rounded-lg px-2 h-[65px] flex items-center justify-center xl:p-4 cursor-pointer">Educative</div>

            <div className="border border-gray-200 rounded-lg px-2 h-[65px] flex items-center justify-center xl:p-4 cursor-pointer">Educative</div>

            <div className="border border-gray-200 rounded-lg px-2 h-[65px] flex items-center justify-center xl:p-4 cursor-pointer">Educative</div>
          </div>
        </div>

        <div className="tf border border-gray-200 rounded-lg relative h-[95px] px-2 w-full my-4 overflow-hidden cursor-pointer flex items-center text-left" onClick={() => setIsModalOpen(!isModalOpen)}>
          <span className="hd text-2xl tracking-[-0.8px] max-w-[300px] pl-[26px]">Upgrade to plus for more features</span>

          <svg className="absolute right-0 bottom-0" width="75" height="72" viewBox="0 0 75 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.163086" width="88.6736" height="88.4169" rx="44.2084" fill="url(#paint0_linear_714_3660)" />
            <path
              d="M42.4603 69.4169C42.1946 69.4166 41.9309 69.37 41.6811 69.2794C41.1993 69.103 40.7906 68.7699 40.5205 68.3337C40.2505 67.8974 40.1346 67.3831 40.1915 66.8731L41.9561 50.6252H28.4582C28.0419 50.6258 27.6333 50.5131 27.2762 50.2989C26.9191 50.0848 26.6272 49.7775 26.4316 49.41C26.2361 49.0424 26.1443 48.6286 26.1663 48.2128C26.1882 47.7971 26.323 47.3951 26.5561 47.0502L44.6374 20.0086C44.9233 19.5854 45.3425 19.2698 45.8283 19.1121C46.314 18.9543 46.8386 18.9633 47.3186 19.1377C47.7801 19.3091 48.1742 19.6244 48.4425 20.0372C48.7107 20.4499 48.839 20.9381 48.8082 21.4294L47.0436 37.7919H60.5415C60.9579 37.7913 61.3665 37.9041 61.7235 38.1182C62.0806 38.3323 62.3726 38.6396 62.5681 39.0071C62.7637 39.3747 62.8554 39.7886 62.8335 40.2043C62.8115 40.62 62.6768 41.022 62.4436 41.3669L44.3624 68.4086C44.1522 68.7196 43.8688 68.9742 43.5371 69.15C43.2054 69.3258 42.8357 69.4174 42.4603 69.4169Z"
              fill="white"
            />
            <defs>
              <linearGradient id="paint0_linear_714_3660" x1="21.6131" y1="-5.30007e-07" x2="44.4999" y2="88.4169" gradientUnits="userSpaceOnUse">
                <stop offset="0.256853" stopColor="#EC38E5" stopOpacity="0.2" />
                <stop offset="1" stopColor="#8338EC" stopOpacity="0.75" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <button className="generator rounded-[15px] text-white py-4 px-6 w-full mb-8" onClick={generateMnemo}>
          Start Generator
        </button>
      </div>

      <div className="bg-gray-200 w-[2px] h-[430px] hidden xl:block"></div>

      <div className="max-h-[200px] w-full xl:w-auto overflow-scroll">
        <div className="flex flex-col gap-4">
          {selectedMnemo?.map((_, i) => (
            <div
              key={i}
              className={`generated_mnemo generated_mnemo-${i} border border-gray-200 rounded-lg w-full xl:w-[440px] cursor-pointer h-[85px] relative overflow-hidden flex items-center justify-center`}
              onClick={() => handleGeneratedMnemoClick(`generated_mnemo-${i}`)}
            >
              <svg className="absolute top-0 left-0" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.9954" cy="13" r="30" fill="url(#paint0_linear_714_3628)" />
                <defs>
                  <linearGradient id="paint0_linear_714_3628" x1="-17.0046" y1="-17" x2="46.7411" y2="45.8539" gradientUnits="userSpaceOnUse">
                    <stop offset="0.594876" stopColor="white" />
                    <stop offset="1" stopColor="#D8D8D8" />
                  </linearGradient>
                </defs>
              </svg>

              <svg className="absolute top-[10px] left-[10px]" width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.8828 0.824951C13.9994 0.824951 12.3278 1.56839 11.1953 2.8462C10.0628 1.56839 8.39125 0.824951 6.50781 0.824951C4.8674 0.826936 3.29473 1.47947 2.13478 2.63942C0.97483 3.79937 0.322297 5.37203 0.320312 7.01245C0.320313 13.7943 10.24 19.2131 10.6619 19.4409C10.8258 19.5292 11.0091 19.5754 11.1953 19.5754C11.3815 19.5754 11.5648 19.5292 11.7288 19.4409C12.1506 19.2131 22.0703 13.7943 22.0703 7.01245C22.0683 5.37203 21.4158 3.79937 20.2558 2.63942C19.0959 1.47947 17.5232 0.826936 15.8828 0.824951ZM15.3681 14.1712C14.0624 15.2792 12.6667 16.2764 11.1953 17.1525C9.72396 16.2764 8.32819 15.2792 7.0225 14.1712C4.99094 12.4284 2.57031 9.77058 2.57031 7.01245C2.57031 5.96816 2.98516 4.96664 3.72358 4.22822C4.462 3.48979 5.46352 3.07495 6.50781 3.07495C8.17656 3.07495 9.57344 3.9562 10.1538 5.37558C10.2382 5.58249 10.3824 5.75956 10.5679 5.8842C10.7534 6.00884 10.9718 6.0754 11.1953 6.0754C11.4188 6.0754 11.6372 6.00884 11.8227 5.8842C12.0082 5.75956 12.1524 5.58249 12.2369 5.37558C12.8172 3.9562 14.2141 3.07495 15.8828 3.07495C16.9271 3.07495 17.9286 3.48979 18.667 4.22822C19.4055 4.96664 19.8203 5.96816 19.8203 7.01245C19.8203 9.77058 17.3997 12.4284 15.3681 14.1712Z"
                  fill="#D8D8D8"
                />
              </svg>
              <span>Harry Swiftly Raced The Zebras</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
