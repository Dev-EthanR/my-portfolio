import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

interface BaseProps {
  variant: "primary" | "outline";
  children: ReactNode;
  className?: string;
  size?: "large" | "small" | "extraSmall";
}

interface ButtonProps extends BaseProps {
  onClick: () => void;
  target?: never;
  href?: never;
}

interface LinkProps extends BaseProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  onClick?: never;
}

type Props = ButtonProps | LinkProps;

const Button = (props: Props) => {
  const { variant = "primary", children, className, size = "small" } = props;

  const baseClasses = "transition-colors cursor-pointer";
  const variantClasses = {
    primary: "bg-primary text-black/90 hover:bg-primary-glow font-extrabold",
    outline:
      "text-text-primary font-light gap-2 border-border border-2 bg-transparent hover:bg-border transition-colors",
  };
  const sizes = {
    large: "px-6 py-3",
    small: "px-4 py-1.5",
    extraSmall: "px-2 py-2 text-sm rounded-md flex items-center justify-center",
  };

  const classes = clsx(
    className,
    baseClasses,
    variantClasses[variant],
    sizes[size],
  );

  if ("href" in props) {
    const { href, target } = props;
    return (
      <Link href={href as string} target={target} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
