import { useDispatch, useSelector } from 'react-redux';
import { handleGeneratedMnemoClick } from '../../../redux/selectedMnemo';

export default function SavedMnemo() {
  const { selectedMnemo } = useSelector((state) => state.mnemo);
  const dispatch = useDispatch();

  return (
    <div className="max-w-[1440px] px-5 xl:px-[162px] mx-auto">
      <div className="flex items-center gap-2 text-sm lg:text-lg mb-[15px] text-[#8E8E93]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.625 8.07812C20.625 14.0938 11.7055 18.963 11.3257 19.1641C11.2256 19.2179 11.1137 19.2461 11 19.2461C10.8863 19.2461 10.7744 19.2179 10.6743 19.1641C10.2945 18.963 1.375 14.0938 1.375 8.07812C1.37659 6.66551 1.93846 5.3112 2.93733 4.31233C3.9362 3.31346 5.29051 2.75159 6.70312 2.75C8.47773 2.75 10.0315 3.51312 11 4.80305C11.9685 3.51312 13.5223 2.75 15.2969 2.75C16.7095 2.75159 18.0638 3.31346 19.0627 4.31233C20.0615 5.3112 20.6234 6.66551 20.625 8.07812Z"
            fill="#8E8E93"
          />
        </svg>

        <span className="font-[700]">Saved Mnemo</span>
      </div>

      <section className="wrapper flex flex-col gap-[44px] lg:gap-[53.5px] border border-gray-200 rounded-[35px] p-5 mb-4 w-auto xl:w-full mx-auto min-h-[85vh]">
        <div className="mnemonics_wrapper w-full xl:w-auto">
          <div className="flex flex-col justify-center gap-4">
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
    </div>
  );
}
