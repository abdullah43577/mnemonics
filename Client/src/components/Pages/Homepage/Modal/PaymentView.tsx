import { toggleModalState } from '../../../../redux/modalState';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';

export default function PaymentView() {
  const { modalState } = useAppSelector((state) => state.modalState);
  const dispatch = useAppDispatch();

  return (
    <div className={`paymentView px-5 md:px-4 xl:px-10  ${modalState.paymentView ? 'block' : 'hidden'}`}>
      <h2 className="font-[900] text-[40px] leading-[36px] tracking-[-2.2px]">Payment</h2>
      <p className="text-[#838393] lg:text-[24px] lg:leading-[25px] my-4">You'll be redirected to flutterwave for payemnt after then you'll be sent a token for verification</p>

      <div>
        <button className="border rounded-[15px] w-full h-[60px] cursor-pointer mb-6 bg-[#8338EC] hover:bg-[#4D10A3] text-white">I want to proceed payment</button>
        <button className="border border-gray-200 rounded-[15px] w-full h-[60px] cursor-pointer mb-6 text-gray-400" onClick={() => dispatch(toggleModalState('paymentView'))}>
          I want to verify my token
        </button>
      </div>
    </div>
  );
}
