export default function Balance({ balance }: { balance: number }) {
  return (
    <div className="rounded-md bg-inherit p-4 text-center">
      Current Balance: {balance}
    </div>
  );
}
