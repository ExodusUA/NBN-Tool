import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/components/lib/utils";

const buttonVariants = cva(
  "text-xs font-semibold duration-300 inline-flex items-center justify-center gap-1 disabled:opacity-50", //це стилі по дефолту, які працюють для всіх варінтів
  {
    variants: {
      variant: {
        white: "bg-white text-gray-900",
        blue: "bg-blue text-white hover:bg-blue-600 active:bg-blue-400 disabled:bg-blue-300 disabled:text-blue-200 disabled:bg-white disabled:text-gray-400 shadow-md",
        green: "bg-green text-black",
      },
      size: {
        md: "py-2 px-4",
        lg: "py-4 px-6",
      },
    },
    defaultVariants: {
      variant: "white",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, asChild = false, ...props }, ref) => {
    const Comp = "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
