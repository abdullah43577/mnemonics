import { useContext, useState } from 'react';
import { stateHandler } from '../Home';

export default function LoginView() {
  const { modalState, toggleModalState } = useContext(stateHandler);

  return (
    <div className={`loginView px-8 xl:px-10 ${modalState.loginView ? 'block' : 'hidden'}`}>
      <h2 className="font-[900] text-4xl">Welcome,</h2>
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

          <p className="text-[#838393] text-sm lg:text-lg">Continue with Google</p>
        </div>

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

          <p className="text-[#838393] text-sm lg:text-lg">Continue with Apple</p>
        </div>
      </div>

      <div className="hd underline text-lg my-4 text-center cursor-pointer">
        <span>Don't have an account? Signup here</span>
        <div className="generator max-w-[310px] mx-auto h-[1px] relative -top-1" onClick={() => toggleModalState('loginView')}></div>
      </div>
    </div>
  );
}
