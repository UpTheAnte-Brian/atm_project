import React, { useState } from "react";
import Pinpad from "./pinpad";
import { LeftButton } from "./left-button";
import { RightButton } from "./right-button";

export default function LoginInterface({ onLogin }: { onLogin: () => void }) {
  const [enableLogin, setEnableLogin] = useState(false);
  // const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   const formData = new FormData(form);
  //   const val = formData.get("isActive") === "true";
  //   setIsActive(val);
  // };

  return (
    <div className="flex-1 max-w-4x1 mx-auto">
      <div className="grid grid-flow-col self-end grid-rows-7 grid-cols-12 gap-1">
        <div className="col-span-2 row-span-3"></div>
        <div className="col-span-2 row-span-4">
          {/* <form onSubmit={handleLogin}> */}
          <input type="hidden" name="isActive" value="true" />
          <LeftButton type="submit">
            <></>
          </LeftButton>
          {/* </form> */}
          <LeftButton type="submit">
            <></>
          </LeftButton>
          {/* Withdrawal */}
          <LeftButton type="submit">
            <></>
          </LeftButton>
          {/* Deposit */}
          <LeftButton type="submit">
            <></>
          </LeftButton>
        </div>
        <div className="col-span-8 row-span-7 bg-[#e6e6e6]">
          <div className="h-90 overflow-clip bg-[#7eb4d5] m-2 text-[#ffffff] pt-8">
            <div className="text-center">Welcome</div>
            <div className="text-center mb-10">Do Not Remove Your Card</div>
            <div className="text-center mb-4">
              Input your pin and press enter
              <Pinpad
                length={4}
                onComplete={() => {
                  setEnableLogin(true);
                }}
              ></Pinpad>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-3"></div>
        <div className="col-span-2 row-span-4">
          <RightButton
            id="login"
            disabled={!enableLogin}
            autoFocus={enableLogin}
            type="submit"
            onClick={() => onLogin()}
          >
            {" "}
            {enableLogin ? (
              <span className="justify-items-start">Enter</span>
            ) : (
              <span className="justify-items-start">
                <></>
              </span>
            )}
          </RightButton>
          {/* Exit */}
          <RightButton type="submit">
            <></>
          </RightButton>
          {/* Balance */}
          <RightButton type="submit">
            <></>
          </RightButton>
          {/* Re-Enter PIN */}
          <RightButton type="submit">
            <></>
          </RightButton>
        </div>
      </div>
    </div>
  );
}
