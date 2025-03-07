export interface State {
  balance: number;
  pin?: string;
  message: string | null;
  view: "main" | "withdrawal" | "deposit";
  errors: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
}

export async function createWithdrawal(
  state: State,
  formData: FormData
): Promise<State> {
  if (state.balance < parseFloat(formData.get("amount") as string)) {
    return {
      ...state,
      message: "Withdrawal failed",
      errors: { amount: ["Insufficient funds"] },
    };
  }
  // Simulate an API call
  const response = await new Promise<Response>((resolve) => {
    setTimeout(() => {
      resolve(
        new Response(
          JSON.stringify({ id: "123", amount: formData.get("amount") }),
          {
            status: 200,
          }
        )
      );
    }, 200);
  });

  if (!response.ok) {
    const errors = await response.json();
    return {
      ...state,
      message: "Withdrawal failed",
      errors,
    };
  }

  return {
    ...state,
    balance: state.balance - parseFloat(formData.get("amount") as string),
    message: "Withdrawal successful",
    errors: {},
    view: "main",
  };
}

export async function createDeposit(
  state: State,
  formData: FormData
): Promise<State> {
  // Simulate an API call
  const response = await new Promise<Response>((resolve) => {
    setTimeout(() => {
      resolve(
        new Response(
          JSON.stringify({ id: "123", amount: formData.get("amount") }),
          {
            status: 200,
          }
        )
      );
    }, 200);
  });

  if (!response.ok) {
    const errors = await response.json();
    return {
      ...state,
      message: "Deposit failed",
      errors,
    };
  }

  return {
    ...state,
    balance: state.balance + parseFloat(formData.get("amount") as string),
    message: "Deposit successful",
    errors: {},
    view: "main",
  };
}
