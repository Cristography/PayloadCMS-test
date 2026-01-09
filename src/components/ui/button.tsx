import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 px-6 py-2',
        icon: 'h-10 w-10',
        lg: 'h-12 rounded-lg px-8',
        sm: 'h-9 rounded-lg px-4',
      },
      variant: {
        default:
          'bg-secondary text-secondary-foreground border-2 border-foreground ' +
          'shadow-[3px_3px_0px_0px_rgba(37,62,85,1)] ' +
          'hover:shadow-[1px_1px_0px_0px_rgba(37,62,85,1)] hover:translate-x-[2px] hover:translate-y-[2px] ' +
          'dark:shadow-[3px_3px_0px_0px_rgba(150,223,234,0.4)] ' +
          'dark:hover:shadow-[1px_1px_0px_0px_rgba(150,223,234,0.4)]',
        destructive:
          'bg-destructive text-destructive-foreground border-2 border-foreground ' +
          'shadow-[3px_3px_0px_0px_rgba(37,62,85,1)] ' +
          'hover:shadow-[1px_1px_0px_0px_rgba(37,62,85,1)] hover:translate-x-[2px] hover:translate-y-[2px] ' +
          'dark:shadow-[3px_3px_0px_0px_rgba(255,128,128,0.4)] ' +
          'dark:hover:shadow-[1px_1px_0px_0px_rgba(255,128,128,0.4)]',
        ghost: 'hover:bg-card hover:text-accent-foreground',
        link: 'text-primary items-start justify-start underline-offset-4 hover:underline font-normal',
        outline:
          'border-2 border-border bg-card hover:bg-accent ' +
          'shadow-[3px_3px_0px_0px_rgba(37,62,85,1)] ' +
          'hover:shadow-[1px_1px_0px_0px_rgba(37,62,85,1)] hover:translate-x-[2px] hover:translate-y-[2px] ' +
          'dark:shadow-[3px_3px_0px_0px_rgba(150,223,234,0.2)] ' +
          'dark:hover:shadow-[1px_1px_0px_0px_rgba(150,223,234,0.2)]',
        secondary:
          'bg-secondary text-secondary-foreground border-2 border-foreground ' +
          'shadow-[3px_3px_0px_0px_rgba(37,62,85,1)] ' +
          'hover:shadow-[1px_1px_0px_0px_rgba(37,62,85,1)] hover:translate-x-[2px] hover:translate-y-[2px] ' +
          'dark:shadow-[3px_3px_0px_0px_rgba(150,223,234,0.3)] ' +
          'dark:hover:shadow-[1px_1px_0px_0px_rgba(150,223,234,0.3)]',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
}

export { Button, buttonVariants }