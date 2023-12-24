import { useContext, useState } from 'react';
import { stateHandler } from '../Home';

export default function SignupView() {
  const { modalState, toggleModalState } = useContext(stateHandler);

  return (
    <div className={`signupView px-8 xl:px-10 ${modalState.signupView ? 'block' : 'hidden'}`}>
      <h2 className="font-[900] text-4xl">Hello there,</h2>
      <p className="text-[#838393] text-sm lg:text-lg my-4">Welcome back champ! Sign in to your QuickMnemo account and continue your memorization journey</p>

      <div>
        <div className="border border-gray-200 rounded-lg w-full flex items-center justify-center gap-2 py-4 px-6 cursor-pointer mb-6">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.4883 12.4791V8.60409H20.2383C20.3841 9.26034 20.4987 9.87492 20.4987 10.7395C20.4987 16.6874 16.5091 20.9166 10.4987 20.9166C4.7487 20.9166 0.0820312 16.2499 0.0820312 10.4999C0.0820312 4.74992 4.7487 0.083252 10.4987 0.083252C13.3112 0.083252 15.6654 1.1145 17.4674 2.802L14.5091 5.677C13.7591 4.96867 12.4466 4.13534 10.4987 4.13534C7.05078 4.13534 4.23828 6.99992 4.23828 10.5103C4.23828 14.0208 7.05078 16.8853 10.4987 16.8853C14.4883 16.8853 15.957 14.1249 16.2279 12.4895H10.4883V12.4791Z"
              fill="url(#paint0_linear_740_540)"
            />
            <defs>
              <linearGradient id="paint0_linear_740_540" x1="6.405" y1="5.02603" x2="14.3478" y2="5.02603" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8338EC" />
                <stop offset="1" stopColor="#CB38E7" />
              </linearGradient>
            </defs>
          </svg>

          <p className="text-[#838393] text-sm lg:text-lg">Sign up with Google</p>
        </div>

        <div className="border border-gray-200 rounded-lg w-full flex items-center justify-center gap-2 py-4 px-6 cursor-pointer">
          <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.4581 21.2626C14.3025 22.3829 13.0407 22.206 11.8261 21.6754C10.5408 21.1329 9.36153 21.1093 8.00542 21.6754C6.30733 22.4065 5.41112 22.1942 4.39698 21.2626C-1.35764 15.3311 -0.508597 6.29827 6.02432 5.96808C7.61627 6.05063 8.72474 6.84071 9.65633 6.91146C11.0478 6.62845 12.3803 5.81479 13.8662 5.92092C15.6468 6.06242 16.9911 6.76996 17.8755 8.04352C14.1964 10.2487 15.069 15.0953 18.4416 16.4514C17.7694 18.2202 16.8968 19.9773 15.4463 21.2744L15.4581 21.2626ZM9.53841 5.89733C9.36153 3.26766 11.4959 1.09788 13.9487 0.88562C14.2907 3.92802 11.1893 6.19214 9.53841 5.89733Z"
              fill="url(#paint0_linear_740_546)"
            />
            <defs>
              <linearGradient id="paint0_linear_740_546" x1="6.0952" y1="5.92221" x2="13.0533" y2="5.92221" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8338EC" />
                <stop offset="1" stopColor="#CB38E7" />
              </linearGradient>
            </defs>
          </svg>

          <p className="text-[#838393] text-sm lg:text-lg">Sign up with Apple</p>
        </div>
      </div>

      <div className="hd underline text-lg my-4 text-center cursor-pointer" onClick={() => toggleModalState('signupView')}>
        <span>Have an account? Login here</span>
        <div className="generator max-w-[250px] mx-auto h-[1px] relative -top-1"></div>
      </div>
    </div>
  );
}
