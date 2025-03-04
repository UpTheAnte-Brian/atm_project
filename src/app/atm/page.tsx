import Image from "next/image";
import logo from "../../../public/atm_sign.png";
import Pinpad from "../ui/pinpad";

const focusedBackground = `items-center  justify-center relative size-24 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 hover:shadow-lg`;
const goldBackground =
  "absolute bg-gradient-to-b from-yellow-200 to-yellow-300";
export default function Atm() {
  //     const el = HSPinInput.getInstance('#pin-input');

  // el.on('completed', ({currentValue}) => {...});
  return (
    <div className="bg-[#e6e6e6] items-center justify-items-center max-h-screen p-8 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">ATM Project</h1>
      <p className="text-lg text-center">
        Created for Thomson Reuters by Brian Johnson
      </p>
      <Image
        src={logo}
        width={400}
        height={200}
        className="rounded-lg bg-[#136cae] p-2"
        alt="Organization Logo"
      />
      <div className="flex-shrink p-4 bg-red-200 min-w-90">
        {/* <div className="flex-grow p-4 bg-red min-w-90 mr-3"> */}
        <div className="grid grid-cols-3 grid-flow-row gap-4">
          {/* <!-- Pin to top left corner --> */}
          <div className={focusedBackground}>
            <div className={`size-12 ${goldBackground}`}>01</div>
          </div>
          {/* <!-- Span top edge --> */}
          <div className={focusedBackground}>
            <div className={`inset-x-0 top-0 h-12 ${goldBackground}`}>02</div>
          </div>
          {/* <!-- Pin to top right corner --> */}
          <div className={focusedBackground}>
            <div className={`top-0 right-0 size-12 ${goldBackground}`}>03</div>
          </div>
          {/* <!-- Span left edge --> */}
          <div className={focusedBackground}>
            <div className={`inset-y-0 left-0 w-12 ${goldBackground}`}>04</div>
          </div>
          {/* <!-- Fill entire parent --> */}
          <Pinpad></Pinpad>
          {/* <!-- Span right edge --> */}
          <div className={focusedBackground}>
            <div className={`inset-y-0 right-0 w-12 ${goldBackground}`}>06</div>
          </div>
          {/* <!-- Pin to bottom left corner --> */}
          <div className={focusedBackground}>
            <div className={`bottom-0 left-0 size-12 ${goldBackground}`}>
              07
            </div>
          </div>
          {/* <!-- Span bottom edge --> */}
          <div className={focusedBackground}>
            <div className={`inset-x-0 bottom-0 h-12 ${goldBackground}`}>
              08
            </div>
          </div>
          {/* <!-- Pin to bottom right corner --> */}
          <div className={focusedBackground}>
            <div className={`right-0 bottom-0 size-12 ${goldBackground}`}>
              09
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 gap-4">
        <a
          href="/atm/withdraw"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Withdraw
        </a>
        <a
          href="/atm/deposit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Deposit
        </a>
        <a
          href="/atm/balance"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Balance
        </a>
      </div> */}
    </div>
  );
}
