import * as React from "react";

type Size = "sm" | "default" | "lg" | "icon";
type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  asChild?: boolean;
  className?: string;
}

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

const sizeMap: Record<Size, string> = {
  sm: "h-9 rounded-md px-3 text-sm",
  default: "h-10 px-4 py-2",
  lg: "h-11 rounded-md px-8 text-lg",
  icon: "h-10 w-10 p-0",
};

const variantMap: Record<Variant, string> = {
  default: "bg-primary text-white hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90",
  outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-white hover:bg-secondary/80",
  ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline bg-transparent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "default", variant = "default", className = "", asChild = false, children, ...props }, ref) => {
    const classes = cn(baseClasses, variantMap[variant], sizeMap[size], className);

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(child.props?.className, classes),
        ...props,
      } as Partial<{ className?: string }> & typeof props);
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
export default Button;
