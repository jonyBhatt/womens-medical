import * as React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                    {
                        'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm': variant === 'primary',
                        'bg-indigo-100 text-indigo-900 hover:bg-indigo-200': variant === 'secondary',
                        'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50': variant === 'outline',
                        'hover:bg-slate-100 text-slate-700': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                        'w-full': fullWidth,
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
