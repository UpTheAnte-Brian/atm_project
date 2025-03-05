import { RightButton } from "./right-button";
import { LeftButton } from "./left-button";

export default function ButtonColumn({
  side,
  view,
  backToMain,
  goToWithdrawal,
  goToBalance,
  goToDeposit,
  onExit,
}: {
  side: string;
  view: string;
  backToMain: () => void;
  goToWithdrawal: () => void;
  goToBalance: () => void;
  goToDeposit: () => void;
  onExit: () => void;
}) {
  if (side === "left") {
    return (
      <>
        <div className="col-span-2 row-span-3"></div>
        <div className="col-span-2 row-span-4">
          <LeftButton type="submit" onClick={backToMain}>
            {view !== "main" ? (
              <span className="justify-items-start">Back</span>
            ) : (
              <></>
            )}
          </LeftButton>
          <LeftButton type="submit">
            <></>
          </LeftButton>
          {/* Withdrawal */}
          <LeftButton type="submit" onClick={goToWithdrawal}>
            <></>
          </LeftButton>
          {/* Deposit */}
          <LeftButton type="submit" onClick={goToDeposit}>
            <></>
          </LeftButton>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="col-span-2 row-span-3"></div>
        <div className="col-span-2 row-span-4">
          <RightButton type="submit">
            <></>
          </RightButton>
          {/* Exit */}
          <RightButton type="submit" onClick={onExit}>
            <></>
          </RightButton>
          {/* Balance */}
          <RightButton type="submit" onClick={goToBalance}>
            <></>
          </RightButton>
          {/* Re-Enter PIN */}
          <RightButton type="submit" onClick={onExit}>
            <></>
          </RightButton>
        </div>
      </>
    );
  }
}
