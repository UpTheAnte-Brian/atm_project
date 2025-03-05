import React, { useState } from "react";
import ButtonColumn from "./button-column";
import Withdrawal from "./withdrawal";
import UserHome from "./user-home";
import Deposit from "./deposit";
import Balance from "./balance";

export default function UserInterface({ onExit }: { onExit: () => void }) {
  const [view, setView] = useState("main");
  const [balance, setBalance] = useState(1200);

  const handleTransaction = async (val: number | undefined) => {
    if (!val) return;
    setBalance(val);
  };

  return (
    <div className="flex-1 max-w-4x1 mx-auto">
      <div className="grid grid-flow-col self-end grid-rows-7 grid-cols-12 gap-1">
        <ButtonColumn
          side="left"
          view={view}
          backToMain={() => setView("main")}
          goToWithdrawal={() => setView("withdrawal")}
          goToBalance={() => setView("balance")}
          goToDeposit={() => setView("deposit")}
          onExit={onExit}
        ></ButtonColumn>
        <div className="col-span-8 row-span-7 bg-[#e6e6e6]">
          <div className="place-content-start h-90 overflow-clip bg-[#7eb4d5] m-2 text-[#ffffff] pt-8">
            {view === "main" && <UserHome></UserHome>}
            {view === "withdrawal" && (
              <Withdrawal
                balance={balance}
                setBalance={handleTransaction}
                setView={(val) => {
                  setView(val);
                }}
              ></Withdrawal>
            )}
            {view === "deposit" && (
              <Deposit
                balance={balance}
                setBalance={handleTransaction}
                setView={(val) => {
                  setView(val);
                }}
              ></Deposit>
            )}
            {view === "balance" && <Balance balance={balance}></Balance>}
          </div>
        </div>

        <ButtonColumn
          side="right"
          view={view}
          backToMain={() => setView("main")}
          goToWithdrawal={() => setView("withdrawal")}
          goToBalance={() => setView("balance")}
          goToDeposit={() => setView("deposit")}
          onExit={onExit}
        ></ButtonColumn>
      </div>
    </div>
  );
}
