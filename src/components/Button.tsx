import { MouseEventHandler, ReactNode } from "react";

interface IButton {
  type: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  disabled?: boolean;
}

export default function Button({ type, onClick, children, disabled }: IButton) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="hoveR:bg-lime-400 mt-2 block w-[12em] rounded-md bg-lime-400 p-2 duration-500 hover:bg-lime-500 disabled:cursor-not-allowed disabled:bg-lime-200 "
    >
      {children}
    </button>
  );
}
