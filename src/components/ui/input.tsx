import { cn } from '@/utilities/ui'
import * as React from 'react'

const Input: React.FC<
  {
    ref?: React.Ref<HTMLInputElement>
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type, className, ref, ...props }) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                'border-2 border-border rounded-xl overflow-hidden bg-card hover:cursor-pointer',
        'dark:shadow-[4px_4px_0px_0px_rgba(150,223,234,0.3)]', // cyan glow in dark
        'shadow-[4px_4px_0px_0px_rgba(37,62,85,1)]', // dark shadow in light
        'hover:shadow-[2px_2px_0px_0px_rgba(37,62,85,1)] hover:translate-x-[2px] hover:translate-y-[2px]',
        'dark:hover:shadow-[2px_2px_0px_0px_rgba(150,223,234,0.3)]',
        'transition-all duration-150',className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  )
}

export { Input }
