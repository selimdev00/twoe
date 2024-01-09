import styles from "./UIButton.module.scss";

import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const UIButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={`${styles.button} ${styles[`button--${variant}`]}`}
    >
      {children}
    </button>
  ),
);

UIButton.displayName = "UIButton";

export default UIButton;
