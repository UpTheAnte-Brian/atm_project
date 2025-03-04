export default function ATM() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-500">
      {/* ATM Container */}
      <div className="relative w-80 h-[500px] bg-gray-100 rounded-lg shadow-xl flex flex-col items-center">
        {/* ATM Header */}
        <div className="w-full bg-blue-600 text-white text-2xl font-bold py-2 text-center relative">
          ATM
          <p className="text-sm">24 HOUR BANKING</p>
          <div className="absolute top-2 right-4 text-black text-lg">✒️</div>
        </div>

        {/* Screen */}
        <div className="w-3/4 h-40 bg-blue-300 text-white text-center my-6 p-4 rounded-lg">
          <p className="text-lg font-bold">Hi Peter Parker!</p>
          <p className="text-sm">Please make a choice...</p>
        </div>

        {/* Buttons Layout */}
        <div className="w-full flex justify-between px-4">
          <div className="flex flex-col space-y-4">
            <button className="w-20 h-8 bg-gray-300 rounded-md">
              Withdraw
            </button>
            <button className="w-20 h-8 bg-gray-300 rounded-md">Deposit</button>
          </div>

          <div className="flex flex-col space-y-4">
            <button className="w-20 h-8 bg-gray-300 rounded-md">Balance</button>
            <button className="w-20 h-8 bg-gray-300 rounded-md">
              Re-Enter PIN
            </button>
          </div>
        </div>

        {/* Exit Button */}
        <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg">
          Exit
        </button>

        {/* Graffiti */}
        <div className="absolute bottom-4 left-4 text-black text-xl">
          🎨 GRAFFITI
        </div>
      </div>
    </div>
  );
}
