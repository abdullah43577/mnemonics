import { useMediaQuery } from '@react-hook/media-query';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../../redux/toggleModal';
import { setInput } from '../../../redux/input';
import { handleGeneratedMnemoClick } from '../../../redux/selectedMnemo';
import { toggleSelectedCategory } from '../../../redux/selectedCategory';
import { generateMnemo } from '../../../redux/generateMnemo';

export default function Generator() {
  const { input } = useSelector((state) => state.input);
  const { selectedMnemo } = useSelector((state) => state.mnemo);
  const { selectedCategory } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const isSmallScreen = useMediaQuery('(max-width:480px)');

  const generateMnemoFunc = function () {
    if (!input) {
      console.log('input has an empty value!');
      return;
    }
    dispatch(generateMnemo());
  };

  return (
    <section className="wrapper flex flex-col-reverse md:flex-row items-start justify-center gap-[44px] lg:gap-[53.5px] mt-[42px] lg:mt-[65.75px] border border-gray-200 rounded-[35px] p-5 lg:p-[59px] mb-4 w-auto xl:w-full mx-auto">
      <div className="w-full xl:w-auto">
        <div>
          <p className="text-[#8E8E93] md:text-[20px] tracking-[-0.8px]">What's your key-letters?</p>
          <input
            type="text"
            className="w-full xl:w-[440px] h-[50px] md:h-[70px] rounded-[15px] outline-none border-[0.8px] border-gray-200 text-center mt-5 mb-6 lg:mb-[63.58px] text-[18px] uppercase"
            value={input}
            onChange={(e) => dispatch(setInput(e.target.value))}
          />
        </div>

        <div>
          <p className="text-[#8E8E93] md:text-[20px] mb-5 tracking-[-0.8px]">How do you want it to sound?</p>

          <div className="flex items-center gap-2 xl:gap-4 justify-center lg:text-xl">
            {Object.keys(selectedCategory).map((category, i) => (
              <div
                key={i}
                className={`border flex-1 border-gray-200 rounded-[15px] py-[19px] px-[10px] lg:px-[21px] lg:py-[19px] h-[50px] lg:h-[65px] flex items-center justify-center xl:p-4 cursor-pointer min-w-[80px] tracking-[-0.8px] ${
                  selectedCategory[category] ? 'btns' : ''
                }`}
                onClick={() => dispatch(toggleSelectedCategory(category))}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {isSmallScreen ? (
          <div className="my-4 text-center cursor-pointer flex items-center justify-center" onClick={() => dispatch(toggleModal())}>
            <svg className="relative top-[2px]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M6.98065 13.9167C6.91301 13.9166 6.8459 13.9047 6.78232 13.8817C6.65967 13.8368 6.55565 13.752 6.4869 13.6409C6.41815 13.5299 6.38866 13.399 6.40316 13.2692L6.85232 9.13334H3.41649C3.31051 9.1335 3.2065 9.10479 3.11561 9.05029C3.02473 8.99579 2.95041 8.91756 2.90063 8.824C2.85085 8.73045 2.8275 8.6251 2.83309 8.51927C2.83867 8.41344 2.87298 8.31114 2.93232 8.22334L7.53482 1.34001C7.60761 1.23229 7.7143 1.15197 7.83795 1.11181C7.9616 1.07165 8.09513 1.07395 8.21732 1.11834C8.33479 1.16195 8.4351 1.24223 8.50339 1.34729C8.57168 1.45235 8.60432 1.57661 8.59649 1.70167L8.14732 5.86667H11.5832C11.6891 5.86651 11.7931 5.89522 11.884 5.94972C11.9749 6.00422 12.0492 6.08245 12.099 6.17601C12.1488 6.26957 12.1721 6.37491 12.1666 6.48074C12.161 6.58657 12.1267 6.68887 12.0673 6.77667L7.46482 13.66C7.41131 13.7392 7.33918 13.804 7.25475 13.8487C7.17033 13.8935 7.07621 13.9168 6.98065 13.9167Z"
                fill="#8338EC"
              />
            </svg>

            <div className="relative">
              <span className="hd text-sm">Upgrade to plus for more features</span>
              <div className="bg-[#8338ec] w-full mx-auto h-[1px] absolute bottom-0 max-w-[200px]"></div>
            </div>
          </div>
        ) : (
          <div className="tf border border-gray-200 rounded-[15px] relative h-[95px] px-2 w-full mb-[37.43px] mt-[61.61px] overflow-hidden cursor-pointer flex items-center text-left" onClick={() => dispatch(toggleModal())}>
            <span className="hd md:text-lg lg:text-2xl leading-[26px] tracking-[-0.8px] max-w-[300px] pl-[26px]">Upgrade to plus for more features</span>

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

        <button className="generator rounded-[15px] text-white py-4 px-6 w-full mb-5 md:h-[62px] font-[600] xl:text-xl" onClick={generateMnemoFunc}>
          Start Generator
        </button>
      </div>

      <div className="bg-gray-200 w-full h-[2px] md:w-[2px] md:h-[500px] lg:h-[550px]"></div>

      <div className="mnemonics_wrapper max-h-[160px] md:max-h-[500px] xl:max-h-[550px] w-full xl:w-[440px] overflow-y-scroll overflow-x-hidden">
        <div className="flex flex-col gap-4">
          {selectedMnemo?.map((mnemo, i) => (
            <div
              key={i}
              className={`generated_mnemo generated_mnemo-${i} border border-gray-200 rounded-[15px] w-full cursor-pointer h-[70px] md:h-[75px] lg:h-[85px] relative overflow-hidden flex items-center justify-center tracking-[-0.8px]`}
              onClick={() => dispatch(handleGeneratedMnemoClick(`generated_mnemo-${i}`))}
            >
              <svg className="inactiveMnemo absolute top-0 left-0" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.9954" cy="13" r="30" fill="url(#paint0_linear_714_3627)" />
                <path
                  d="M24.8828 10.825C22.9994 10.825 21.3278 11.5684 20.1953 12.8462C19.0628 11.5684 17.3913 10.825 15.5078 10.825C13.8674 10.8269 12.2947 11.4795 11.1348 12.6394C9.97483 13.7994 9.3223 15.372 9.32031 17.0125C9.32031 23.7943 19.24 29.2131 19.6619 29.4409C19.8258 29.5292 20.0091 29.5754 20.1953 29.5754C20.3815 29.5754 20.5648 29.5292 20.7288 29.4409C21.1506 29.2131 31.0703 23.7943 31.0703 17.0125C31.0683 15.372 30.4158 13.7994 29.2558 12.6394C28.0959 11.4795 26.5232 10.8269 24.8828 10.825ZM24.3681 24.1712C23.0624 25.2792 21.6667 26.2764 20.1953 27.1525C18.724 26.2764 17.3282 25.2792 16.0225 24.1712C13.9909 22.4284 11.5703 19.7706 11.5703 17.0125C11.5703 15.9682 11.9852 14.9666 12.7236 14.2282C13.462 13.4898 14.4635 13.075 15.5078 13.075C17.1766 13.075 18.5734 13.9562 19.1538 15.3756C19.2382 15.5825 19.3824 15.7596 19.5679 15.8842C19.7534 16.0088 19.9718 16.0754 20.1953 16.0754C20.4188 16.0754 20.6372 16.0088 20.8227 15.8842C21.0082 15.7596 21.1524 15.5825 21.2369 15.3756C21.8172 13.9562 23.2141 13.075 24.8828 13.075C25.9271 13.075 26.9286 13.4898 27.667 14.2282C28.4055 14.9666 28.8203 15.9682 28.8203 17.0125C28.8203 19.7706 26.3997 22.4284 24.3681 24.1712Z"
                  fill="#D8D8D8"
                />
                <defs>
                  <linearGradient id="paint0_linear_714_3627" x1="-17.0046" y1="-17" x2="46.7411" y2="45.8539" gradientUnits="userSpaceOnUse">
                    <stop offset="0.594876" stopColor="white" />
                    <stop offset="1" stopColor="#D8D8D8" />
                  </linearGradient>
                </defs>
              </svg>

              <svg className="activeMnemo invisible absolute top-0 left-0" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.9954" cy="13" r="30" fill="url(#paint0_linear_714_3622)" />
                <path
                  d="M30.6953 17.0125C30.6953 23.575 20.965 28.8869 20.5506 29.1063C20.4414 29.165 20.3193 29.1958 20.1953 29.1958C20.0713 29.1958 19.9492 29.165 19.84 29.1063C19.4256 28.8869 9.69531 23.575 9.69531 17.0125C9.69705 15.4715 10.31 13.9941 11.3997 12.9044C12.4894 11.8147 13.9668 11.2017 15.5078 11.2C17.4438 11.2 19.1388 12.0325 20.1953 13.4397C21.2519 12.0325 22.9469 11.2 24.8828 11.2C26.4239 11.2017 27.9013 11.8147 28.991 12.9044C30.0806 13.9941 30.6936 15.4715 30.6953 17.0125Z"
                  fill="url(#paint1_linear_714_3622)"
                />
                <defs>
                  <linearGradient id="paint0_linear_714_3622" x1="-17.0046" y1="-17" x2="46.7411" y2="45.8539" gradientUnits="userSpaceOnUse">
                    <stop offset="0.594876" stopColor="white" />
                    <stop offset="1" stopColor="#C838EC" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_714_3622" x1="16.1989" y1="15.4696" x2="24.3687" y2="15.4696" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8338EC" />
                    <stop offset="1" stopColor="#CB38E7" />
                  </linearGradient>
                </defs>
              </svg>

              <span className="text-[#838393] md:text-base lg:text-lg xl:text-xl">{mnemo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
