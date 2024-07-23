import { Button } from "@mui/material";
import React from "react";

const ButtonPrimary: React.FC<{
  children: string | JSX.Element | React.ReactNode;
  variant?: "text" | "contained" | "outlined";
  disableElevation?: boolean;
  onClick?: () => void;
  className?: string;
  py?: string;
  px?: string;
}> = ({
  children,
  variant = "contained",
  disableElevation = false,
  onClick,
  className,
  py,
  px,
}) => {
  const classes = className;
  return (
    <button
      onClick={onClick}
      className={`rounded-lg flex items-center ${
        px ? px : "max-md:px-[18px] px-[26px]"
      } ${
        py ? py : "max-xs:py-2 max-md:py-3 py-4"
      } shadow-md fontInter font-medium justify-center transition-all duration-200 active:scale-[97%] active:shadow-sm border-2 ${
        variant === "outlined"
          ? "border-[var(--color-primary)] colorPrimary"
          : "bgPrimary text-white hover:bg-[var(--color-primary-dark)] border-[var(--color-primary)]"
      } ${classes ? classes : ""}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
