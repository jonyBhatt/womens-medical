import * as React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'outline' | 'success' | 'warning';
}

export const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                {
                    'bg-indigo-100 text-indigo-800': variant === 'default',
                    'text-slate-600 border border-slate-200': variant === 'outline',
                    'bg-green-100 text-green-800': variant === 'success',
                    'bg-yellow-100 text-yellow-800': variant === 'warning',
                },
                className
            )}
            {...props}
        />
    );
};
