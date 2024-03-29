import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const title = tv({
  variants: {
    variant: {
      default: "text-primary font-bold",
      title: "font-sans font-semibold text-secondary",
    },
    size: {
      default: "text-4xl",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-5xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type TitleProps = ComponentProps<"h1"> & VariantProps<typeof title>;

const Title = ({ variant, size, className, ...props }: TitleProps) => {
  return <h1 className={title({ variant, size, className })} {...props} />;
};

export { Title };
