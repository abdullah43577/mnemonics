import { stateHandler } from './Home';
import { useContext } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export default function Generator() {
  const { input, setInput, selectedMnemo, setSelectedMnemo, isModalOpen, setIsModalOpen } = useContext(stateHandler);

  const isSmallScreen = useMediaQuery('(max-width:480px)');

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
    <section className="wrapper flex flex-col-reverse xl:flex-row items-start justify-center gap-16 lg:gap-32 my-16 border border-gray-200 rounded-[35px] p-5 lg:px-[64px] lg:py-[59px] mb-4">
      <div className="w-full xl:w-auto">
        <div>
          <p className="text-[#8E8E93] text-[20px]">What's your key-letters?</p>
          <input type="text" className="w-full xl:w-[440px] h-[70px] rounded-[15px] outline-none border border-[#8338EC] text-center mt-3 text-[18px]" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>

        <div>
          <p className="text-[#8E8E93] text-[20px] py-4">How do you want it to sound?</p>

          <div className="flex items-center gap-2 xl:gap-4 justify-center lg:text-xl">
            <div className="border border-gray-200 rounded-[15px] py-[19px] px-[10px] lg:px-[21px] lg:py-[19px] lg:h-[65px] flex items-center justify-center xl:p-4 cursor-pointer min-w-[80px]">Fun</div>

            <div className="border border-gray-200 rounded-[15px] py-[19px] px-[10px] lg:px-[21px] lg:py-[19px] lg:h-[65px] flex items-center justify-center xl:p-4 cursor-pointer min-w-[80px]">Educative</div>

            <div className="border border-gray-200 rounded-[15px] py-[19px] px-[10px] lg:px-[21px] lg:py-[19px] lg:h-[65px] flex items-center justify-center xl:p-4 cursor-pointer min-w-[80px]">Custom</div>
          </div>
        </div>

        {isSmallScreen ? (
          <div className="hd underline text-sm my-4 text-center cursor-pointer flex items-center justify-center relative" onClick={() => setIsModalOpen(!isModalOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M6.98065 13.9167C6.91301 13.9166 6.8459 13.9047 6.78232 13.8817C6.65967 13.8368 6.55565 13.752 6.4869 13.6409C6.41815 13.5299 6.38866 13.399 6.40316 13.2692L6.85232 9.13334H3.41649C3.31051 9.1335 3.2065 9.10479 3.11561 9.05029C3.02473 8.99579 2.95041 8.91756 2.90063 8.824C2.85085 8.73045 2.8275 8.6251 2.83309 8.51927C2.83867 8.41344 2.87298 8.31114 2.93232 8.22334L7.53482 1.34001C7.60761 1.23229 7.7143 1.15197 7.83795 1.11181C7.9616 1.07165 8.09513 1.07395 8.21732 1.11834C8.33479 1.16195 8.4351 1.24223 8.50339 1.34729C8.57168 1.45235 8.60432 1.57661 8.59649 1.70167L8.14732 5.86667H11.5832C11.6891 5.86651 11.7931 5.89522 11.884 5.94972C11.9749 6.00422 12.0492 6.08245 12.099 6.17601C12.1488 6.26957 12.1721 6.37491 12.1666 6.48074C12.161 6.58657 12.1267 6.68887 12.0673 6.77667L7.46482 13.66C7.41131 13.7392 7.33918 13.804 7.25475 13.8487C7.17033 13.8935 7.07621 13.9168 6.98065 13.9167Z"
                fill="#8338EC"
              />
            </svg>
            <span>Upgrade to plus for more features</span>
            <div className="generator w-full max-w-[240px] mx-auto h-[1px] absolute bottom-0"></div>
          </div>
        ) : (
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
        )}

        <button className="generator rounded-[15px] text-white py-4 px-6 w-full mb-8" onClick={generateMnemo}>
          Start Generator
        </button>
      </div>

      <div className="bg-gray-200 w-[2px] h-[430px] hidden xl:block"></div>

      <div className="mnemonics_wrapper max-h-[350px] lg:max-h-[430px] w-full xl:w-auto overflow-y-scroll overflow-x-hidden">
        <div className="flex flex-col gap-4">
          {selectedMnemo?.map((_, i) => (
            <div
              key={i}
              className={`generated_mnemo generated_mnemo-${i} border border-gray-200 rounded-[15px] w-full xl:w-[440px] cursor-pointer h-[85px] relative overflow-hidden flex items-center justify-center`}
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

              <span className="text-[#838393] lg:text-xl">Harry Swiftly Raced The Zebras</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
