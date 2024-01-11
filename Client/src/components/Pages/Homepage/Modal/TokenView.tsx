import { toggleModalState } from '../../../../redux/modalState';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';

export default function TokenView() {
  const { modalState } = useAppSelector((state) => state.modalState);
  const dispatch = useAppDispatch();

  return (
    <div className={`tokenView px-5 md:px-4 xl:px-10  ${modalState.tokenView ? 'block' : 'hidden'}`}>
      <h2 className="font-[900] text-[40px] leading-[36px] tracking-[-2.2px]">Verify Token</h2>
      <p className="text-[#838393] lg:text-[24px] lg:leading-[25px] my-4">After successful payment on flutterwave, you'll be sent a token.</p>

      <div>
        <input type="number" className="rounded-[15px] w-full text-center h-[60px] py-[20px] mb-6 border border-gray-200 outline-none" />

        <button className="border rounded-[15px] w-full h-[60px] cursor-pointer mb-6 bg-[#8338EC] hover:bg-[#4D10A3] text-white" onClick={() => dispatch(toggleModalState('tokenView'))}>
          Validate Token
        </button>
      </div>

      <div className="relative flex flex-col items-center justify-center cursor-pointer my-4 pb-[36px] lg:pb-0 w-full">
        <span className="hd text-lg">Having any issues? Report here</span>
        <div className="bg-[#8338ec] w-full mx-auto h-[1px] absolute top-6 max-w-[250px]"></div>
      </div>
    </div>
  );
}
