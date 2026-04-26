import React from "react";

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const NeoButton = ({
  children,
  className = "",
  ...props
}: NeoButtonProps) => {
  return (
    <button
      className={`relative inline-block group font-bold cursor-pointer ${className}`}
      {...props}
    >
      <span className="absolute inset-0 bg-primary border-2 border-foreground translate-x-1.5 translate-y-1.5 rounded-sm transition-transform 
      group-hover:translate-x-0 group-hover:translate-y-0"></span>

      <span className="relative block px-8 py-3 bg-white text-background border-2 border-background uppercase tracking-wider rounded-sm
       transition-transform group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-primary group-active:scale-95 ">
        {children}
      </span>
    </button>
  );
};
