import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'sage';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-bold transition-all duration-200 transform active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-pink-200 text-pink-900 hover:bg-pink-300 border border-pink-200",
    outline: "bg-transparent text-pink-900 border-2 border-pink-200 hover:bg-pink-50",
    sage: "bg-sage-100 text-sage-800 hover:bg-sage-200 border border-sage-200"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;