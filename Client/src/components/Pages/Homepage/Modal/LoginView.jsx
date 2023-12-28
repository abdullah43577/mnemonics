import { useDispatch, useSelector } from 'react-redux';
import { toggleModalState } from '../../../../redux/modalState';

export default function LoginView() {
  // const { modalState, toggleModalState } = useContext(stateHandler);
  const { modalState } = useSelector((state) => state.modalState);
  const dispatch = useDispatch();

  return (
    <div className={`loginView px-8 xl:px-10 ${modalState.loginView ? 'block' : 'hidden'}`}>
      <h2 className="font-[900] text-[40px] leading-[36px] tracking-[-2.2px]">Welcome,</h2>
      <p className="text-[#838393] lg:text-[24px] lg:leading-[25px] my-4">Welcome back champ! Sign in to your QuickMnemo account and continue your memorization journey</p>

      <div>
        <div className="border border-gray-200 rounded-[15px] w-full flex items-center justify-center gap-2 h-[60px] py-[20px] cursor-pointer mb-6">
          <i className="fa-brands fa-google text-[20px]"></i>

          <p className="text-[#838393]">Continue with Google</p>
        </div>

        <div className="border border-gray-200 rounded-[15px] w-full flex items-center justify-center gap-2 h-[60px] py-[20px] cursor-pointer mb-6">
          <i className="fa-brands fa-apple text-[25px]"></i>

          <p className="text-[#838393]">Continue with Apple</p>
        </div>
      </div>

      <div className="hd underline text-lg my-4 text-center cursor-pointer pb-[36px] lg:pb-0">
        <span>Don't have an account? Signup here</span>
        <div className="generator max-w-[310px] mx-auto h-[1px] relative -top-1" onClick={() => dispatch(toggleModalState('loginView'))}></div>
      </div>
    </div>
  );
}
