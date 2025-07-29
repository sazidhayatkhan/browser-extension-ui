import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'outlined';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {

  const baseStyles = 'px-[12px] py-[6px] rounded-full font-medium transition-colors duration-500 text-xs md:text-sm border border-gray-600';

  const variantStyles = {
    primary: 'bg-gray-700 text-white hover:bg-transparent',
    outlined: 'text-white bg-transparent hover:bg-gray-700',
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
