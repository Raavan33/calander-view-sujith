import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-md font-medium transition-colors",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-200 text-gray-800 hover:bg-gray-300": variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
