const focusedBackground = `items-center  justify-center relative size-24 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 hover:shadow-lg`;
const goldBackground =
  "absolute bg-gradient-to-b from-yellow-200 to-yellow-300";
export default function Pinpad() {
  //     const el = HSPinInput.getInstance('#pin-input');

  // el.on('completed', ({currentValue}) => {...});
  return (
    <div className={focusedBackground}>
      <div className={`inset-0 ${goldBackground}`}>
        <div data-hs-pin-input className="flex gap-x-3">
          <input
            type="text"
            data-hs-pin-input-item
            className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            autoFocus
          />
          <input
            type="text"
            data-hs-pin-input-item
            className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          />
          <input
            type="text"
            data-hs-pin-input-item
            className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          />
          <input
            type="text"
            data-hs-pin-input-item
            className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
