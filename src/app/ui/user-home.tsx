export default function UserHome() {
  return (
    <div>
      <div className="text-center">Hi Peter Parker!</div>
      <div className="text-center mb-18">Please make a choice...</div>
      <div className="grid grid-flow-col grid-rows-4 grid-cols-2 p-0">
        <div></div>
        <div></div>
        <div className="text-left mb-6 mt-1">
          <hr className="w-2 absolute text-[#ffffff] mr-4 mt-2 border-2 z-0" />
          <span className="z-1 ml-4">Withdrawal</span>
        </div>
        <div className="text-left">
          <hr className="w-2 absolute text-[#ffffff] mr-4 mt-2 border-2 z-0" />
          <span className="z-1 ml-4">Deposit</span>
        </div>
        <div></div>
        <div className="flex justify-end mt-2">
          <span className="z-1 mr-4 pb-2">Exit</span>
          <hr className="w-2 absolute text-[#ffffff] ml-4 mt-2 border-2 z-0" />
        </div>
        <div className="flex justify-end mt-2">
          <span className="z-1 mr-4 pb-2">Balance</span>
          <hr className="w-2 absolute text-[#ffffff] ml-4 mb-18 border-2 z-0" />
        </div>
        <div className="text-right">
          <hr className="w-2 absolute text-[#ffffff] border-2 z-0" />
          <span className="z-1 mr-4">Re-Enter PIN</span>
        </div>
      </div>
    </div>
  );
}
