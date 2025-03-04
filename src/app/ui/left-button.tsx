import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function LeftButton({ children, className, ...rest }: ButtonProps) {
  return (
    <div className="flex items-center justify-center">
      <button
        {...rest}
        className={clsx(
          "h-10 mb-2 w-13 z-1 items-center rounded-lg bg-[#c1c1c1] px-4 transition-colors shadow-lg shadow-blue-300/50 hover:bg-blue-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600  aria-disabled:opacity-50",
          className
        )}
      >
        {children}
      </button>
      <hr className="absolute overflow-visible w-12 ml-4 mb-2 text-[#9a9a9b] border-2 z-0" />
    </div>
  );
}
