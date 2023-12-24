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
    const icon = document.querySelector(`.${element} .fa-heart`);
    mnemo.classList.toggle('active');
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
  };

  return (
    <section className="wrapper flex flex-col-reverse xl:flex-row items-start justify-center gap-32 my-16 border border-gray-200 rounded-[35px] p-5 lg:px-[64px] lg:py-[59px]">
      <div className="w-full xl:w-auto">
        <div>
          <p className="text-[#8E8E93] text-[20px]">What's your key-letters?</p>
          <input type="text" className="w-full xl:w-[440px] h-[70px] rounded-md outline-none border border-[#8338EC] text-center mt-3 text-[18px]" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>

        <div>
          <p className="text-[#8E8E93] text-[20px] py-4">How do you want it to sound?</p>

          <div className="flex items-center gap-2 xl:gap-4 justify-center lg:text-xl">
            <div className="border border-gray-200 rounded-[15px] py-[19px] px-[10px] lg:px-[21px] lg:py-[19px] lg:h-[65px] flex items-center justify-center xl:p-4 cursor-pointer min-w-[80px]">Fun</div>

            <div className="border border-gray-200 rounded-[15px] py-[19px] px-[10px] lg:px-[21px] lg:py-[19px] lg:h-[65px] flex items-center justify-center xl:p-4 cursor-pointer min-w-[80px]">Educative</div>

            <div className="border border-gray-200 rounded-[15px] py-[19px] px-[10px] lg:px-[21px] lg:py-[19px] lg:h-[65px] flex items-center justify-center xl:p-4 cursor-pointer min-w-[80px]">Custom</div>
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

      <div className="mnemonics_wrapper max-h-[200px] lg:max-h-[430px] w-full xl:w-auto overflow-y-scroll overflow-x-hidden">
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

              <i className="fa-regular fa-heart text-[23px] text-gray-300 absolute top-[10px] left-[10px]"></i>

              <span className="text-[#838393]">Harry Swiftly Raced The Zebras</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
