import { useDispatch, useSelector } from 'react-redux';
import { toggleModalState } from '../../../../redux/modalState';

export default function SignupView() {
  // const { modalState, toggleModalState } = useContext(stateHandler);
  const { modalState } = useSelector((state) => state.modalState);
  const dispatch = useDispatch();

  return (
    <div className={`signupView px-8 xl:px-10 ${modalState.signupView ? 'block' : 'hidden'}`}>
      <h2 className="font-[900] text-[40px] leading-[36px] tracking-[-2.2px]">Hello there,</h2>
      <p className="text-[#838393] lg:text-[24px] lg:leading-[25px] my-4">Unlock memory's power! Sign up for QuickMnemo and unleash your potential. Learn. Remember. Achieve. ✨</p>

      <div>
        <div className="border border-gray-200 rounded-[15px] w-full flex items-center justify-center gap-2 h-[60px] py-[20px] cursor-pointer mb-6">
          <i className="fa-brands fa-google text-[20px]"></i>

          <p className="text-[#838393]">Sign up with Google</p>
        </div>

        <div className="border border-gray-200 rounded-[15px] w-full flex items-center justify-center gap-2 h-[60px] py-[20px] cursor-pointer">
          <i className="fa-brands fa-apple text-[25px]"></i>

          <p className="text-[#838393]">Sign up with Apple</p>
        </div>
      </div>

      <div className="hd underline text-lg my-4 text-center cursor-pointer pb-[36px] lg:pb-0" onClick={() => dispatch(toggleModalState('signupView'))}>
        <span>Have an account? Login here</span>
        <div className="generator max-w-[250px] mx-auto h-[1px] relative -top-1"></div>
      </div>
    </div>
  );
}
