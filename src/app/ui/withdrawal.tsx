"use client";

import { useActionState } from "react";
import { createWithdrawal, State } from "../../app/lib/actions";
import { Button } from "./button";

export default function Withdrawal({
  balance,
  setBalance,
  setView,
}: {
  balance: number;
  setBalance: (balance: number) => void;
  setView: (view: string) => void;
}) {
  const initialState: State = {
    balance: balance,
    message: null,
    errors: {},
    view: "withdrawal",
  };
  const [state, formAction] = useActionState(createWithdrawal, initialState);

  if (state.message === "Withdrawal successful") {
    setTimeout(() => {
      setView("main");
      setBalance(state.balance);
    }, 1000);
  }
  return (
    <form action={formAction}>
      <div className="rounded-md bg-inherit p-4 ">
        {/* Amount */}
        <div className="mb-4 align-center">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter an amount to withdraw
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                type="number"
                name="amount"
                id="amount"
                required
                autoFocus
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="text-sm text-red-600">
            {state.message && <p>{state.message}</p>}
            {state.balance && <p>current balance: {state.balance}</p>}
          </div>
        </div>

        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
}
