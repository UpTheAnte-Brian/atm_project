import ButtonColumn from "./button-column";

// const focusedBackground = `flex-1 max-w-4x1 mx-auto`;
// const focusedBackground = `items-center justify-center relative size-24 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 hover:shadow-lg`;
// const goldBackground = "absolute bg-gradient-to-b from-yellow-200 to-yellow-300";
export default function UserInterface() {
  return (
    <div className="flex-1 max-w-4x1 mx-auto">
      <div className="grid grid-flow-col self-end grid-rows-7 grid-cols-12 gap-1">
        {/* <div className="col-span-2 row-span-7 bg-red-200 "></div> */}
        <ButtonColumn side="left"></ButtonColumn>
        <div className="col-span-8 row-span-7 bg-[#e6e6e6]">
          <div className="place-content-start h-90 overflow-clip bg-[#7eb4d5] m-2 text-[#ffffff] pt-8">
            <div className="text-center">Hi Peter Parker!</div>
            <div className="text-center mb-43">Please make a choice...</div>
            <div className="text-left ml-4">
              <span className="z-1">Withdrawal</span>
              <hr className="absolute overflow-visible w-2 text-[#ffffff] border-2 mr-8 z-0" />
            </div>
          </div>
        </div>
        <ButtonColumn side="right"></ButtonColumn>
      </div>
    </div>
  );
}
